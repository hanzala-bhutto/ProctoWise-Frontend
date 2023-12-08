import type { NextPage } from "next";

const PricingCard: NextPage = () => {
  return (
    <div className="relative bg-white w-[1440px] h-[83.4px] text-left text-base text-blueviolet-100 font-space-grotesk">
      <div className="absolute top-[calc(50%_-_25.7px)] left-[calc(50%_-_672px)] w-[1344px] h-[51.4px]">
        <img
          className="absolute top-[calc(50%_-_25.7px)] left-[24px] w-[165px] h-[51.4px]"
          alt=""
          src="/link.svg"
        />
        <div className="absolute top-[calc(50%_-_25px)] left-[205px] w-[1115px] h-[50px]">
          <div className="absolute top-[calc(50%_-_20px)] left-[796.5px] w-[139.8px] h-10">
            <a className="[text-decoration:none] absolute w-[calc(100%_-_70.7px)] top-[0px] right-[70.7px] left-[0px] h-10 text-[inherit]">
              <div className="absolute top-[9px] left-[8px] leading-[24px] flex items-center w-[53.5px] h-[21px]">
                Pricing
              </div>
            </a>
            <div className="absolute w-[calc(100%_-_89.1px)] top-[0px] right-[0px] left-[89.1px] h-10">
              <div className="absolute top-[9px] left-[8px] leading-[24px] flex items-center w-[35px] h-[21px]">
                Blog
              </div>
            </div>
          </div>
          <button className="cursor-pointer p-0 bg-[transparent] absolute top-[calc(50%_-_25px)] left-[976.3px] rounded-lg box-border w-[138.7px] h-[50px] border-[1px] border-solid border-blueviolet-100">
            <div className="absolute top-[calc(50%_-_11px)] left-[25px] text-base leading-[24px] font-medium font-space-grotesk text-blueviolet-100 text-center flex items-center justify-center w-[89px] h-[21px]">
              Get started
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
