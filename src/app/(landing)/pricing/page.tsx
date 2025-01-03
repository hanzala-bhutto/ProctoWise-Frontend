import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, Check, HelpCircle, Minus } from "lucide-react";
import Link from "next/link";

const Page = () => {
  const pricingItems = [
    {
      plan: "Free",
      tagline: "Lorem ipsum dolor",
      quota: 10,
      features: [
        {
          text: "Lorem ipsum dolor",
          footnote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
          text: "Lorem ipsum dolor",
          footnote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
          text: "Lorem ipsum dolor",
        },
        {
          text: "Lorem ipsum dolor",
          footnote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
          negative: true,
        },
        {
          text: "Lorem ipsum dolor",
          negative: true,
        },
      ],
    },
    {
      plan: "Pro",
      tagline: "Lorem ipsum dolor",
      quota: 100, // Replace with your desired quota for the Pro plan
      features: [
        {
          text: "Lorem ipsum dolor",
          footnote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
          text: "Lorem ipsum dolor",
          footnote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
          text: "Lorem ipsum dolor",
        },
        {
          text: "Lorem ipsum dolor",
          footnote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        },
        {
          text: "Lorem ipsum dolor",
        },
      ],
    },
  ];

  return (
    <>
      <MaxWidthWrapper className="mb-8 mt-24 text-center max-w-5xl">
        <div className="mx-auto mb-10 sm:max-w-lg">
          <h1 className="text-6xl font-bold sm:text-7xl">Pricing</h1>
          <p className="mt-5 text-gray-600 sm:text-lg">
            Whether you&apos;re just trying out our service or need more,
            we&apos;ve got you covered.
          </p>
        </div>

        <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <TooltipProvider>
            {pricingItems.map(({ plan, tagline, quota, features }) => {
              const price = 0; // Set your desired price or fetch from a source

              return (
                <div
                  key={plan}
                  className={`relative rounded-2xl bg-white shadow-lg ${
                    plan === "Pro"
                      ? "border-2 border-blue-600 shadow-blue-200"
                      : "border border-gray-200"
                  }`}
                >
                  {plan === "Pro" && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                      Upgrade now
                    </div>
                  )}

                  <div className="p-5">
                    <h3 className="my-3 text-center font-display text-3xl font-bold">
                      {plan}
                    </h3>
                    <p className="text-gray-500">{tagline}</p>
                    <p className="my-5 font-display text-6xl font-semibold">
                      ${plan === "Pro" ? 10 : 0} {/* Change the price here */}
                    </p>
                    <p className="text-gray-500">per month</p>
                  </div>

                  <div className="flex h-20 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-1">
                      <p>{quota.toLocaleString()} Lorem ipsum </p>

                      <Tooltip delayDuration={300}>
                        <TooltipTrigger className="cursor-default ml-1.5">
                          <HelpCircle className="h-4 w-4 text-zinc-500" />
                        </TooltipTrigger>
                        <TooltipContent className="w-80 p-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  <ul className="my-10 space-y-5 px-8">
                    {features.map(({ text, footnote, negative }) => (
                      <li key={text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {negative ? (
                            <Minus className="h-6 w-6 text-gray-300" />
                          ) : (
                            <Check className="h-6 w-6 text-blue-500" />
                          )}
                        </div>
                        {footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={`text-gray-600 ${
                                negative ? "text-gray-400" : ""
                              }`}
                            >
                              {text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="cursor-default ml-1.5">
                                <HelpCircle className="h-4 w-4 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2">
                                {footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={`text-gray-600 ${
                              negative ? "text-gray-400" : ""
                            }`}
                          >
                            {text}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-200" />
                  <div className="p-5">
                    {plan === "Free" ? (
                      <Link
                        href="/dashboard" // Replace "/dashboard" with the desired URL
                        className={buttonVariants({
                          className: "w-full",
                          variant: "secondary",
                        })}
                      >
                        {"Go to Dashboard"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    ) : (
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          className: "w-full",
                        })}
                      >
                        {"Sign up"}
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </TooltipProvider>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
