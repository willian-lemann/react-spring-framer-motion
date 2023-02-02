import { Slider } from "../components/Slider";
import { SliderFramerMotion } from "../components/SliderFramerMotion";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <div className="flex flex-col gap-10">
        <h1>using react-spring</h1>
        <Slider />

        <h1>using framer-motion</h1>
        <SliderFramerMotion />
      </div>
    </div>
  );
}
