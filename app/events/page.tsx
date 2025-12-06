import Events from "@/components/events/events";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Events, workshops, and speaking engagements by Tejas Nasre. Explore my participation in tech conferences, hackathons, and community events.",
  openGraph: {
    title: "Events | Tejas Nasre",
    description: "Events, workshops, and speaking engagements by Tejas Nasre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Events | Tejas Nasre",
    description: "Events, workshops, and speaking engagements by Tejas Nasre",
  },
};

function page() {
  return (
    <>
      <Events />
    </>
  );
}

export default page;
