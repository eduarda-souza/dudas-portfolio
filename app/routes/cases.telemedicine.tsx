import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  return redirect(`/cases/hrtechnology${url.search}`);
}

export default function LegacyTelemedicineCase() {
  return null;
}
