import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import { useEffect, useState } from "react";

interface TimerBoxProps {
  time: number;
  isLoading: boolean;
}

const loadingRingVariants = {
  rotate: {
    rotate: [0, 360],
  },
  stopped: {
    rotate: 0,
  },
};

export const LoadingRing = ({ isLoading }: { isLoading: boolean }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isLoading) {
      controls.start("rotate");
    } else {
      controls.stop();
    }
  }, [isLoading, controls]);

  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={controls}
      variants={loadingRingVariants}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        border: "4px solid white",
        borderTop: "4px solid #FEBB15",
        borderRadius: "50%",
        width: "180px",
        height: "180px",
        position: "absolute",
      }}
    />
  );
};

// const LoadingImage = () => (

// );

export default function TimerBox({ time, isLoading = true }: TimerBoxProps) {
  return (
    <>
      <div className=" w-[180px] h-[135px] flex justify-center items-center">
        <LoadingRing isLoading={isLoading} />
        <div className=" ">
          <div>{time}</div>
        </div>
      </div>
    </>
  );
}
