import JudgeSection from "@/sections/JudgeSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import OrganzierSection from "@/sections/OrganzierSection";
import ParticipantSection from "@/sections/ParticipantSection";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ValuePropositionSection from "@/sections/ValuePropositionSection";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 ">
          <p className="text-sm font-semibold text-gray-700">
            ProctoWise is live
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-txl">
          Streamlining competitions,{" "}
          <span className="text-blue-600">empowering </span> organizers and
          participants.
        </h1>
        <p className="mt-5 max-w-prose-text-zinc-700 sm:text-lg">
          Proctowise revolutionizes competition and{" "}
          <span className="text-bold text-blue-700">event management</span> by
          providing a user-friendly web-based platform that{" "}
          <span className="text-bold text-blue-700">
            automates registration, evaluation
          </span>{" "}
          , and{" "}
          <span className="text-bold text-blue-700">payment processing</span>,
          ensuring efficient and error-free processes.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5",
          })}
          href="/pricing"
          target="_blank"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>
      {/* value proposition section */}
      <ValuePropositionSection />
      {/* Organizer section */}
      <OrganzierSection />
      {/* Participant section */}
      <ParticipantSection />
      {/* Judge section */}
      <JudgeSection />
    </>
  );
}
