import React from "react";
import Image from "next/image";
import { images } from "@/constants";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";

const ResultShowcase = () => {
  return (
    <section
      className={
        "w-full h-full items-center flex flex-col my-32 px-2 sm:px-10 "
      }
    >
      <div className={"flex flex-col items-center gap-2 mb-5 sm:mb-10"}>
        <h1 className={"text-center text-5xl font-bold"}>
          {`Our `} <ScribledHighlightedText textInput={"Results"} />
        </h1>
        <p className={"text-center"}>{`The topper's ultimate choice!`}</p>
      </div>
      <div className={"w-full flex flex-col gap-4 items-center"}>
        <div className={"w-full gap-4 flex flex-col m-5"}>
          <div className={"flex flex-col w-fit"}>
            <h1
              className={"text-4xl text-start w-full font-bold"}
            >{`JEE Main Results`}</h1>
            <p>{`All Ranks under 25k AIR only`}</p>
          </div>
          <Image
            width={2000}
            height={2000}
            src={images.jeeMainResults}
            alt={"JEE Main Results"}
            className={" w-full"}
            unselectable={"on"}
            draggable={false}
          />
        </div>
        <div className={"w-full gap-4 flex flex-col m-5"}>
          <div className={"flex flex-col w-fit"}>
            <h1
              className={"text-4xl text-start w-full font-bold"}
            >{`JEE Advanced Results`}</h1>
            <p>{`All Ranks under 10k AIR only`}</p>
          </div>
          <Image
            width={2000}
            height={2000}
            src={images.jeeAdvanceResults}
            alt={"JEE Main Results"}
            className={" w-full"}
            unselectable={"on"}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};
export default ResultShowcase;
