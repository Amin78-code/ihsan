import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";
import pattern from '../../../assets/images/pattern.png';

const BrownSection = () => {
  return (
    <section className="text-[#fff] pt-[120px] pb-[140px] relative overflow-hidden">
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] overlay-img'>
        <Image src={pattern} className='scale-[1.5] ' />
      </div>
      <div className='absolute left-0 right-0 top-0 w-full h-[100%] bg-[#AE8B5C] opacity-[.99]'>
      </div>
      <div className="myContainer relative z-[2]">
        <h1 className='fpr text-[70px] leading-[85px] text-center max-w-[900px] mx-auto'>Areas our individual coaching can help you with</h1>
        <p className='fgr text-[24px] leading-[36px] max-w-[1502px] mx-auto text-center pt-[32px]'>
         Ihsan Coaching provides comprehensive individual coaching services for all your needs, including:
        </p>
        <ul className='flex flex-wrap max-w-[900px] mx-auto gap-y-[30px] pt-[3%] list-square'>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] w-[50%]">Anxiety Management</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] w-[50%]">Post-Devorce Coaching</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] w-[50%]">Stress Management</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] w-[50%]">Parent Coaching</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] w-[50%]">Anger Management</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] w-[50%]">Mentoring</li>
            <li className="fgr text-[24px] leading-[36px] text-[#fff] w-[50%]">Relationship Coaching</li>
        </ul>
      </div>
    </section>
  );
};

export default BrownSection;
