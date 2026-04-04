import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About Description',
}

const AboutPage = () => {
  return (
    <div className="flex flex-col md:flex-row gap-25 pb-7.5 md:text-left text-center">
      <div className="flex-1 flex flex-col gap-7.5">
        <h2 className="text-(--btn) mt-3.75 font-bold">About Agency</h2>
        <h1 className="text-[60px] leading-[130%] font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-[20px] font-light text-justify my-3">
          We create digital ideas that are bigger, bolder, braver, and better. We believe in the flexibility and precision of great ideas. We are a world-class consulting and finance solutions provider, backed by a specialized team delivering a wide range of web and software development services.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12.5 md:gap-0">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-(--btn) text-2xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-(--btn) text-2xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2.5">
            <h1 className="text-(--btn) text-2xl font-bold">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      <div className="flex-1 relative min-h-75">
        <Image
          src="/about.png"
          alt="About Img"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AboutPage;