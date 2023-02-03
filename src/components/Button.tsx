import { useSpring, animated, useSpringValue } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export function Button() {
  const scaleAnimated = useSpringValue(1, {
    config: { mass: 1.5, tension: 1000, friction: 30 },
  });

  return (
    <animated.button
      style={{ scale: scaleAnimated }}
      onMouseDown={() => scaleAnimated.start(1.1)}
      onMouseUp={() => scaleAnimated.start(1)}
      className="p-4 px-10 border-none bg-black text-white rounded-md"
    >
      Click
    </animated.button>
  );
}
