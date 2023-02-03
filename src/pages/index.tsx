import { Button } from "../components/Button";
import { Slider } from "../components/Slider";
import { SliderFramerMotion } from "../components/SliderFramerMotion";
import { Square } from "../components/Square";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row justify-around items-center relative">
      <div className="flex flex-col gap-10   h-full items-center justify-center p-4 overflow-hidden">
        <h1>using react-spring</h1>
        <Slider />

        <h1>using framer-motion</h1>
        <SliderFramerMotion />
      </div>

      <div>
        <Square />
      </div>

      <div>
        <Button />
      </div>
    </div>
  );
}
