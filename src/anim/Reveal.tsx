import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Reveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: "100%",
      },
      {
        y: 0,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 2,
        },
      }
    );
  }, [{ scope: ref.current }]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="" ref={textRef}>{children}</div>
    </div>
  );
};

export default Reveal;
