import Image from "next/image";
import pattern from '../../../assets/images/pattern.png';

const Hero = ({data}) => {
  return (
    <section className="w-full pt-[93px] pb-[93px] md:pt-[171px] md:pb-[162px] bg-[#F2F2F2] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%]'>
        <Image src={pattern} className='' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#f2f2f2] opacity-[.99]'>
      </div>
      <div className="myContainer flex flex-col justify-center relative z-[1]">
        <h1 className="fpr text-[35px] md:text-[70px] 2xl:text-[100px] leading-[35px] md:leading-[70px] 2xl:leading-[100px] mx-auto text-[#0F2E3C] text-center max-w-[1374px] pt-[30px]">
        {data.title}
        </h1>
        <p className="text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#555555] text-center max-w-[1434px] mx-auto pt-[15px] md:pt-[55px]">
        {data.paragraph1}
        </p>
      </div>
    </section>
  );
};

export default Hero;
