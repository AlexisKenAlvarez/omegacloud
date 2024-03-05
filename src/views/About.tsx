import Reveal from "@/anim/Reveal";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 15%",
          end: "+=500",
          pin: ".about-images",
          // anticipatePin: 1,
        },
      });
    });

    gsap.fromTo(
      ".about-images",
      {
        scale: 0.8,
        skewX: "-10deg",
      },
      {
        scale: 1,
        skewX: "0deg",
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 20%",
          end: "+=500",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".ab-img2",
      {
        x: -100,
        y: -100,
      },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 20%",
          end: "+=500",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      ".ab-img3",
      {
        x: 100,
        y: 100,
      },
      {
        x: 0,
        y: 0,
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 20%",
          end: "+=500",
          scrub: 2,
        },
      }
    );
  });

  return (
    <Container className="min-h-screen md:mt-44 mt-24 font-secondary flex about-container">
      <div className="max-w-screen-xl mx-auto flex lg:flex-row flex-col items-center lg:items-start text-center lg:text-start gap-x-14 gap-y-20">
        <div className="lg:w-1/2 w-full space-y-64 ">
          <div className="space-y-6">
            <Reveal>
              <h1 className="font-primary text-3xl md:text-5xl font-bold">
                OMEGA ECOSYSTEm
              </h1>
            </Reveal>

            <p className="max-w-md mx-auto lg:mx-0  ">
              Ut commodo tempor qui ex anim nostrud laboris ullamco nisi
              excepteur anim consequat tempor.
            </p>
            <Button className="rounded-full text-lg px-6 py-6">
              Visit Telegram
            </Button>
          </div>

          <div className="space-y-6">
            <Reveal>
              <h1 className="font-primary text-3xl md:text-5xl font-bold">
                ABOUT OMEGA CLOUD
              </h1>
            </Reveal>
            <p className="max-w-md mx-auto lg:mx-0  ">
              Ut commodo tempor qui ex anim nostrud laboris ullamco nisi
              excepteur anim consequat tempor.
            </p>
          </div>

          <div className="space-y-6">
            <Reveal>
              <h1 className="font-primary text-3xl md:text-5xl font-bold">
                WHY OMEGA CLOUD
              </h1>
            </Reveal>
            <p className="max-w-md mx-auto lg:mx-0  ">
              Ut commodo tempor qui ex anim nostrud laboris ullamco nisi
              excepteur anim consequat tempor.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex gap-5 about-images  lg:mt-0 px-5 md:px-0 scale-[0.8] -skew-x-[10deg]">
          <div className="flex items-center">
            <img
              src="/newabout/about1.png"
              alt="Tiger1"
              className="rounded-2xl ab-img2"
            />
          </div>
          <div className="space-y-5">
            <img
              src="/newabout/about2.png"
              alt="Tiger3"
              className="rounded-2xl"
            />
            <img
              src="/newabout/about3.png"
              className="bg-whiterounded-2xl ab-img3"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
