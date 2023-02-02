import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

import { TrashIcon } from "@heroicons/react/24/outline";

export const SliderFramerMotion = () => {
  const motionX = useMotionValue(0);
  const x = useSpring(motionX, { stiffness: 400, damping: 20 });

  x.on("change", () => {
    if (x.get() <= -100) {
      x.jump(-100);
    }
  });

  const scale = useTransform(x, [-50, -100], [0.5, 1]);

  return (
    <motion.div className="text-white w-[300px] h-[65px] rounded-md  text-center relative">
      <motion.div className="absolute rounded-md flex items-center justify-end  bg-purple-700 w-full h-full">
        <motion.div className="absolute" style={{ scale }}>
          <TrashIcon className="h-10 w-10 mr-4" />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center h-full w-full cursor-pointer bg-zinc-900 rounded-md"
        drag="x"
        onTap={() => x.set(0)}
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x, scale: 1.1 }}
      >
        Slider
      </motion.div>
    </motion.div>
  );
};
