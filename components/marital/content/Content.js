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
          Maintaining a healthy marriage takes consistent work. You’ll face new challenges to overcome every day, which can add stress and weight to a marriage. And if that becomes overwhelming, you’ll need new tools and techniques to keep your relationship going strong.
        </p>
        <p className="text-[24px] leading-[36px] text-[#555555] pb-[40px]">
          Marital coaching focuses on helping you and your partner truly understand one another, how to effectively communicate, and resolving conflicts in a way you’re both comfortable with. By addressing unresolved conflict, couples often feel relieved and more fulfilled after their coaching sessions.
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
            You could be 10 days or 10 years into your marriage. All that matters is if you think you or your partner can be happier together.
          </p>
          <p className="text-[24px] leading-[36px] text-[#555555] pt-[35px] pb-[35px]">
            It could be a good idea to seek marital coaching if:
          </p>
          <ul className='fle x flex-wra p list-disc'>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]"> There is little to no communication between you and your spouse </li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]">You’ve become indifferent to each other </li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]">You and/or your spouse withhold affection </li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]">There are constant misunderstandings between you and your spouse </li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]">Any communication leads to arguments and negativity </li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]">You keep secrets from one another and lie </li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]">Either one of you is unfaithful, whether physically or emotionally </li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]">You’re having the same arguments over and over </li>
            <li className="fgr text-[24px] leading-[36px] text-[#555555]">You’re living separate lives</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Content;
