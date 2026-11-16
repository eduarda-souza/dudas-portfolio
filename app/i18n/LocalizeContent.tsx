import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

import type { Locale } from "./locales";

type Dictionary = Record<string, string>;

const normalize = (value: string) => value.replace(/\s+/g, " ").trim();

export function localizeContent(
  node: ReactNode,
  locale: Locale,
  dictionary: Dictionary,
): ReactNode {
  if (locale !== "pt" || node == null || typeof node === "boolean") return node;

  if (typeof node === "string") {
    const key = normalize(node);
    return dictionary[key] ?? node;
  }

  if (Array.isArray(node)) {
    return node.map((child) => localizeContent(child, locale, dictionary));
  }

  if (!isValidElement(node)) return node;

  const element = node as ReactElement<{ children?: ReactNode }>;
  const children = element.props.children;
  if (children == null) return element;

  if (typeof children === "string") {
    const translation = dictionary[normalize(children)];
    return translation ? cloneElement(element, undefined, translation) : element;
  }

  if (
    Array.isArray(children) &&
    children.every((child) => typeof child === "string")
  ) {
    const translation = dictionary[normalize(children.join(""))];
    if (translation) return cloneElement(element, undefined, translation);
  }

  return cloneElement(
    element,
    undefined,
    localizeContent(children, locale, dictionary),
  );
}
