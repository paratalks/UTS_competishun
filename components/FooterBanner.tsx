import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { blurs, icons, images } from "@/constants";

const FooterBanner = () => {
  return (
    <section
      className={
        "w-full h-full flex flex-col items-center mt-12 md:mt-96 relative"
      }
    >
      <div className={"absolute w-full h-full"}>
        <motion.img
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          src={icons.smile}
          className={"absolute -top-20 -z-10 "}
          alt={"bg-blur"}
          width={150}
          height={100}
        />
      </div>
      <div
        className={
          "section-content w-full h-full pt-40 z-40 flex flex-col items-center"
        }
      >
        <div
          className={
            " w-screen h-fit bg-primary/[0.7] relative p-20 flex lg:flex-row flex-col gap-2"
          }
        >
          <div
            className={
              "flex lg:w-1/3 w-full items-center justify-center flex-col lg:ml-10 gap-10"
            }
          >
            <h2 className={"text-5xl font-bold leading-[1.3]"}>
              Prepare for your dream with best institute.
            </h2>
            <div className={"w-full gradientBorder rounded-2xl"}>
              <a href="/enrollment" className={"w-full h-full"}>
                <motion.button
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "anticipate",
                  }}
                  className={
                    "bg-blue-700 secondary-button-animation  font-bold text-2xl border p-5 w-full rounded-2xl"
                  }
                >
                  Join Now <span className={"ml-2"}>🏆</span>
                </motion.button>
              </a>
            </div>
          </div>
          <div
            className={
              " w-1/2 lg:flex hidden flex-1 h-full items-center justify-center flex-col ml-10 gap-10"
            }
          >
            <motion.img
              src={images.halfCirclePrimary}
              alt={"bg"}
              className={"absolute bottom-0"}
            />
            <motion.img
              src={images.halfCircleNonPrimary}
              alt={"bg"}
              className={"absolute bottom-0 -z-[2]"}
            />
            <motion.img
              src={images.guyWithTshirt}
              alt={"bg"}
              width={600}
              height={600}
              className={"absolute bottom-0 sm:w-96 xl:w-5/12"}
            />
            <motion.img
              src={images.guyWithTshirt}
              alt={"bg"}
              width={600}
              height={600}
              className={"absolute bottom-0 blur-md -z-[1] sm:w-96 xl:w-5/12"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default FooterBanner;
