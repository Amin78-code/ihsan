import React from "react";
import {FaEnvelope, FaPhoneAlt} from 'react-icons/fa'
import Layout from "../components/layout/layout";

export default function consultation() {
  
 
  return (
    <Layout>

<section>
      <div className="main__container">
          <div className="bg-[#F2F2F2] p-[50px] xl:p-[100px] ">
            <div className="lg:w-1/2" >
              <h2 className="fpr text-[32px] lg:text-[80px] 2xl:text-[100px] md:leading-[80px] xl:leading-[100px] text-[#0F2E3C]">Request a consultation</h2>

                <p className="mt-5 md:mt-10 text-[#555555] text-[12px] sm:text-[20px] lg:text-[28px] fgr ">With a unique understanding of the challenges Muslims may face in Western society, we’re able to offer tailored programs that bridge traditional coaching and Islamic consulting. And unlike traditional therapy, goal-oriented coaching is a more direct path to well being. To get started, fill out the form below and a member of our team will be in touch with you as soon as possible.</p>
             
                <p className="mt-5 md:mt-10 text-[#555555] text-[12px] sm:text-[20px] lg:text-[28px] fgr "> If this is not your first appointment, please visit our calendly portal to book your next appointment.</p>
             
            </div>


            <form className=" flex flex-wrap justify-between gap-y-2 md:gap-y-4 mt-[50px]" action="">
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px]  " type="text" placeholder="First Name*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Last Name*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Email Address*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Phone Number*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Date of Birth*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Best time to contact you?" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="Services you’re interested in*" />
                <input className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full lg:w-[49%] rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " type="text" placeholder="If marital/prematiral, please include name of partner" />
                <textarea rows={4} className=" shadow-[0_0_30px_#00000029] p-2 md:p-4 w-full rounded-[18px] text-[12px] md:text-[20px] lg:text-[24px] " placeholder="Reason for service?" />
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