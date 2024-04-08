import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <HatModel></HatModel>
        </RenderModel>
      </div>
    </main>
  );
}
