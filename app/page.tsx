"use client";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import { blurs, constData, icons, images, scribles, sounds } from "@/constants";
import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import { motion, useAnimate } from "framer-motion";
import { Book, HeadphonesIcon } from "lucide-react";
import { primary } from "@/constants/colors";
import HeroSectionSlider from "@/components/HeroSectionSlider";
import YoutubeRecom from "@/components/YoutubeRecom";
import FeaturesSections from "@/components/FeaturesSections";
import ScribledHighlightedText from "@/components/ScribledHighlightedText";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import StatisticSection from "@/components/StatisticSection";
import MentorSection from "@/components/MentorSection";
import ProspectusSection from "@/components/ProspectusSection";
import PricingSection from "@/components/PricingSection";
import FooterBanner from "@/components/FooterBanner";
import {
  getData,
  getFeaturesData,
  getRelatedCourseData,
  getStatsData,
  getTestimonialData,
} from "@/lib/fetchData";
import { Models } from "appwrite";
import LeadFormWidget from "@/components/LeadFormWidget";
import ResultShowcase from "@/components/ResultShowcase";
export default function Home() {
  const [clipPath, setClipPath] = useState("circle(0%)");
  const imageContainerRef = useRef(null);
  const [activateTransition, setActivateTransition] = useState(false);
  const [lastPosition, setLastPosition] = useState({
    xPercent: 0,
    yPercent: 0,
  });
  const [data, setData] = useState<Models.DocumentList<Models.Document>>();
  const [scope, popAnimate] = useAnimate();
  const [starsScope, twinkleAnimation] = useAnimate();
  const [playMagicSound] = useSound(sounds.magicSound, { volume: 0.5 });
  const [screen, setScreen] = useState({ width: 0, height: 0 });
  const heroSectionModelDimension = 320;
  // variable and state declaration ends here
  const popFeatureModalAnimation = async () => {
    await popAnimate(scope.current, {
      scale: [0, 1],
      transitionDuration: 1,
    });
  };
  const twinkleAnimationHandler = async () => {
    await twinkleAnimation(
      ".sparkleStar",
      {
        scale: [1, 1.1, 1],
        opacity: [1, 0.5, 1],
      },
      {
        duration: 0.7,
        autoplay: true,
        repeatType: "reverse",
        repeat: Infinity,
      },
    );
  };
  // use effect for animations
  useEffect(() => {
    popFeatureModalAnimation();
    twinkleAnimationHandler();
  }, []);
  // use effect to fetch data
  const fetchData = async () => {
    await getData().then((res) => setData(res));
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setScreen({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []);

  // handling mouse move on model on hero section
  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (!imageContainerRef.current) return;
    setActivateTransition(false);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setClipPath(`circle(0% at ${xPercent}% ${yPercent}%)`);
    setLastPosition({ xPercent, yPercent });
    setTimeout(() => {
      setActivateTransition(true);
      setClipPath(`circle(150% at ${xPercent}% ${yPercent}%)`);
    }, 10);
  };
  // handling mouse leave from model on hero section
  const handleMouseLeave = () => {
    setClipPath(
      `circle(0% at ${lastPosition.xPercent}% ${lastPosition.yPercent}%)`,
    );
  };
  return (
    <div className="w-full max-w-screen flex relative flex-col items-center">
      <div
        className={"z-40 w-screen overflow-hidden "}
        id="chat-widget"
        data-key="670f87c42f6b943716677af3"
      ></div>
      <LeadFormWidget />
      <div className={"w-11/12 flex flex-col"}>
        <section
          className={"hero-section flex flex-col w-full h-[120vh]  relative"}
        >
          <div
            className={
              "background-gradients w-full h-full -z-10 flex items-center justify-center"
            }
          >
            <Image
              unoptimized
              src={blurs.blur1}
              alt={"blur image"}
              fill
              objectFit={"cover"}
              layout={"fill"}
              className={
                "w-full h-full blur-2xl -z-40 select-none md:scale-125"
              }
            />
            <div className={"w-screen side-icons"}>
              <motion.img
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  ease: "easeInOut",
                  duration: 2,
                  delay: 0.2,
                }}
                className={
                  "absolute hidden sm:flex select-none sm:w-14 w-10 top-1/2 left-[20%] -z-40"
                }
                src={icons.rolledDegree}
                alt={"Rolled Degree Icon"}
              />
              <motion.img
                animate={{
                  y: [0, -screen.height / 8, 100, 200],
                  x: [0, screen.width / 1.3],
                  rotateX: [0, 200],
                  rotateZ: [0, 20, -10, -20, 10],
                }}
                transition={{
                  ease: "easeInOut",
                  duration: 3.5,
                  delay: 0.3,
                }}
                className={
                  "absolute hidden select-none sm:flex w-12 sm:w-16 lg:w-24 sm:top-1/4 top-1/3 left-0 opacity-50 -z-40"
                }
                src={icons.paperPlane}
                alt={"Rolled Degree Icom"}
              />
              <motion.img
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  ease: "easeInOut",
                  duration: 2,
                }}
                width={50}
                className={
                  "absolute bottom-[10%] select-none sm:right-1/4 right-1/3 opacity-50 -z-40"
                }
                src={icons.medal}
                alt={"Rolled Degree Icom"}
              />
            </div>

            <Image
              unoptimized
              onMouseLeave={handleMouseLeave}
              src={images.modelImageHeroSec}
              className={`absolute max-h-[50%]  max-w-[80%]  bottom-0 z-10 ${activateTransition ? "transition-all duration-1000" : ""}`}
              alt={"Competishun Model"}
              width={heroSectionModelDimension}
              height={heroSectionModelDimension}
              style={{ clipPath: clipPath, transform: "translate(0, 6%)" }}
            />
            <Image
              unoptimized
              src={images.modelImageHeroSec}
              className={`absolute max-h-[50%] max-w-[80%]  bottom-0 filter brightness-[50] -z-[3] -translate-x-1 translate-y-[6%]`}
              alt={"Competishun Model"}
              width={heroSectionModelDimension}
              height={heroSectionModelDimension}
            />
            <Image
              unoptimized
              src={images.modelImageHeroSec}
              className={`absolute max-h-[50%]  max-w-[80%]  bottom-0 filter blur-xl -z-[2] -translate-x-1 translate-y-[6%]`}
              alt={"Competishun Model"}
              width={heroSectionModelDimension}
              height={heroSectionModelDimension}
            />
            <Image
              unoptimized
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              src={images.modelImageHeroSec}
              className={`absolute max-h-[50%] max-w-[80%] bottom-0 ${activateTransition ? "transition-all duration-1000" : ""}  `}
              alt={"Competishun Model"}
              width={heroSectionModelDimension}
              height={heroSectionModelDimension}
              style={{ transform: "translate(0, 6%)" }}
            />

            <div className={"w-screen features-modal"}>
              <motion.div
                ref={scope}
                initial={"hidden"}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, ease: "backOut", repeat: Infinity }}
                className={
                  "gradientBorder primary-button-animation absolute sm:bottom-[15%] bottom-[10%] md:left-[12%] left-0 rounded-2xl z-20"
                }
              >
                <div
                  className={
                    "rounded-2xl bg-foreground px-5 py-3 flex items-center justify-center lg:gap-x-5 sm:gap-x-2"
                  }
                >
                  <Book
                    color={primary}
                    className={"lg:size-8 sm:size-4 size-3"}
                  />
                  <p
                    className={
                      "text-black text-[0.5rem] sm:text-xs lg:text-xl font-extrabold flex flex-row gap-x-5"
                    }
                  >
                    {"Guided Mentoring"}
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={"hidden"}
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className={
                  "gradientBorder primary-button-animation absolute md:bottom-[30%] bottom-[20%] md:right-[10%] right-0  rounded-2xl z-20"
                }
              >
                <div
                  className={
                    "rounded-2xl bg-foreground px-5 py-3 flex items-center justify-center lg:gap-x-5 sm:gap-x-2"
                  }
                >
                  <HeadphonesIcon
                    color={primary}
                    className={"lg:size-8 sm:size-4 size-3"}
                  />
                  <p
                    className={
                      "text-black text-[0.5rem] sm:text-xs lg:text-xl font-extrabold flex flex-row gap-x-5"
                    }
                  >
                    {"Innovative Test Patterns"}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          <div className={"navbar-section mt-10"}>
            <NavBar />
          </div>
          <div
            className={
              "hero-texts origin-top flex flex-col items-center lg:gap-y-3 max-sm:gap-y-1 md:gap-y-2 mt-16 justify-center w-full "
            }
          >
            <h1
              className={
                "hero-title text-4xl sm:text-6xl lg:text-4xl xl:text-7xl text-wrap font-extrabold text-center"
              }
            >
              <span
                className={
                  "bg-gradient-to-r relative from-primary via-50% via-white to-blue-500 text-transparent bg-clip-text"
                }
              >
                <motion.img
                  className={
                    "absolute w-9 sm:w-12 lg:w-16 -top-2 -left-3 sm:-top-2 sm:-left-3 lg:-top-5 lg:-left-6"
                  }
                  src={icons.degreeHat}
                  alt={"Degree Hat"}
                />
                {` IIT `}
              </span>
              {` Success with Ultimate Test Series`}
            </h1>
            <h1
              className={
                "hero-title text-4xl sm:text-6xl mt-2 lg:text-4xl xl:text-7xl font-extrabold text-wrap text-center"
              }
            >
              <span className={"text-primary"}>99 Percentile </span> in JEE Main
            </h1>
            <p
              className={
                " text-xs sm:text-xl lg:text-lg mt-6 sm:mt-3 text-center xl:w-1/2 w-full mb-6 lg:mb-2 max-sm:text-gray-500"
              }
            >
              {`Prepare to conquer JEE 2025 with Ultimate Test Series (UTS) designed to match the latest JEE Main and Advance pattern, making sure you're fully prepared for the actual exam`}
            </p>
            <a href="#pricing-section" className={"z-20"}>
              <motion.button
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  ease: "anticipate",
                  repeatDelay: 1,
                  duration: 1,
                }}
                className={
                  "bg-primary max-sm:mt-2 max-sm:text-nowrap primary-button-animation font-bold lg:text-2xl sm:text-lg md:text-xl text-lg max- p-2 sm:p-3 px-3 sm:px-5 rounded-2xl w-fit items-center z-20"
                }
              >
                Join Now <span className={"ml-2"}>🏆</span>
              </motion.button>
            </a>
          </div>
        </section>
        <section
          className={
            "hero-section-banner-slider flex justify-center relative mt-5 z-20"
          }
        >
          <div
            className={
              "w-screen absolute bg-primary h-[10dvh] transform rotate-1 z-20"
            }
          >
            <div className={"w-full h-full flex flex-row items-center"}>
              <HeroSectionSlider className={"w-full"} />
            </div>
          </div>
          <div className={"h-[10dvh] absolute w-screen bg-white z-10"} />
        </section>
        <section className={"youtube-banner-section relative mt-12 "}>
          <div className={"w-full flex mt-56 justify-center"}>
            <Image
              unoptimized
              src={blurs.blurSection2}
              alt={"Blur"}
              className={
                "-z-40 absolute w-screen filter blur-md opacity-50 scale-150"
              }
              width={1920}
              height={1080}
              objectFit={"cover"}
            />
            <div
              ref={starsScope}
              className={
                "youtuber-banner-content z-10 relative flex flex-col gap-y-14 items-center justify-center w-full"
              }
            >
              <Image
                unoptimized
                ref={starsScope}
                src={icons.sparkleStar}
                alt={"sparkleStar"}
                width={50}
                height={50}
                className={"absolute sparkleStar right-0 top-0"}
              />
              <Image
                unoptimized
                ref={starsScope}
                src={icons.sparkleStar}
                alt={"sparkleStar"}
                width={50}
                height={50}
                className={"absolute sparkleStar left-0 bottom-0"}
              />
              <h2
                className={
                  "youtube-banner-title text-4xl sm:text-4xl lg:text-5xl  font-extrabold"
                }
              >
                {`Our Latest `}
                <ScribledHighlightedText
                  textInput={"Videos"}
                  scrible={screen.width >= 640}
                />
              </h2>
              <YoutubeRecom youtubeLink={data && data.documents[0].videoLink} />
            </div>
          </div>
        </section>

        <FeaturesSections />

        <Testimonials />

        <FaqSection />
        <div className={" flex flex-col items-center"}>
          {/*<PricingSection courseFees={data && data.documents[0].price} />*/}
          <PricingSection />
        </div>
        <StatisticSection />
        <ResultShowcase />
        <MentorSection />

        <ProspectusSection />

        <div className={"relative flex flex-col items-center "}>
          <FooterBanner />
        </div>
        <div className={"relative h-[50dvh] flex flex-col items-center"}>
          <footer className=" absolute h-full  w-screen bg-background ">
            <div className=" w-full h-full p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between p-2 sm:p-10 md:p-20">
                <div className="mb-10 md:mb-0 lg:w-5/12 ">
                  <a
                    href="/"
                    className="flex flex-row gap-x-4 w-5/12 items-center"
                  >
                    <Image
                      unoptimized
                      src={images.logo}
                      alt="competishun Logo"
                      width={100}
                      height={100}
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                      Competishun
                    </span>
                  </a>
                  <p className={"mt-5"}>
                    {`Competishun is a well-known name in the field of IIT-JEE/NEET Online & Offline Coaching providing Pre-Engineering/Pre-Medical training to aspirants intending to prepare and appear in various competitive, talent search and scholarship examinations of National and International level such as JEE,NEET,BITSAT,etc `}
                  </p>
                </div>
                <div className="grid w-full lg:w-1/2 h-full grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div className={"border-r"}>
                    <div>
                      <h2 className="mb-6 text-xs sm:text-sm lg:text-xl font-semibold uppercase text-white">
                        Support
                      </h2>
                      <ul className=" text-gray-400 font-medium">
                        <li className="mb-4">
                          <a href="/" className="hover:text-white">
                            Help
                          </a>
                        </li>
                        <li className="mb-4 hover:text-white">
                          <a
                            href="https://uts.competishun.in/"
                            className="hover:underline"
                          >
                            FAQ
                          </a>
                        </li>
                        <li className={"hover:text-white"}>
                          <a href="https://uts.competishun.in/">FAQ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={"border-r"}>
                    <div>
                      <h2 className="mb-6 text-xs sm:text-sm lg:text-xl font-semibold text-gray-900 uppercase  text-white">
                        Resources
                      </h2>
                      <ul className="text-gray-500  text-gray-400 font-medium">
                        <li className="mb-4">
                          <a href="/" className="hover:text-white">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="/" className="hover:text-white">
                            Career
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="my-6  sm:mx-auto  border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between w-full pb-6">
                <span className="text-sm  sm:text-center  text-gray-400">
                  © 2024{" "}
                  <a
                    href="https://uts.competishun.in/"
                    className="hover:underline"
                  >
                    Competishun™
                  </a>
                  . All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <a href="#" className="text-gray-500  hover:text-white">
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 8 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900  hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 21 16"
                    >
                      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                    </svg>
                    <span className="sr-only">Discord community</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900  hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 17"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900  hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      />
                    </svg>
                    <span className="sr-only">GitHub account</span>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-gray-900  hover:text-white ms-5"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                      />
                    </svg>
                    <span className="sr-only">Dribbble account</span>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
