import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NormalReveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: "100%",
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1
      }
    );
  }, [{ scope: ref.current }]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="" ref={textRef}>{children}</div>
    </div>
  );
};

export default NormalReveal;
