import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import cloudbg from "../../videos/cloud_bg.mp4";
import NormalReveal from "@/anim/NormalReveal";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          src={cloudbg}
        />
      </div>
      <Container className="flex items-center md:pt-44 pt-32 font-secondary text-white z-20">
        <div className="max-w-screen-2xl mx-auto">
          <div className="lg:text-7xl md:text-5xl sm:text-4xl text-2xl font-primary text-center space-y-3 font-bold">
            <NormalReveal>
              <h1 className="">POWERHOUSE FOR WEB3 </h1>
            </NormalReveal>
            <NormalReveal>
              <h1 className="text-purple-500 bg-purple-500/20 w-fit mx-auto px-3 pb-2 rounded-lg">
                INFRASTRUCTURES!
              </h1>
            </NormalReveal>
          </div>
          <div className="mt-8 text-center space-y-5">
            <p className="text-center max-w-prose mx-auto sm:Ltext-lg">
              Omega Cloud is your gateway to the vast world of the DePIN
              network. We are an aggregator for DePIN projects, providing
              accessibility to varieties of products by a diverse DePIN focused
              ecosystem.!
            </p>
            <Button className="rounded-full md:py-7 md:px-10 font-semibold uppercase group">
              <Play className="rotate-180" fill="black" size={12} />
              <div className="w-2 group-hover:w-3 transition-all ease-in-out duration-300"></div>
              <h4 className="">Trade $OMEGA</h4>
              <div className="w-2 group-hover:w-3 transition-all ease-in-out duration-300"></div>

              <Play fill="black" size={12} />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
