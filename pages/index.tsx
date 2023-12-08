import type { NextPage } from "next";
import { useEffect } from "react";
import ContainerCardFormFilter from "../components/container-card-form-filter";
import PricingCardContainer from "../components/pricing-card-container";
import PricingCard3 from "../components/pricing-card3";
import PricingCard1 from "../components/pricing-card1";
import PricingCard2 from "../components/pricing-card2";
import PricingCard from "../components/pricing-card";
import ChatwardsForm from "../components/chatwards-form";

const ProctoWise: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="relative bg-white w-full h-[727px]">
      <section className="absolute w-full top-[698px] right-[0px] left-[0px] h-[602px] overflow-hidden text-left text-[23.81px] text-gray-200 font-space-grotesk">
        <img
          className="absolute top-[calc(50%_-_301px)] left-[220px] w-[1000px] h-[572.5px] overflow-hidden"
          alt=""
          src="/blurryshape3svg.svg"
        />
        <div className="absolute top-[60px] left-[calc(50%_-_672px)] w-[1344px] h-[482px]">
          <b className="absolute top-[-1px] left-[calc(50%_-_558.4px)] text-[47.81px] leading-[60px] flex text-center items-center w-[1116.9px] h-[121px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">
                An intelligent, AI-powered assistant designed to
              </p>
              <p className="m-0">
                transform the way you interact with your data!
              </p>
            </span>
          </b>
          <div className="absolute h-[calc(100%_-_426px)] top-[192px] bottom-[234px] left-[24px] rounded-xl bg-blueviolet-300 box-border w-14 text-blueviolet-100 border-[1px] border-solid border-blueviolet-200">
            <b className="absolute top-[13px] left-[14.9px] leading-[30px] flex items-center w-[26.4px] h-[30px]">
              01
            </b>
          </div>
          <b className="absolute top-[191px] left-[104px] leading-[30px] flex items-center w-[274.6px] h-[91px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Data is the new gold,</p>
              <p className="m-0">Chatwards will help you</p>
              <p className="m-0">mine it!</p>
            </span>
          </b>
          <div className="absolute top-[299px] left-[104px] text-base leading-[24px] flex items-center w-[313.8px] h-[165px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Are you tired of the data maze? Do you</p>
              <p className="m-0">find it exhausting to spend countless</p>
              <p className="m-0">hours and funds trying to extract</p>
              <p className="m-0">valuable information from your</p>
              <p className="m-0">company's data scattered across</p>
              <p className="m-0">various platforms like Databases, Google</p>
              <p className="m-0">Drive, CSV, Word and PDF files, and more?</p>
            </span>
          </div>
          <div className="absolute h-[calc(100%_-_426px)] top-[192px] bottom-[234px] left-[474.7px] rounded-xl bg-blueviolet-300 box-border w-14 text-5xl text-blueviolet-100 border-[1px] border-solid border-blueviolet-200">
            <b className="absolute top-[13px] left-[13.1px] leading-[30px] flex items-center w-[30px] h-[30px]">
              02
            </b>
          </div>
          <b className="absolute top-[191px] left-[554.7px] leading-[30px] flex items-center w-[298.3px] h-[61px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Multi-Document Mastery:</p>
              <p className="m-0">Your Data, Your Way</p>
            </span>
          </b>
          <div className="absolute top-[269px] left-[554.7px] text-base leading-[24px] flex items-center w-[311.6px] h-[189px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Say goodbye to juggling between</p>
              <p className="m-0">documents or databases and files or</p>
              <p className="m-0">formats. Chatwards is your multi-</p>
              <p className="m-0">document maestro, capable of training</p>
              <p className="m-0">across diverse text fields for</p>
              <p className="m-0">unparalleled conversational intelligence.</p>
              <p className="m-0">No matter where your data resides,</p>
              <p className="m-0">Chatwards has it covered.</p>
            </span>
          </div>
          <div className="absolute h-[calc(100%_-_426px)] top-[192px] bottom-[234px] left-[925.3px] rounded-xl bg-blueviolet-300 box-border w-14 text-5xl text-blueviolet-100 border-[1px] border-solid border-blueviolet-200">
            <b className="absolute top-[13px] left-[13px] leading-[30px] flex items-center w-[30.3px] h-[30px]">
              03
            </b>
          </div>
          <b className="absolute top-[191px] left-[1005.3px] leading-[30px] flex items-center w-[306.7px] h-[91px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Source-Adaptive</p>
              <p className="m-0">Conversations: Contextual</p>
              <p className="m-0">Brilliance</p>
            </span>
          </b>
          <div className="absolute top-[299px] left-[1005.3px] text-base leading-[24px] flex items-center w-[308.8px] h-[165px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">Ever wished your AI assistant</p>
              <p className="m-0">understood context? Chatwards is your</p>
              <p className="m-0">solution. It adapts conversations based</p>
              <p className="m-0">on its trained sources, ensuring every</p>
              <p className="m-0">interaction is contextually relevant. It's</p>
              <p className="m-0">like having a data-savvy co-pilot by</p>
              <p className="m-0">your side 24/7.</p>
            </span>
          </div>
        </div>
      </section>
      <section className="absolute top-[1328.6px] left-[calc(50%_-_672px)] w-[1344px] h-[1416.9px] text-left text-base text-gray-200 font-space-grotesk">
        <h1 className="m-0 absolute top-[48px] left-[105px] text-29xl leading-[60px] font-bold font-inherit flex items-center w-[436px] h-[241px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Your Brand, Your</p>
            <p className="m-0">Control: Admin</p>
            <p className="m-0">Empowerment Like</p>
            <p className="m-0">Never Before</p>
          </span>
        </h1>
        <div className="absolute top-[322px] left-[105px] leading-[24px] flex items-center w-[524.2px] h-[141px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              With Chatwards, you're in the driver's seat of your brand's
              narrative.
            </p>
            <p className="m-0">
              Admins wield unprecedented power, customizing every facet of the
            </p>
            <p className="m-0">
              chatbot's behavior, from its responses to its appearance. The
            </p>
            <p className="m-0">
              result? An experience that aligns perfectly with your brand's
              vision
            </p>
            <p className="m-0">
              and voice all while effortlessly creating, training, and managing
            </p>
            <p className="m-0">multiple chatbots with customised permissions</p>
          </span>
        </div>
        <img
          className="absolute h-[calc(100%_-_1396.9px)] top-[491px] bottom-[905.9px] left-[105px] max-h-full w-5 overflow-hidden"
          alt=""
          src="/list--item--svg.svg"
        />
        <div className="absolute top-[489px] left-[141px] leading-[24px] flex items-center w-[297.7px] h-6">
          Take the prowess of AI in 3 easy steps.
        </div>
        <img
          className="absolute h-[calc(100%_-_1396.9px)] top-[523px] bottom-[873.9px] left-[105px] max-h-full w-5 overflow-hidden"
          alt=""
          src="/list--item--svg.svg"
        />
        <div className="absolute top-[521px] left-[141px] leading-[24px] flex items-center w-[424.2px] h-6">
          Complex information, delivered easy at your fingertips.
        </div>
        <img
          className="absolute h-[calc(100%_-_1396.9px)] top-[555px] bottom-[841.9px] left-[105px] max-h-full w-5 overflow-hidden"
          alt=""
          src="/list--item--svg.svg"
        />
        <div className="absolute top-[553px] left-[141px] leading-[24px] flex items-center w-[181.3px] h-6">
          Your data, your control!
        </div>
        <div className="absolute top-[609px] left-[105px] leading-[24px] text-blueviolet-100 flex items-center w-[156.7px] h-6">
          Get Started For Free
        </div>
        <img
          className="absolute top-[calc(50%_-_95.45px)] left-[273.4px] w-4 h-4 overflow-hidden"
          alt=""
          src="/link--svg.svg"
        />
        <div className="absolute top-[calc(50%_-_656.35px)] left-[712px] w-[527px] h-[577.8px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[527px] h-[577.8px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            alt=""
            src="/featureillustration1bluesvg-fill.svg"
            data-animate-on-scroll
          />
        </div>
        <b className="absolute top-[894.4px] left-[712px] text-[47.81px] leading-[60px] flex items-center w-[472.8px] h-[181px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">OPEX optimization is</p>
            <p className="m-0">so “Yesterday” with</p>
            <p className="m-0">Chatwards…</p>
          </span>
        </b>
        <div className="absolute top-[1108.4px] left-[712px] leading-[24px] flex items-center w-[520.4px] h-[117px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">
              A Partner, Not Just a Tool! With its versatile iframe flexibility,
            </p>
            <p className="m-0">
              Chatwards effortlessly embeds into any web application, becoming
            </p>
            <p className="m-0">
              an integral part of your workflows. It plays well with Postgres,
              SQL,
            </p>
            <p className="m-0">
              Google Drive, Zapier, and even Slack – ensuring your data journey
              is
            </p>
            <p className="m-0">
              seamless without additional efforts or expenses.
            </p>
          </span>
        </div>
        <div className="absolute top-[1251.4px] left-[712px] leading-[24px] text-blueviolet-100 flex items-center w-[156.7px] h-6">
          Get Started For Free
        </div>
        <img
          className="absolute top-[calc(50%_+_546.95px)] left-[880.4px] w-4 h-4 overflow-hidden"
          alt=""
          src="/link--svg1.svg"
        />
        <div className="absolute top-[calc(50%_+_94.55px)] left-[105px] w-[527px] h-[564.9px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[0px] w-[527px] h-[564.9px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
            alt=""
            src="/featureillustration2bluesvg-fill.svg"
            data-animate-on-scroll
          />
        </div>
      </section>
      <section className="absolute top-[2937.5px] left-[calc(50%_-_672px)] w-[1344px] h-[598px] text-center text-base text-gray-200 font-space-grotesk">
        <b className="absolute top-[0px] left-[calc(50%_-_259.3px)] text-[47.81px] leading-[60px] flex items-center justify-center w-[518.8px] h-[60px]">
          All For One, One for All!
        </b>
        <img
          className="absolute top-[calc(50%_-_171px)] left-[calc(50%_-_530px)] w-16 h-16 overflow-hidden object-cover"
          alt=""
          src="/ecommercepng@2x.png"
        />
        <h3 className="m-0 absolute top-[212px] left-[calc(50%_-_613.9px)] text-xl leading-[25px] font-bold font-inherit flex items-center justify-center w-[232.1px] h-[25px]">
          E-commerce Companies
        </h3>
        <div className="absolute top-[254px] left-[calc(50%_-_618.6px)] leading-[24px] flex items-center w-[241.3px] h-[69px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Manage customer interactions,</p>
            <p className="m-0">product inquiries, and order</p>
            <p className="m-0">processing efficiently.</p>
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_-_171px)] left-[calc(50%_-_198px)] w-16 h-16 overflow-hidden object-cover"
          alt=""
          src="/cscpng@2x.png"
        />
        <h3 className="m-0 absolute top-[212px] left-[calc(50%_-_294.7px)] text-xl leading-[25px] font-bold font-inherit flex items-center justify-center w-[257.7px] h-[25px]">
          Customer Support Centers
        </h3>
        <div className="absolute top-[254px] left-[calc(50%_-_312.4px)] leading-[24px] flex items-center w-[293px] h-[69px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Handle customer inquiries,</p>
            <p className="m-0">troubleshoot issues, and provide real-</p>
            <p className="m-0">time assistance 24/7.</p>
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_-_171px)] left-[calc(50%_+_134px)] w-16 h-16 overflow-hidden object-cover"
          alt=""
          src="/marketresearchpng@2x.png"
        />
        <b className="absolute top-[212px] left-[calc(50%_+_56.5px)] text-[19.84px] leading-[25px] flex items-center justify-center w-[219.1px] h-[25px]">
          Market Research Firms
        </b>
        <div className="absolute top-[254px] left-[calc(50%_+_31.2px)] leading-[24px] flex items-center w-[269.8px] h-[69px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Analyze huge amounts of data and</p>
            <p className="m-0">extract insights for informed</p>
            <p className="m-0">decision-making.</p>
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_-_171px)] left-[calc(50%_+_466px)] w-16 h-16 overflow-hidden object-cover"
          alt=""
          src="/financialpng@2x.png"
        />
        <b className="absolute top-[212px] left-[calc(50%_+_396px)] text-[19.84px] leading-[25px] flex items-center justify-center w-[204.1px] h-[25px]">
          Financial Institutions
        </b>
        <div className="absolute top-[254px] left-[calc(50%_+_362.8px)] leading-[24px] flex items-center w-[270.5px] h-[93px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Facilitate seamless communication</p>
            <p className="m-0">with clients, offer tailored financial</p>
            <p className="m-0">advice, and investment insights</p>
            <p className="m-0">whenever needed.</p>
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_+_102px)] left-[calc(50%_-_530px)] w-16 h-16 overflow-hidden object-cover"
          alt=""
          src="/healthcarepng@2x.png"
        />
        <b className="absolute top-[485px] left-[calc(50%_-_620px)] text-[19.84px] leading-[25px] flex items-center justify-center w-[244.1px] h-[25px]">
          Healthcare Organisations
        </b>
        <div className="absolute top-[527px] left-[calc(50%_-_627.9px)] leading-[24px] flex items-center w-[260px] h-[69px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Streamline patient interactions,</p>
            <p className="m-0">provide medical information, and</p>
            <p className="m-0">manage appointment scheduling.</p>
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_+_102px)] left-[calc(50%_-_198px)] w-16 h-16 overflow-hidden object-cover"
          alt=""
          src="/educationpng@2x.png"
        />
        <b className="absolute top-[485px] left-[calc(50%_-_282.3px)] text-[19.84px] leading-[25px] flex items-center justify-center w-[232.8px] h-[25px]">
          Educational Institutions
        </b>
        <div className="absolute top-[527px] left-[calc(50%_-_306.3px)] leading-[24px] flex items-center w-[280.8px] h-[69px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Offer personalized tutoring, respond</p>
            <p className="m-0">to student queries, and support e-</p>
            <p className="m-0">learning experiences.</p>
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_+_102px)] left-[calc(50%_+_134px)] w-16 h-16 overflow-hidden object-cover"
          alt=""
          src="/supportpng@2x.png"
        />
        <h3 className="m-0 absolute top-[485px] left-[calc(50%_+_72.3px)] text-xl leading-[25px] font-bold font-inherit flex items-center justify-center w-[187.6px] h-[25px]">
          IT Support Services
        </h3>
        <div className="absolute top-[527px] left-[calc(50%_+_19.1px)] leading-[24px] flex items-center w-[293.9px] h-[69px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Provide instant technical support and</p>
            <p className="m-0">solutions to clients with software and</p>
            <p className="m-0">hardware issues.</p>
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_+_102px)] left-[calc(50%_+_466px)] w-16 h-16 overflow-hidden object-cover"
          alt=""
          src="/logisticspng@2x.png"
        />
        <b className="absolute top-[485px] left-[calc(50%_+_367.1px)] text-[19.84px] leading-[25px] flex items-center justify-center w-[261.9px] h-[25px]">
          Logistics and Supply Chain
        </b>
        <div className="absolute top-[527px] left-[calc(50%_+_360.7px)] leading-[24px] flex items-center w-[274.7px] h-[69px]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Track shipments, provide order</p>
            <p className="m-0">updates, and optimize supply chain</p>
            <p className="m-0">operations.</p>
          </span>
        </div>
      </section>
      <section className="absolute top-[3715.5px] left-[calc(50%_-_672px)] w-[1344px] h-[1200px]">
        <ContainerCardFormFilter />
        <PricingCardContainer />
        <PricingCard3 />
        <PricingCard1 />
        <PricingCard2 />
      </section>
      <section className="absolute w-full top-[0px] right-[0px] left-[0px] overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[32px] text-left text-29xl text-gray-200 font-space-grotesk">
        <PricingCard />
        <h1 className="m-0 relative text-inherit leading-[60px] font-bold font-inherit flex items-center w-[521px] h-[468px] shrink-0">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">Say hello to more free</p>
            <p className="m-0">
              <span>{`time with `}</span>
              <span className="text-blueviolet-100">Chatwards</span>
            </p>
            <p className="m-0">the AI ChatBot that</p>
            <p className="m-0">helps your documents</p>
            <p className="m-0">speak!</p>
          </span>
        </h1>
        <div
          className="relative rounded-2xl bg-gray-300 shadow-[0px_16px_48px_rgba(0,_0,_0,_0.18)] box-border w-[742.7px] h-[378.6px] overflow-hidden shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0] border-[1px] border-solid border-lightsteelblue-200"
          data-animate-on-scroll
        >
          <img
            className="absolute w-[calc(100%_-_2px)] top-[1px] right-[1px] left-[1px] max-w-full overflow-hidden h-[369.6px] object-cover"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </section>
      <section className="absolute w-full top-[4916px] right-[0px] left-[0px] h-[636px] overflow-hidden text-left text-[40px] text-gray-200 font-space-grotesk">
        <div
          className="absolute w-[calc(100%_-_144px)] top-[60px] right-[72px] left-[72px] rounded-xl h-[516px] overflow-hidden [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top] opacity-[0]"
          data-animate-on-scroll
        >
          <img
            className="absolute h-[99.61%] w-[99.85%] top-[0.19%] right-[0.08%] bottom-[0.19%] left-[0.08%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/before@2x.png"
          />
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/divrounded5-paints.svg"
          />
          <h1 className="m-0 absolute top-[157px] left-[65px] text-inherit leading-[50px] font-bold font-inherit flex items-center w-[435.2px] h-[151px]">
            <span className="[line-break:anywhere] w-full">
              <p className="m-0">The Co-worker You've</p>
              <p className="m-0">Always Dreamed of for</p>
              <p className="m-0">Data-Driven Content!</p>
            </span>
          </h1>
          <button className="cursor-pointer p-0 bg-blueviolet-100 absolute top-[calc(50%_+_74px)] left-[65px] rounded-lg box-border w-[206.1px] h-[50px] border-[1px] border-solid border-blueviolet-100">
            <div className="absolute top-[calc(50%_-_11px)] left-[25px] text-base leading-[24px] font-medium font-space-grotesk text-white text-center flex items-center justify-center w-[156.4px] h-[21px]">
              Get Started For Free
            </div>
          </button>
          <div className="absolute w-[calc(100%_-_569.2px)] top-[65px] right-[25px] left-[544.2px] rounded-t-2xl rounded-b-none box-border h-[450px] overflow-hidden border-[1px] border-solid border-lightsteelblue-200">
            <img
              className="absolute w-[calc(100%_-_2px)] top-[calc(50%_-_224px)] right-[1px] left-[1px] max-w-full overflow-hidden h-[470.8px] object-cover"
              alt=""
              src="/screen6jpg@2x.png"
            />
          </div>
          <img
            className="absolute top-[81px] left-[448.2px] w-[82px] h-10 overflow-hidden"
            alt=""
            src="/svg.svg"
          />
        </div>
      </section>
      <section className="absolute h-[52.61%] w-full top-[758.32%] right-[0%] bottom-[-710.94%] left-[0%]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/footer.svg"
        />
        <ChatwardsForm />
      </section>
      <img
        className="absolute top-[659px] left-[1368px] rounded-[48px] w-16 h-16"
        alt=""
        src="/divchatwardsgolbutton.svg"
      />
    </div>
  );
};

export default ProctoWise;
