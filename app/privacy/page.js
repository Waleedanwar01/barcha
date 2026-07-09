import SectionHeading from "../../components/section-heading";
import Reveal from "../../components/reveal";
import { legalSections } from "../../lib/site-data";

export const metadata = {
  title: "Privacy Policy | Barcha Digital",
  description: "Read our privacy guidelines regarding client data, tracking metrics, and operational logs.",
};

export default function PrivacyPage() {
  return (
    <section className="px-6 pb-20 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Privacy"
          title="Privacy guidelines regarding site operations."
          text="This page summarizes our approach to collecting information and processing data."
        />

        <Reveal className="mt-10 space-y-5" y={16}>
          {legalSections.privacy.map((item) => (
            <div key={item} className="panel p-6 text-sm leading-7 text-white/68">
              {item}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
