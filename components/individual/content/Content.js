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
          Whether you need solutions to ongoing problems, need direction in how to achieve your personal goals or just aren’t feeling quite like yourself, our individual coaching services are tailored to your needs.
        </p>
        <p className="text-[24px] leading-[36px] text-[#555555] pb-[40px]">
          Everyone’s situation is different, and how we respond and feel is different as well. That’s why each coaching session is highly personalized, ensuring you get the right support and advice you need to overcome challenges or achieve milestones.
        </p>
        <p className="text-[24px] leading-[36px] text-[#555555] pb-[40px]">
          Each session is goal-oriented, accelerating your journey towards well being and a better you.
        </p>

      </div>
      <div className="myContainer flex justify-end pt-[3.7%] pb-[8%]">

        <div className='absolute left-0'>
          <div className='max-w-[600px] 2xl:max-w-[100%] left-0 after:w-[337px] relative after:h-[200px] after:bg-[#0F2E3C] after:rounded-bl-[100px] after:right-[50px] after:bottom-[-25px] after:absolute after:z-[-1] z-[2]
        before:w-[337px] relative before:h-[200px] before:bg-[#0F2E3C] before:rounded-tr-[100px] before:left-[0] before:top-[-60px] before:absolute
        '><Image src={data.img} />
          </div>
        </div>
        <div className="w-[55%] pt-[5%]">
          <h6 className="fgb text-[28px] leading-[36px] text-[#555555]">
            Who is this for?
          </h6>
          <p className="text-[24px] leading-[36px] text-[#555555] pt-[35px]">
            If you’re experiencing any of these emotions and they’re affecting your day-to-day quality of life, consider contacting us about an individual coaching plan.
          </p>
          <h6 className="fgb text-[24px] leading-[36px] text-[#555555] py-[35px]">
            You may need an individual coach if you’re…
          </h6>

          <ul className='flex flex-wrap list-disc'>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Feeling lost and confused</li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Not sure what to do in life</li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Having relationship issues</li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Feeling a career change, but have doubts</li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Feeling anxious</li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Feeling stress, and lacking self confidence</li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Full of anger</li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Feeling a change, but need guidance</li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555] w-[50%]">Feeling lonely</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
