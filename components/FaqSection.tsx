import React from "react";
import Image from "next/image";
import { Faqs, icons } from "@/constants";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import { motion } from "framer-motion";
import FaqAnswerContainer from "@/components/faqAnswerContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactUsButton from "@/components/ContactUsButton";

const FaqSection = () => {
  const [currentlyChoosenQuestion, setCurrentlyChoosenQuestion] =
    React.useState<number>(0);

  return (
    <section className="w-full relative mt-40">
      <div className="w-full flex flex-col items-center gap-y-16 relative">
        <div className="absolute rounded-full right-28 -top-12 -z-10 bg-secondary blur-[300px] h-[50dvh] object-cover" />
        <h1 className=" font-bold text-3xl sm:text-3xl lg:text-5xl  text-center">
          Having <ScribledHighlightedText textInput="Doubt?" /> We are here to
          help
        </h1>
        <div className="gradientBorder w-full rounded-[2rem] overflow-hidden">
          <div className="flex flex-col md:flex-row gap-5 justify-between bg-[#220D00] rounded-[2rem] text-white p-5 sm:p-6">
            {/* FAQ Questions */}
            <div className="w-full md:w-1/2 flex flex-col gap-y-2">
              <h2 className="text-3xl font-extrabold pl-2 mb-2">{`FAQ's`}</h2>
              <ul className="w-full h-full flex flex-col gap-y-2">
                {Faqs.map((faq, index) => (
                  <li key={index} className="mb-4 text-2xl font-extrabold">
                    <Accordion
                      type="single"
                      collapsible
                      className={"no-underline"}
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger
                          aria-expanded={index === currentlyChoosenQuestion}
                          className={`${
                            index === currentlyChoosenQuestion
                              ? "bg-primary text-white"
                              : "bg-white text-black"
                          } rounded-xl w-full py-3 px-4 mb-5 text-left flex justify-between items-center transition-all text-lg duration-300`}
                          onClick={() => setCurrentlyChoosenQuestion(index)}
                        >
                          {faq.question}
                          <motion.span
                            className="font-normal "
                            animate={
                              index === currentlyChoosenQuestion
                                ? { rotate: "-90deg" }
                                : { rotate: "0deg" }
                            }
                            transition={{ duration: 0.4 }}
                          >
                            👇
                          </motion.span>
                        </AccordionTrigger>
                        <AccordionContent className={"md:hidden"}>
                          <FaqAnswerContainer
                            answer={Faqs[currentlyChoosenQuestion].answer}
                          />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                ))}
              </ul>
            </div>

            {/* Answers Section */}
            <div className="w-full md:w-1/2 flex-col gap-y-2 hidden md:flex">
              <FaqAnswerContainer
                answer={Faqs[currentlyChoosenQuestion].answer}
              />
            </div>
            <div
              className={
                "w-full bg-primary rounded-xl flex flex-col md:hidden items-center p-4 gap-5"
              }
            >
              <div className={"flex flex-col items-center gap-1"}>
                <h3
                  className={"text-center text-3xl font-bold"}
                >{`Still Having Doubt?`}</h3>
                <p
                  className={"font-light text-sm"}
                >{`Let's Resolve it together! fill the form`}</p>
              </div>

              <ContactUsButton variant={"secondary"} />
            </div>
          </div>
        </div>
        <div
          className={
            "w-full bg-primary rounded-xl md:rounded-3xl  hidden md:flex flex-row items-center justify-between px-10 py-5 gap-5"
          }
        >
          <div className={"flex flex-col gap-1 "}>
            <h3 className={" text-3xl font-bold"}>{`Still Having Doubt?`}</h3>
            <p
              className={"font-light text-sm"}
            >{`Let's Resolve it together! fill the form`}</p>
          </div>

          <ContactUsButton variant={"secondary"} />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
