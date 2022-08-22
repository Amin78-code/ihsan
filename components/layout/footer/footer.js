import Image from "next/image";
import logo from "../../../assets/images/logo/logo.svg";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsChevronDown, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className={`bg-[#0F2E3C] pt-[42px] md:pt-[97px]`}>
        <div className="pb-0">
          <div className="myContainer-footer">
            <h1 className="fpr text-[32px] md:text-[85px] text-[#fff] leading-[32px] md:leading-[85px] max-w-[800px] mx-auto text-center">
              Get started with Ihsan Coaching today
            </h1>
            <p className="fgr text-[12px] md:text-[24px] leading-[16px] md:leading-[36px] text-[#fff] pt-[21px] md:pt-[62px] pb-[21px] md:pb-[77px] max-w-[1090px] mx-auto text-center">
              Let’s take the first step towards better health and well-being,
              together. Get in touch to learn more about coaches or services, or
              to set up an initial session that fits your schedule.
            </p>
            <div className="flex justify-center items-center gap-x-[20px]">
              <a>
                <button className="fgr w-[120px] md:w-[332px] h-[28px] md:h-[79px] border-[1px] md:border-[3px] border-[#fff] flex justify-between items-center bg-[#fff] text-[12px] md:text-[24px] text-[#555555] rounded-[50px] px-[11px] md:px-[30px] py-[7px] md:py-[10px] hover:border-[#FAF7F2] hover:bg-[#0F2E3C] hover:text-[#fff] group">
                  Get started
                  <BsFillArrowRightCircleFill
                     className="text-[#555] text-[12px] md:text-[30px] group-hover:text-[#fff]"
                  />
                </button>
              </a>
              <a>
                <button className="fgr w-[120px] md:w-[332px] h-[28px] md:h-[79px] border-[1px] md:border-[3px] border-[#FAF7F2] flex justify-between items-center bg-[#0F2E3C] text-[12px] md:text-[24px] text-[#fff] rounded-[50px] px-[11px] md:px-[30px] py-[7px] md:py-[10px] hover:text-[#555555] hover:bg-[#fff] group">
                  Meet the team
                  <BsFillArrowRightCircleFill
                  className="text-[#fff] text-[12px] md:text-[30px] group-hover:text-[#555]"
                  />
                </button>
              </a>
            </div>
          </div>
          <div className="myContainer-footer px-[10px] pt-[35px] md:pt-[110px] pb-0 md:pb-[100px] flex flex-col md:flex-row justify-between">
            <div className="pb-[23px] md:pb-0">
              <h6 className="fpr text-[#fff] text-[18px] md:text-[42px] capitalize">
                Services
              </h6>
              <ul>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">
                  Individual Coaching
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">
                  Premarital Coaching
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">
                  Marital Coaching
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">
                  Religious Coaching
                </li>
              </ul>
            </div>
            <div className="pb-[23px] md:pb-0">
              <h6 className="fpr text-[#fff] text-[18px] md:text-[42px] capitalize">About</h6>
              <ul>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">Home</li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">About Us</li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">Team</li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">Careers</li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">Programs</li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">Contact</li>
              </ul>
            </div>
            <div className="pb-[13px] md:pb-0">
              <h6 className="fpr text-[#fff] text-[18px] md:text-[42px] capitalize">
                Contact
              </h6>
              <ul>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">
                  info@ihsancoaching.ca
                </li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] hover:opacity-[.8] cursor-pointer">1-630-557-9427</li>
                <li className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px] flex gap-x-[5px] pt-[6px]">
                  <FiInstagram className="hover:opacity-[.8] cursor-pointer" />
                  <FaFacebook className="hover:opacity-[.8] cursor-pointer" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="myContainer-footer pb-0 py-[20px]">
          <h6 className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] font-[600]">Waivers</h6>
          <p className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] py-0 md:py-[2px]">
            18+ Waiver | Under 18 Waiver
          </p>
          <p className="fgr text-[#fff] text-[12px] md:text-[24px] leading-[22px] md:leading-[42px] pt-[20px] md:pt-[50px] pb-[50px]">
            <a className='cursor-pointer hover:opacity-[.8]'>Privacy Policy</a> | <a className='cursor-pointer hover:opacity-[.8]'>Terms & Conditions</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
