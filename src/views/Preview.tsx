import Container from "@/components/Container";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Preview = () => {

  useGSAP(() => {
    gsap.to(".circle1", {
      trigger: ".hero-preview-wrapper",
      x: -40,
      y: -100,
      duration: 2,
      scrollTrigger: {
        start: "top 0%",
        end: "bottom 50%",
        scrub: 2,
      },
    });

    gsap.to(".circle2", {
      trigger: ".hero-preview-wrapper",
      x: 30,
      y: -100,
      duration: 2,
      scrollTrigger: {
        start: "top 0%",
        end: "bottom 50%",
        scrub: 2,
      },
    });

    gsap.to(".circle3", {
      trigger: ".hero-preview-wrapper",
      x: 30,
      y: -80,
      duration: 2,
      scrollTrigger: {
        start: "top 0%",
        end: "bottom 50%",
        scrub: 2,
      },
    });
  });

  return (
    <Container className="md:min-h-screen min-h-[70vh] pt-32 container overflow-x-hidden relative z-20">
      <div className="max-w-screen-lg mx-auto relative childcontainer">
        {/* Left */}
        <img
          src="/red_circle.png"
          alt="red circle"
          className="w-[13%] absolute circle1 top-[33%] left-[5%]"
        />
        <img
          src="/red_circle.png"
          alt="red circle"
          className="w-[7%] absolute circle2 top-[17%] left-0"
        />
        <img
          src="/white_circle.png"
          alt="red circle"
          className="w-[6%] absolute circle1 top-0 left-[13%]"
        />
        {/* Image */}
        <img
          src="/cat_image.png"
          alt="cat_image"
          className="w-[75%] mx-auto pt-14 relative z-10"
        />
        {/* Right */}
        <img
          src="/red_circle.png"
          alt="red circle"
          className="w-[20%] absolute circle1 top-[7%] right-[5%]"
        />
        <img
          src="/white_circle.png"
          alt="red circle"
          className="w-[10%] absolute circle2 top-0 right-[4%]"
        />
        <img
          src="/white_circle.png"
          alt="red circle"
          className="w-[5%] absolute circle3 -top-[6%] right-[17%]"
        />
        {/* Bottom */}
        <img
          src="/red_circle.png"
          alt="red circle"
          className="w-[13%] absolute circle2 -bottom-[23%] right-[24%] z-10"
        />
        <img
          src="/white_circle.png"
          alt="red circle"
          className="w-[5%] absolute circle3  -bottom-[8%] right-[35%] z-10"
        />
              <img
          src="/white_circle.png"
          alt="red circle"
          className="w-[5%] absolute circle1  -bottom-[25%] right-[15%] z-10"
        />
      </div>
    </Container>
  );
};

export default Preview;
