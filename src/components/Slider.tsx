import { animated, useSpring, useInView } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

import { TrashIcon } from "@heroicons/react/24/outline";

export function Slider() {
  const [{ scale, x }, animate] = useSpring(() => ({
    x: 0,
    scale: 1,
  }));

  const bind = useDrag(({ active, movement: [x] }) => {
    return animate.start({
      x: active ? Math.round(x) : 0,
      scale: active ? 1.1 : 1,
    });
  });

  const scaleAnimation = x.to({
    map: () => 100,
    range: [50, 100],
    output: [0.5, 1],
    extrapolate: "clamp",
  });

  return (
    <animated.div
      {...bind()}
      className="bg-zinc-900 text-white w-[300px] h-[65px] rounded-md  text-center "
    >
      <animated.div
        className="absolute right-4 top-3"
        style={{ scale: scaleAnimation }}
      >
        <TrashIcon className="h-10 w-10" />
      </animated.div>
      <animated.div
        style={{ x, scale }}
        className={`absolute cursor-pointer w-[300px] h-[65px]  bg-purple-700 flex items-center justify-center rounded-md`}
      >
        Slide
      </animated.div>
    </animated.div>
  );
}
