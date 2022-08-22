import Image from "next/image";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import pattern from '../../../assets/images/pattern.png';
import bulb from '../../../assets/images/home/bulb.svg';
import ring from '../../../assets/images/home/ring.svg';
import mosque from '../../../assets/images/home/mosque.svg';
import person from '../../../assets/images/home/person.svg';
import heart from '../../../assets/images/home/heart.svg';
import clipboard from '../../../assets/images/home/clipboard.svg';

const DarkSection = () => {
  return (
    <section className="bg-[#0F2E3C] text-[#fff] pt-[44px] md:pt-[94px] pb-[58px] md:pb-[110px] relative overflow-hidden">

      <div className='absolute left-0 right-0 top-0 w-full h-[100%] overlay-img'>person
        <Image src={pattern} className='scale-[1.5] ' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#0F2E3C] opacity-[.9]'>
      </div>

      <div className="myContainer relative z-[2]">
        <div className="px-0 md:px-[5%]">
          <div className="flex flex-col md:flex-row">
            <h2 className="fpr text-[32px] text-[70px] text-[#fff] leading-[32px] md:leading-[70px] min-w-[100%] md:min-w-[450px]">
              What makes us different?
            </h2>
            <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] pl-0 md:pl-[5%] pt-[16px] md:pt-0">
              Coaching is another form of support for people that feel stuck in
              life, but don’t have a clinical illness. And Unlike traditional
              therapy, coaching is a more direct, goal-oriented approach to mental
              health that goes beyond the emotional resolution of past pain or
              trauma. Our licensed therapists serve as coaches to help you
              understand your current life experiences and belief systems. By
              laying the groundwork of where you are now and where you want to be,
              we can get you feeling you again, faster.
            </p>
          </div>
          <div className="flex flex-col md:flex-row pt-[60px] pb-[50px] md:py-[130px] items-center md:items-end">
            <div className="flex">
              <div className="mr-[20px] w-[52px] md:w-[auto] h-[53px] md:w-[auto]">
                <Image src={bulb} alt="image" />
              </div>
              <div>
                <h6 className="fgr text-[16px] md:text-[36px] leading-[26px] md:leading-[36px] font-[600] text-[#fff]">
                  Modern Coaching
                </h6>
                <ul>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[-3px] md:mt-0 text-[13px] md:text-[28px] text-[#fff] inline pr-[1px]" /> Action and goal-oreinted
                  </li>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[-3px] md:mt-0 text-[13px] md:text-[28px] text-[#fff] inline pr-[1px]" /> Forward looking
                  </li>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <BsFillCheckCircleFill className="mt-[-3px] md:mt-0 text-[13px] md:text-[28px] text-[#fff] inline pr-[1px]" /> Tailored one-on-one approach
                  </li>
                </ul>
              </div>
            </div>
            <p className="fpr text-[18px] md:text-[24px] text-[#fff] py-[5px] leading-[28px] px-[7%] mt-0 md:mt-[-30px]">
              vs
            </p>
            <div className="flex">
              <div className="mr-[20px] w-[37px] md:w-[auto] h-[69px] md:w-[auto]">
                <Image src={clipboard} alt="image" />
              </div>
              <div>
                <h6 className="fgr text-[16px] md:text-[36px] leading-[26px] md:leading-[36px] font-[600] text-[#fff]">
                  Traditional Therapy
                </h6>

                <ul>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <RiCloseCircleFill className="mt-[-3px] md:mt-0 text-[16px] md:text-[32px] text-[#fff] inline pr-[2px]" /> Analytical and introspective
                  </li>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <RiCloseCircleFill className="mt-[-3px] md:mt-0 text-[16px] md:text-[32px] text-[#fff] inline pr-[2px]" /> Slow-paced and long-term
                  </li>
                  <li className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] py-0 md:py-[6px] leading-[20px] md:leading-[28px]">
                    <RiCloseCircleFill className="mt-[-3px] md:mt-0 text-[16px] md:text-[32px] text-[#fff] inline pr-[2px]" /> Focus more on the past to
                    <br /> resolve current challenges
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="fpr text-[#fff] text-[32px] md:text-[85px] text-center pb-[27px] md:pb-[60px]">
            Our services
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-[0] md:gap-x-[5%] gap-y-[26px] md:gap-y-[50px]">
            <div className="w-[100%] md:w-[47%] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className='min-w-[27px] md:min-w-[60px] w-[27px] md:w-[60px] min-h-[27px] md:min-h-[60px] h-[27px] md:h-[60px] mt-[10px] mr-[10px]'>              <Image src={person} alt="image" /></div>
              <div>
                <h4 className="fgb text-[16px] md:text-[36px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Individual Coaching
                </h4>
                <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff]">
                  One-on-one coaching to help build self-confidence, improve
                  relationships, support careers, manage anxiety, and achieve your
                  personal goals.
                  <a className="block underline cursor-pointer">Learn more</a>
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[47%] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className='min-w-[27px] md:min-w-[60px] w-[27px] md:w-[60px] min-h-[27px] md:min-h-[60px] h-[27px] md:h-[60px] mt-[10px] mr-[10px]'>              <Image src={ring} alt="image" /></div>
              <div>
                <h4 className="fgb text-[16px] md:text-[36px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Premarital Coaching
                </h4>
                <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Assess your compatibility and get a better understanding of what
                  constitutes an ideal Islamic marriage.
                  <a className="block underline cursor-pointer">Learn more</a>
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[47%] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className='min-w-[27px] md:min-w-[60px] w-[27px] md:w-[60px] min-h-[27px] md:min-h-[60px] h-[27px] md:h-[60px] mt-[10px] mr-[10px]'>              <Image src={heart} alt="image" /></div>
              <div>
                <h4 className="fgb text-[16px] md:text-[36px] leading-[16px] md:leading-[36px] text-[#fff]">Marital Coaching</h4>
                <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff]">
                  By understanding your partner better, the easier it’ll be to
                  find solutions to conflicts. Learn strategies to communicate and
                  resolve conflicts more effectively.
                  <a className="block underline cursor-pointer">Learn more</a>
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[47%] flex items-start">
              {/* <div className="min-w-[70px] min-h-[70px] max-h-[70px] bg-pink-600 opacity-[.5] mr-[10px]"></div> */}
              <div className='min-w-[27px] md:min-w-[60px] w-[27px] md:w-[60px] min-h-[27px] md:min-h-[60px] h-[27px] md:h-[60px] mt-[10px] mr-[10px]'>              <Image src={mosque} alt="image" /></div>
              <div>
                <h4 className="fgb text-[16px] md:text-[36px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Religious Consulting
                </h4>
                <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff]">
                  Designed for either individuals or couples, speak directly to
                  Islamic scholars about any faith-based concerns that may be
                  troubling you.
                  <a className="block underline cursor-pointer">Learn more</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkSection;
