import Reveal from "@/anim/Reveal";
import Container from "@/components/Container";
import { ScanBarcode, ScanLine, Boxes, GlobeLock } from "lucide-react";

const Features = () => {
  const featureList = [
    {
      title: "5%",
      desc: "Total Buy Tax",
      icon: ScanBarcode,
    },
    {
      title: "5%",
      desc: "Total Sell Tax",
      icon: ScanLine,
    },
    {
      title: "100M",
      desc: "Total Supply",
      icon: Boxes,
    },
    {
      title: "100%",
      desc: "Locked Liquidity",
      icon: GlobeLock,
    },
  ];

  return (
    <Container>
      <>
        <div className="max-w-2xl font-bold mx-auto text-center w-full font-primary text-4xl md:text-5xl lg:text-7xl">
          <Reveal>
            <h1 className="">OMEGA</h1>
          </Reveal>

          <Reveal>
            <h1 className="">TOKENOMICS</h1>
          </Reveal>
        </div>

        <ul className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-24 lg:grid-cols-4 items-center justify-center gap-16 font-primary">
          {featureList.map((item) => (
            <li
              className="flex flex-col justify-center items-center text-center gap-3"
              key={item.title}
            >
              <div className="p-10 bg-white/10 rounded-xl">
                <item.icon stroke="#A855F7" size={49} />
              </div>
              <h1 className="font-primary text-4xl md:text-5xl lg:text-7xl mt-5">{item.title}</h1>
              <p className="max-w-prose mx-auto">{item.desc}</p>
            </li>
          ))}
        </ul>
      </>
    </Container>
  );
};

export default Features;
