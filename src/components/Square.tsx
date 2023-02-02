import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export function Square() {
  const [{ x, y }, animate] = useSpring(() => ({
    x: 0,
    y: 0,
  }));

  const bind = useDrag(({ active, down, movement: [mx, my], offset }) => {
    return animate.start({ x: offset[0], y: offset[1] });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        translateX: x,
        translateY: y,
      }}
      className="bg-zinc-900 cursor-pointer text-white w-[100px] h-[100px] rounded-md  text-center relative flex items-center justify-center"
    >
      using react-spring
    </animated.div>
  );
}
