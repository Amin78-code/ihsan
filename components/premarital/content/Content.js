import Image from "next/image";
// import heroimg from '../../assets/images/home/hero.jpg'
import pattern from '../../../assets/images/pattern.png';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import hands from '../../../assets/images/services/hands.svg';

const Content = ({ data, pb }) => {
  return (
    <section className={`w-full pt-[100px] pb-[70px] bg-[#fff] relative ${pb ? "pb-[300px]" : ""}`}>
      <div className="myContainer  ">
        <p className="text-[24px] leading-[36px] text-[#555555] pb-[40px]">
          Ihsan Coaching’s premarital coaching services are designed for individuals or couples considering or are on the path towards a Nikah.
        </p>
        <p className="text-[24px] leading-[36px] text-[#555555] pb-[40px]">
          Our premarital coaching program consists of five sessions that assess your compatibility, while we explore a wide range of topics and get a better grasp of the ideal Islamic marriage. Topics during these sessions can include discussions on marital attraction and preparation, expectations and assumptions regarding marriage, healthy communication skills, conflict resolutions, financial and paternal responsibilities, and tools to balance work and life.
        </p>

        <div className='myContainer flex flex-wrap gap-x-[4%] gap-y-[30px] pt-[4.5%] pb-[4%]'>
          {data.sessions.map((value) => {
            return (
              <div key={value.text} className="h-[431px] bg-[#0F2E3C] border-[#707070] border-[1px] rounded-[30px] w-[48%] px-[72px] py-[54px]">
                <h4 className="fpr text-[42px] text-[#fff] ">{value.title}</h4>
                <p className="fgr text-[24px] leading-[36px] text-[#fff] mt-[5%]">{value.text}</p>
              </div>
            )
          })}

        </div>
      </div>
      <div className="myContainer flex justify-end pt-[3.7%] pb-[16%]">

        <div className='absolute left-0'>
          <div className='max-w-[600px] 2xl:max-w-[100%] left-0 after:w-[337px] relative after:h-[200px] after:bg-[#0F2E3C] after:rounded-bl-[100px] after:right-[50px] after:bottom-[-25px] after:absolute after:z-[-1] z-[2]
        before:w-[337px] relative before:h-[200px] before:bg-[#0F2E3C] before:rounded-tr-[100px] before:left-[0] before:top-[-60px] before:absolute
        '><Image src={data.img} />
          </div>
        </div>
        <div className="w-[55%] pt-[5%]">
          <h6 className="fgb text-[28px] leading-[36px] text-[#555555]">
            {data.title}
          </h6>
          <p className="text-[24px] leading-[36px] text-[#555555] pt-[35px]">
            {data.paragraph1}
          </p>
          <p className="text-[24px] leading-[36px] text-[#555555] pt-[35px]">
            {data.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
