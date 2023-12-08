import type { NextPage } from "next";

const PricingCardContainer: NextPage = () => {
  return (
    <div className="absolute h-[calc(100%_-_326px)] w-[calc(100%_-_1038px)] top-[326px] right-[1014px] bottom-[0px] left-[24px] rounded-2xl box-border text-left text-sm text-gray-200 font-space-grotesk border-[1px] border-solid border-lightsteelblue-100">
      <h2 className="m-0 absolute top-[33px] left-[41px] text-5xl leading-[30px] font-medium font-inherit text-blueviolet-100 flex items-center w-[50.1px] h-[30px]">
        Free
      </h2>
      <b className="absolute top-[79px] left-[41px] text-29xl leading-[60px] flex items-center w-[60.4px] h-[60px]">
        $0
      </b>
      <div className="absolute top-[156px] left-[41px] leading-[21px] flex items-center w-[220.6px] h-[39px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">A 10X faster way to analyze your</p>
          <p className="m-0">data and extract insights</p>
        </span>
      </div>
      <button className="cursor-pointer p-0 bg-blueviolet-100 absolute w-[calc(100%_-_82px)] top-[calc(50%_-_204px)] right-[41px] left-[41px] rounded-lg box-border h-[46px] border-[1px] border-solid border-blueviolet-100">
        <div className="absolute top-[calc(50%_-_11px)] left-[60px] text-base leading-[20px] font-medium font-space-grotesk text-white text-center flex items-center justify-center w-[104.3px] h-[21px]">
          Start for Free
        </div>
      </button>
      <div className="absolute top-[315px] left-[41px] leading-[21px] text-limegreen flex items-center w-[4.1px] h-[21px]">
        ✓
      </div>
      <div className="absolute top-[315px] left-[65px] leading-[21px] flex items-center w-[129.9px] h-[21px]">
        Unlimited chatbots
      </div>
      <div className="absolute top-[364px] left-[41px] leading-[21px] text-limegreen flex items-center w-[4.1px] h-[21px]">
        ✓
      </div>
      <div className="absolute top-[365px] left-[65px] leading-[21px] flex items-center w-[162.8px] h-[39px]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">2 million</p>
          <p className="m-0">characters/organization</p>
        </span>
      </div>
      <div className="absolute top-[434px] left-[41px] leading-[21px] text-limegreen flex items-center w-[4.1px] h-[21px]">
        ✓
      </div>
      <div className="absolute top-[434px] left-[65px] leading-[21px] flex items-center w-[198.7px] h-[21px]">
        Embed on unlimited websites
      </div>
      <div className="absolute top-[483px] left-[41px] leading-[21px] text-limegreen flex items-center w-[4.1px] h-[21px]">
        ✓
      </div>
      <div className="absolute top-[483px] left-[65px] leading-[21px] flex items-center w-[137.7px] h-[21px]">
        Upload multiple files
      </div>
      <div className="absolute top-[532px] left-[41px] leading-[21px] text-limegreen flex items-center w-[4.1px] h-[21px]">
        ✓
      </div>
      <div className="absolute top-[532px] left-[65px] leading-[21px] flex items-center w-[148.1px] h-[21px]">
        WhatsApp integration
      </div>
    </div>
  );
};

export default PricingCardContainer;
