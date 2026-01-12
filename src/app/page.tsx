import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-25 pb-7.5 lg:text-left text-center">
    
      <div className="flex-1 flex flex-col gap-12.5">
        <h1 className="text-[64px] lg:text-[80px] leading-[120%] font-bold">
          Empowering Creativity with Thoughtful Solutions
        </h1>
        <p className="text-[20px] text-justify -my-3.75">
          Unleash your creativity with Nimble Concepts, where fresh ideas spark transformation. 
          Experience the power of innovation and watch your vision come to life.
        </p>
        <div className="flex gap-12.5 lg:justify-start justify-center">
          <Link href="/about">
            <button className="p-5 min-w-30 cursor-pointer border-none rounded-[20px] text-base font-semibold bg-(--btn) text-(--text)">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className="p-5 min-w-30 cursor-pointer border-none rounded-[20px] text-base font-semibold bg-(--text) text-(--bg)">
              Contact
            </button>
          </Link>
        </div>
        <div className="relative w-full md:w-175 h-17.5 -mt-12.5 cursor-pointer">
          <Image src="/brands.png" alt="brands" fill className="object-contain" />
        </div>
      </div>
      
      <div className="flex-1 relative lg:bottom-7 min-h-75 md:min-h-125">
        <Image 
          src="/hero.gif" 
          alt="hero" 
          fill 
          className="object-contain" 
          unoptimized 
        />
      </div>
    </div>
  );
};

export default Home;