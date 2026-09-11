import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Problem } from "@/components/sections/problem";
import { ProductStructure } from "@/components/sections/product-structure";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FollowUp } from "@/components/sections/follow-up";
import { WhyUs } from "@/components/sections/why-us";
import { Personalize } from "@/components/sections/personalize";
import { CustomDesign } from "@/components/sections/custom-design";
import { AvailableNow } from "@/components/sections/available-now";
import { ExamYears } from "@/components/sections/exam-years";
import { Packages } from "@/components/sections/packages";
import { Comparison } from "@/components/sections/comparison";
import { Upcoming } from "@/components/sections/upcoming";
import { ExamBoards } from "@/components/sections/exam-boards";
import { WhoFor } from "@/components/sections/who-for";
import { UseCases } from "@/components/sections/use-cases";
import { Vision } from "@/components/sections/vision";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Problem />
      <ProductStructure />
      <HowItWorks />
      <FollowUp />
      <WhyUs />
      <Personalize />
      <CustomDesign />
      <AvailableNow />
      <ExamYears />
      <Packages />
      <Comparison />
      <Upcoming />
      <ExamBoards />
      <WhoFor />
      <UseCases />
      <Vision />
      <FAQ />
      <Contact />
    </main>
  );
}
