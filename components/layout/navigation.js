import Head from "next/head";
import Image from "next/image";
import arrow from "../../assets/images/icons/arrow.svg";
import logo from "../../assets/images/logo/logo.svg";
// import navBrand from "../../assets/images/bg/navBrand.png";
import Script from "next/script";
import { FiInstagram } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import {TbMenu2} from "react-icons/tb";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const divisionDropDown = useRef(null);
  var isMenuHide = true;
  var isRotate = false;
  var isOpenDropdown = false;
  //   const toggle = document.getElementById("toggle");

  function toggleFunction() {
    // console.log("called");
    toggle.classList.toggle("active");
    if (isMenuHide == true) {
      document.getElementById("menu_options").classList.add("show-menu");
      document.querySelector(".mobile-nav").classList.add("fixed");
      document.querySelector(".mobile-nav").classList.remove("absolute");
      document.querySelector(".mobile-nav").classList.contains("bg-black") &&
        document.querySelector(".mobile-nav").classList.remove("bg-black");

      isMenuHide = false;
    } else if (isMenuHide == false) {
      document.getElementById("menu_options").classList.remove("show-menu");
      document.querySelector(".mobile-nav").classList.add("absolute");
      document.querySelector(".mobile-nav").classList.remove("fixed");
      division.current.class;
      isMenuHide = true;
    }
  }
  function openDropdownMenu() {
    divisionDropDown.classList.toggle("show-dropdown");
  }

  function openMobMenu() {
    console.log('openMobMenu')
    console.log('document.getElementById ',document.getElementById('desktop_nav'))
    document.getElementById('desktop_nav').classList.toggle("dblock");
  }
  

  return (
    <div>
      <div className="hidden md:block h-[50px] bg-[#fff]">
        <ul className="myContainer flex justify-end items-center h-[100%]">
          <li className="px-[1.8%] text-[24px] fgr font-[600]">
            <a>Careers</a>
          </li>
          <li className="px-[1.8%] text-[24px] fgr font-[600]">
            <a>Blog</a>
          </li>
          <li className="px-[1.8%] text-[24px] fgr font-[600]">
            <a>Contact</a>
          </li>
          <li className="px-[1.8%] text-[24px] fgr font-[600]">
            <a>Donations</a>
          </li>
          <li className="px-[0.5%] text-[24px] fgr font-[600]">
            <a><FiInstagram /></a>
          </li>
          <li className="px-[0.5%] text-[24px] fgr font-[600]">
            <a><FaFacebook /></a>
          </li>
        </ul>
      </div>
      <div className="bg-[#0F2E3C] block xl:hidden">
        <div className="myContainer flex justify-between items-center">
        <div className="w-[244px] h-[63px] lg:h-[80px] bg-pink-400 opacity-[.4]">
            <a href="./">
              {/* <Image src={logo} alt="Logo" width={1500} height={500} /> */}
            </a>
          </div>
          <TbMenu2 className="text-[18px] sm:text-[40px] text-[#fff]" onClick={()=>openMobMenu()} />
        </div>
      </div>
      <nav id='desktop_nav' className="desktop-nav bg-[#0F2E3C] z-30 transform brown-light text-[15px] flex justify-between items-center">
        <div className="myContainer flex-col  xl:flex-row flex items-center justify-between">
          <div className="w-[244px] h-[80px] bg-pink-400 opacity-[.4] hidden xl:block">
            <a href="./">
              {/* <Image src={logo} alt="Logo" width={1500} height={500} /> */}
            </a>
          </div>
          <ul className="desktop-nav-menu text-white capitalize flex-col xl:flex-row text-center xl:text-left flex gap-x-8 pb-[40px] xl:pb-0">
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[23px] 2xl:text-[30px] px-[5px] 2xl:px-[8px] py-[20px] xl:py-[50px]">
              <Link href="/about-us">
                <a>About Us</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[23px] 2xl:text-[30px] px-[5px] 2xl:px-[8px] py-[20px] xl:py-[50px]">
              <Link href="/team">
                <a>Our Team</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[23px] 2xl:text-[30px] px-[5px] 2xl:px-[8px] py-[20px] xl:py-[50px]">
              <Link href="/services">
                <a>Services</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[23px] 2xl:text-[30px] px-[5px] 2xl:px-[8px] py-[20px] xl:py-[50px]">
              <Link href="/Programs">
                <a>Programs</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[23px] 2xl:text-[30px] px-[5px] 2xl:px-[8px] py-[20px] xl:py-[50px]">
              <Link href="/faqs">
                <a>FAQs</a>
              </Link>
            </li>
            <li className="fgr font-[600] text-[#fff] transition-all duration-300 text-[23px] 2xl:text-[30px] px-[5px] 2xl:px-[8px] py-[20px] xl:py-[50px]">
              <Link href="/faqs">
                <a className="bg-[#AE8B5C] text-[#fff] rounded-[50px] px-[53px] py-[22px] hover:opacity-[.8]">Get Started</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
