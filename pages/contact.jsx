import React from "react";
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import Layout from "../components/layout/layout";

export default function Contact() {
  
 
  return (
    <Layout>

<section>
      <div className="main__container">
          <div className="bg-[#F2F2F2] p-[50px] xl:p-[100px] ">
            <div className="lg:w-1/2" >
              <h2 className="fpr text-[32px] sm:text-[42px] lg:text-[52px] xl:text-[80px] 2xl:text-[100px] leading-[36px] md:leading-[45px] lg:leading-[80px] xl:leading-[100px] text-[#0F2E3C]">Interested in working with us?</h2>

              <div className="flex mt-[20px] ">
                <FaEnvelope color="#0F2E3C" className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[35px]"  />
                <p className="ml-2 text-[#555555] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[28px] fgr ">Info@ihsancoaching.com</p>
              </div>

              <div className="flex mt-[20px] ">
                <FaPhoneAlt color="#0F2E3C" className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[35px]"  />
                <p className="ml-2 text-[#555555] text-[12px] sm:text-[16px] md:text-[20px] lg:text-[28px] fgr ">1-630-557-9427</p>
              </div>
            </div>


            <form className=" flex flex-wrap justify-between gap-y-2 md:gap-y-4 mt-[50px]" action="">
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]  " type="text" placeholder="First Name*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Last Name*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Email Address*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 h-[50px] w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Phone Number*" />
                <textarea rows={4} className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " placeholder="Message" />
                <div className=" w-full">
                  <button type="submit" className="shadow-[0_0_30px_#00000029] rounded-[40px] float-right bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[20px] lg:text-[24px] font-bold px-10 py-3 ">Send</button>
                </div>
            </form>
          </div>
      </div>
    </section>
    </Layout>
  );
}