import Image from "next/image";
import { motion } from "framer-motion";
import { icons } from "@/constants";
import { useEffect, useState } from "react";

const YoutubeRecom = ({
  youtubeLink = "https://www.youtube.com/embed/QpeWhM0q0jw",
}) => {
  const [smallScreen, setSmallScreen] = useState(false);
  useEffect(() => {
    setSmallScreen(window.innerWidth < 640);
  }, []);
  return (
    <div
      className={
        "stackedView-container  w-full relative flex flex-col items-center justify-center"
      }
    >
      <div
        className={"h-fit rounded-3xl w-screen sm:w-10/12 gradientBorder z-10"}
      >
        <motion.img
          animate={{
            rotateX: [0, 20],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          src={icons.handOnVideo}
          alt={"hand svg"}
          className={
            "absolute sm:-bottom-20 -bottom-10 right-10 sm:w-auto w-16"
          } // Adjusted for mobile
        />
        <iframe
          src={"https://www.youtube.com/embed/8RbjLS4xyXI"}
          frameBorder="0"
          width={"100%"}
          className={"rounded-3xl aspect-[16/9]"}
          allowFullScreen
        />
      </div>
    </div>
  );
};
export default YoutubeRecom;
