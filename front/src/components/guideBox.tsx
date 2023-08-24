import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Character_head from "@public/character_head.svg";
import { useEffect, useState, ReactNode } from "react";
import useOrder from "@/hooks/useOrder";

interface GuideBoxProps {
  text?: string;
  children?: ReactNode;
  isLoading: boolean;
}

const loadingRingVariants = {
  rotate: {
    rotate: [0, 360],
  },
  stopped: {
    rotate: 240,
  },
};

export const LoadingRing = ({ isLoading = true }: { isLoading: boolean }) => {
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
      className=" z-10"
      initial={{ rotate: 150 }}
      animate={controls}
      variants={loadingRingVariants}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        border: "8px solid white",
        borderTop: "8px solid #FEBB15",
        borderRadius: "50%",
        width: "140px",
        height: "140px",
        position: "absolute",
      }}
    />
  );
};

// const LoadingImage = () => (

// );

export default function GuideBox({
  text,
  children,
  isLoading = true,
}: GuideBoxProps) {
  const [displayText, setDisplayText] = useState(children || text);
  const [showText, setShowText] = useState(false);

  const {
    handleAddProduct,
    order,
    handleUpdateProduct,
    handleResetOrder,
    handleSetOrderStage,
    handleSetPayStage,
  } = useOrder();

  useEffect(() => {
    // Update the display text when either text or children prop changes
    setDisplayText(children || text);
  }, [children, text]);

  return (
    <>
      <div className=" flex px-10">
        <div className=" relative w-[140px] h-[140px] flex justify-center items-center pl-2">
          <LoadingRing isLoading={true} />
          <div className=" flex justify-center items-center relative left-[6px] bottom-[2px] z-0">
            <Character_head width={100} height={100} />
          </div>
        </div>
        {/* <div className=" text-guide pl-14">{children || text}</div> */}
        <motion.div
          key={`${order.orderStage}-${order.payStage}`} // This forces a remount when either value changes
          className=" text-guide pl-14 z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 1 }}
        >
          {displayText}
        </motion.div>
      </div>
    </>
  );
}
