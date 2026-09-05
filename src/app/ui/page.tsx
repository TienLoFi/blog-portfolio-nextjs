import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ngoctien/ui",
};

export default function Page() {
  return (
    <div className="space-y-2 p-4 font-mono">
      <h1 className="text-3xl font-medium">ngoctien/ui</h1>
      <p>Stay tuned. We are launching soon.</p>
    </div>
  );
}
