import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  
  useGSAP(() => {
    gsap.to(".footer-right", {
      x: 20,
      y: -40,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 2,

      }
    })

    gsap.to(".footer-right-2", {
      x: 15,
      y: -50,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 2,
      }
    })

    gsap.to(".footer-left", {
      x: -15,
      y: -50,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 2,
      }
    })

    gsap.to(".footer-left-2", {
      x: -10,
      y: -50,
      scrollTrigger: {
        trigger: ".footer-container",
        start: "top 70%",
        end: "bottom bottom",
        scrub: 2,
      }
    })
  })

  
  return (
    <footer className="w-full  py-20 mt-20 overflow-hidden flex footer-container">
      <div className="max-w-screen-xl mx-auto relative w-full h-72">
        <img
          src="/red_circle.png"
          alt="red circle"
          className="w-[13%] absolute right-[40%] -bottom-[30%] footer-right"
        />
        <img
          src="/red_circle.png"
          alt="red circle"
          className="w-[6%] absolute right-[35%] bottom-[10%] footer-right-2"
        />
        <img
          src="/red_circle.png"
          alt="red circle"
          className="w-[3%] absolute right-[25%] bottom-[17%] footer-left"
        />
        <img
          src="/red_circle.png"
          alt="red circle"
          className="w-[4%] absolute right-[20%] bottom-[10%] footer-left-2"
        />
        <img
          src="/footer.webp"
          alt="footer"
          className="w-full h-full  rounded-2xl sm:object-cover object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
