import React, { ReactNode, useEffect, useRef, useState } from "react";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import { ArrowRight, Check, MoveRight, NotebookPen } from "lucide-react";
import Image from "next/image";
import { icons, illustrations, images, prospectusCategory } from "@/constants";
import { motion } from "framer-motion";
import PricingSection from "@/components/PricingSection";
import { getRelatedCourseData } from "@/lib/fetchData";
import { Models } from "appwrite";

const ProspectusSection = () => {
  const [selectedCourse, setSelectedCourse] = useState(-1);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [relatedCourse, setRelatedCourses] =
    useState<Models.DocumentList<Models.Document>>();
  const fetchData = async () => {
    await getRelatedCourseData().then((res) => setRelatedCourses(res));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section
      id={"prospectusSection"}
      className={"w-full h-full flex flex-col items-center relative"}
    >
      <div
        className={
          "section-content w-9/12 h-full  md:pt-40 z-40 flex flex-col items-center gap-y-16"
        }
      >
        <motion.img
          src={icons.flower}
          className={"absolute hidden sm:flex top-48 right-40 opacity-50 "}
          alt={"bg-blur"}
          width={70}
          height={70}
        />
        <motion.img
          src={icons.flower}
          className={"absolute hidden sm:flex -bottom-40 left-0 opacity-50 "}
          alt={"bg-blur"}
          width={70}
          height={70}
        />
        <div className={"w-full flex flex-col items-center justify-center"}>
          <h1
            className={
              "section-title text-3xl sm:text-3xl lg:text-5xl font-bold text-center"
            }
          >
            Course{" "}
            <ScribledHighlightedText
              textInput={"Prospectus"}
              path={
                "M234.304 11.0649C186.115 -4.21814 93.454 -1.63255 45.8907 11.7409C24.2292 17.8316 -15.714 35.4796 8.59158 52.1415C12.8785 55.0804 18.0894 57.468 23.4807 59.5339C82.8146 82.2695 165.57 79.9541 229.248 66.3502C238.745 64.3213 248.091 61.9127 256.688 58.6392C263.119 56.1909 269.336 53.1563 274.343 49.6149C289.002 39.2476 285.173 28.8142 269.401 20.025C251.115 9.8345 226.11 6.67652 202.515 4.94703C181.883 3.43475 161.277 3.14436 140.548 3.76156C101.671 4.91893 56.8684 6.76051 24.2624 20.6927C10.021 26.7781 -5.27958 39.7816 6.92788 50.3061C20.1563 61.7105 51.3472 65.4033 72.3265 67.8098C128.922 74.3022 218.472 71.0829 270.024 54.046C275.583 52.2087 281.215 50.4966 286.188 48.0806C290.117 46.1716 293.879 43.9949 297.143 41.6392C320.273 24.9445 268.661 14.4476 250.459 12.645C193.198 6.97415 108.448 -1.20946 55.7131 13.876"
              }
            />
          </h1>
          <p
            className={
              "mt-2 text-xs sm:text-sm lg:text-lg  text-gray-400 text-center"
            }
          >
            Choose the Course That Matches Your Learning Style and Pace,
            Designed to Maximize Your scores.
          </p>
        </div>
        <div className={"gradientBorder rounded-full max-sm:scale-75"}>
          <div className={"w-full bg-[#1D131E] p-3 rounded-full"}>
            <div
              className={
                "flex flex-row justify-between items-center h-full w-full gap-x-5"
              }
            >
              {prospectusCategory.map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setSelectedCategory(index);
                  }}
                  className={`${selectedCategory == index ? "bg-primary" : "bg-transparent"} text-nowrap w-full h-fit flex flex-col md:flex-row gap-2 px-5 sm:px-8 py-3 bg-primary rounded-full items-center lg:flex-nowrap transition-all duration-500`}
                >
                  <NotebookPen className={"hidden sm:inline"} />
                  <p className={"text-xs sm:text-sm md:text-lg lg:text-xl"}>
                    {item.title}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        <div className={"flex flex-row justify-between"}>
          <div
            className={
              "flex flex-col sm:flex-row justify-center  gap-y-10  gap-x-14 w-full flex-wrap "
            }
          >
            {(relatedCourse && relatedCourse.documents.length > 0
              ? relatedCourse.documents
              : []
            ).map((_: any, i: any) => (
              <div
                key={i}
                onMouseEnter={() => {
                  setSelectedCourse(i);
                }}
                onMouseLeave={() => {
                  setSelectedCourse(-1);
                }}
                className={`${selectedCourse != -1 && selectedCourse != i ? "blur-md" : "blur-none"} hover:bg-primary coursesItem bg-primary/[0.8] w-full sm:w-1/3 md:w-1/4 group hover:scale-125 transition-all duration-300 flex flex-row gap-x-8 rounded-3xl p-2 border border-white items-start justify-start`}
              >
                <div className={"flex flex-col h-full p-2 w-full gap-2"}>
                  <div className={"p-1 bg-foreground rounded-full w-fit"}>
                    <Check color={"#F15E04"} />
                  </div>
                  <h3 className={"text-2xl font-extrabold h-1/2"}>
                    {relatedCourse && relatedCourse.documents[i].title}
                  </h3>
                  <p className={"text-sm text-gray-300"}>
                    {relatedCourse && relatedCourse.documents[i].desc}
                  </p>
                  <a href={relatedCourse && relatedCourse.documents[i].link}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className={
                        "bg-foreground text-background group-hover:bg-foreground secondary-button-animation rounded-xl w-fit px-4 py-2 flex flex-row font-bold gap-x-2"
                      }
                    >
                      {relatedCourse &&
                      relatedCourse.documents[i].link != null &&
                      relatedCourse.documents[i].link != "/"
                        ? "Join Now"
                        : "Coming Soon"}
                      <ArrowRight />
                    </motion.button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProspectusSection;
