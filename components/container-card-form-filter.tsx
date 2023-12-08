import type { NextPage } from "next";

const ContainerCardFormFilter: NextPage = () => {
  return (
    <div className="absolute h-[calc(100%_-_930px)] top-[0px] bottom-[930px] left-[calc(50%_-_553.3px)] w-[1106.7px] text-center text-base text-gray-200 font-space-grotesk">
      <b className="absolute top-[-1px] left-[calc(50%_-_463.05px)] text-[47.81px] leading-[60px] flex items-center w-[926.3px] h-[121px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">Get the Firsthand Experience Here</p>
          <p className="m-0">Chat With Chatwards, About Chatwards!</p>
        </span>
      </b>
      <div className="absolute top-[141px] left-[calc(50%_-_267.55px)] leading-[24px] flex items-center w-[535.3px] h-[21px]">
        <span className="[line-break:anywhere] w-full">
          <span>{`Get started with a 5-day trial, `}</span>
          <span className="text-blueviolet-100">25% off</span>
          <span> for Yearly Plan, Cancel anytime.</span>
        </span>
      </div>
      <div className="absolute top-[212px] left-[calc(50%_-_109.05px)] rounded-lg box-border w-[218px] h-[58px] text-white border-[1px] border-solid border-lightsteelblue-200">
        <div className="absolute top-[9px] left-[-9998px] rounded-31xl bg-white box-border w-[13px] h-[13px] border-[1px] border-solid border-royalblue">
          <div className="absolute h-[calc(100%_-_5.2px)] w-[calc(100%_-_5.2px)] top-[2.6px] right-[2.6px] bottom-[2.6px] left-[2.6px] rounded-31xl bg-royalblue" />
        </div>
        <div className="absolute top-[9px] left-[-9998px] rounded-31xl bg-white box-border w-[13px] h-[13px] border-[1px] border-solid border-gray-100" />
        <div className="absolute top-[9px] left-[9px] rounded-lg bg-blueviolet-100 w-[100px] h-10" />
        <div className="absolute h-[calc(100%_-_18px)] top-[9px] bottom-[9px] left-[9px] rounded-lg w-[100px]">
          <div className="absolute top-[9px] left-[calc(50%_-_32.3px)] leading-[24px] font-medium flex items-center justify-center w-[64.9px] h-[21px]">
            Monthly
          </div>
        </div>
        <div className="absolute h-[calc(100%_-_18px)] top-[9px] bottom-[9px] left-[109px] rounded-lg w-[100px] text-gray-200">
          <div className="absolute top-[9px] left-[calc(50%_-_23.6px)] leading-[24px] font-medium flex items-center justify-center w-[47.5px] h-[21px]">
            Yearly
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
