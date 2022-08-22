import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from '../../../assets/images/services/hands.svg';

const ImgText = ({data, pb}) => {
  return (
    <section className={`w-full py-[145px] pb-[70px] bg-[#fff] relative ${pb ? "pb-[300px]":""}`}>
      <div className="myContainer flex justify-end ">
        <div className='absolute left-0'>
          <div className='max-w-[600px] 2xl:max-w-[100%] left-0 after:w-[200px] relative after:h-[200px] after:bg-[#0F2E3C] after:rounded-[100px] after:right-[-35px] after:bottom-[-40px] after:absolute after:z-[-1] z-[2]
        before:w-[337px] relative before:h-[200px] before:bg-[#0F2E3C] before:rounded-tr-[100px] before:left-[0] before:top-[-50px] before:absolute
        '><Image src={data.img} />
          </div>
        </div>
        <div className="w-[55%] ">
          <h1 className="fpr text-[60px] leading-[100px]  text-[#0F2E3C] pt-[40px]">
          {data.title}
          </h1>
          <p className="text-[24px] leading-[36px] text-[#555555] pt-[15px] pb-[40px]">
          {data.paragraph1}
           </p>
          <p className="text-[24px] leading-[36px] text-[#555555]">
          {data.paragraph2}
           </p>
          <a className="fgr w-[181px] h-[50px] bg-[#AE8B5C] text-[#fff] text-[24px] leading-[36px] rounded-[50px] px-[5px] py-[10px] hover:opacity-[.8] cursor-pointer mb-[20px] flex justify-center items-center mt-[30px]">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImgText;
