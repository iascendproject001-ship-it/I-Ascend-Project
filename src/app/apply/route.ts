import { redirect } from "next/navigation";

/**
 * Short, memorable application address for flyers, WhatsApp broadcasts,
 * school noticeboards and radio mentions. Always resolves to the full
 * six-step participant profiling form.
 */
export function GET() {
  redirect("/start");
}
