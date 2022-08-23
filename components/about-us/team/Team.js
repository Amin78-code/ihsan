import Image from "next/image";
import meeting from '../../../assets/images/about-us/meeting.svg';
import person1 from '../../../assets/images/about-us/person1.svg';
import person2 from '../../../assets/images/about-us/person2.svg';
import person3 from '../../../assets/images/about-us/person7.svg';
import person4 from '../../../assets/images/about-us/person8.svg';
import person5 from '../../../assets/images/about-us/person5.svg';
import person6 from '../../../assets/images/about-us/person6.svg';
import person7 from '../../../assets/images/about-us/person4.svg';
import person8 from '../../../assets/images/about-us/person3.svg';
import email from '../../../assets/images/icons/email.svg';
import Link from "next/link";

const coaches = [{
    profileImg: person1,
    name: 'Farhan Ahmed ',
    designation: 'Founder & Coach',
    status: 'Masters in Clinical Mental Health Counseling',
    email: 'farhan.ahmed@ihsancoaching.com',
},
{
    profileImg: person2,
    name: 'Maria Mir   ',
    designation: ' Coach',
    status: 'Masters in Clinical Psychology',
    email: 'maria.mir@ihsancoaching.com',
},
{
    profileImg: person3,
    name: 'Rehena Rana  ',
    designation: 'Coach',
    status: 'Masters in Clinical Psychology',
    email: 'rehena.rana@ihsancoaching.com',
},
{
    profileImg: person4,
    name: 'Rawand Abdelghani   ',
    designation: 'Coach',
    status: 'Masters of Science in Social Work',
    email: 'rawand.abdelghani@ihsancoaching.com',
},
{
    profileImg: person5,
    name: 'Asmaa Mahran   ',
    designation: 'Coach',
    status: 'Masters of Science in Psychology',
    email: 'asmaa.mahran@ihsancoaching.com',
},
{
    profileImg: person6,
    name: 'Mohammed Bemat Coach`',
    designation: 'Coach',
    status: 'Masters in Pastoral Studies',
    email: 'mohammed.bemat@ihsancoaching.com',
}

]

const religiousConsultants = [{
    profileImg: person7,
    name: 'Mufti Zeshan Ahmed',
    designation: ' Religious Consultant',
    status: 'Resident Scholar at Masjid Uthman',
    email: 'zeshan.ahmed@ihsancoaching.com',
},
{
    profileImg: person8,
    name: 'Imam Azhar Subedar ',
    designation: ' Religious Consultant',
    status: 'Masters in Islamic Sciences',
    email: 'Azhar.subedar@ihsancoaching.com',
}
]

const Team = () => {
    return (
        <section className='pb-[20px] md:pb-[50px]'>
            <div className="min-h-[auto] md:min-h-[620px] flex items-center relative">
                <div className='absolute z-[-1] top-0 w-full lg:w-[48%]'>
                    <Image src={meeting} />
                </div>
                <div className='myContainer flex justify-end items-end'>
                    <div className='w-full lg:w-[50%] pl-0 lg:pl-[3.5%] pr-0 lg:pr-[3%]   pt-[80%] sm:pt-[75%] lg:pt-[280px] lg:pt-0'>
                        <h2 className='fpr text-[32px] md:text-[100px] text-[#0F2E3C] leading-[32px] md:leading-[100px]'>Meet the team</h2>
                        <p className='fgr text-[12px] md:text-[24px] text-[#555] leading-[16px] md:leading-[36px] mt-[10px] md:mt-[32px]'> Our secret to success is an exceptional and diverse team, all of whom come from diverse and unique backgrounds. Our coaches are licensed therapists with extensive experience offering culturally and spiritually responsive services.</p>
                    </div>
                </div>
            </div>
            <div className='myContainer pt-[50px] md:pt-0'>
                <h2 className='fpr text-[28px] md:text-[68px] text-[#0F2E3C] leading-[24px] md:leading-[100px]'>Coaches</h2>
                <div className='flex flex-col md:flex-row flex-wrap gap-x-[2.5%] gap-y-[50px] mt-[20px] md:mt-[55px] mb-[30px] md:mb-[80px]'>
                    {coaches.map((value) => {
                        return (
                            <div key={value.profileImg} className='w-full md:w-[31.5%] overflow-hidden'>
                                <div className='w-full img_container'><Image src={value.profileImg} /></div>
                                <h3 className='fpr text-[24px] md:text-[42px] leading-[20px] md:leading-[36px] text-[#182657] mt-[14px] md:mt-[24px]'>
                                    {value.name}
                                </h3>
                                <h4 className='fgr text-[16px] md:text-[28px] leading-[20px] md:leading-[36px] text-[#555555] pt-[5px] pb-0 md:pb-[4px]'>  {value.designation}</h4>
                                <p className='fgr text-[12px] md:text-[24px] leading-[20px] md:leading-[36px] text-[#555555]'> {value.status}</p>
                                <p className='email fgr text-[12px] md:text-[24px] leading-[36px] text-[#555555] flex items-center'>
                                    <div className='mr-[10px] mt-[5px] min-w-[20px] md:min-w-[32px]'><Image src={email} /></div>
                                    <span className='text-ellipsis overflow-hidden'>{value.email}</span>
                                </p>
                                <a className="fgr w-[94px] w-[181px] h-[31px] md:h-[50px] bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[24px] leading-[36px] rounded-[50px] px-[5px] py-[10px] hover:opacity-[.8] cursor-pointer mb-0 md:mb-[20px] flex justify-center items-center mt-0 md:mt-[25px]">
                                    View profile
                                </a>
                            </div>
                        )
                    })}
                </div>
                <h2 className='fpr text-[28px] md:text-[68px] text-[#0F2E3C] leading-[24px] md:leading-[100px]'>  <Link href='/religious'>Religious Consultants</Link></h2>
                <div className='flex flex-col md:flex-row flex-wrap gap-x-[2.5%] gap-y-[50px] mt-[20px] md:mt-[55px] mb-[30px] md:mb-[80px]'>
                    {religiousConsultants.map((value) => {
                        return (
                            <div key={value.profileImg} className='w-full md:w-[31.5%] overflow-hidden'>
                                <div className='w-full img_container'> <Image src={value.profileImg} /></div>
                                <h3 className='fpr text-[24px] md:text-[42px] leading-[20px] md:leading-[36px] text-[#182657] mt-[14px] md:mt-[24px]'>
                                    {value.name}
                                </h3>
                                <h4 className='fgr text-[16px] md:text-[28px] leading-[20px] md:leading-[36px] text-[#555555] pt-[5px] pb-0 md:pb-[4px]'>  {value.designation}</h4>
                                <p className='fgr text-[12px] md:text-[24px] leading-[20px] md:leading-[36px] text-[#555555]'> {value.status}</p>
                                <p className='email fgr text-[12px] md:text-[24px] leading-[36px] text-[#555555] flex items-center'>
                                    <div className='mr-[10px] mt-[5px] min-w-[20px] md:min-w-[32px]'><Image src={email} /></div>
                                    <span className='text-ellipsis overflow-hidden'>{value.email}</span>
                                </p>
                                <a className="fgr w-[94px] w-[181px] h-[31px] md:h-[50px] bg-[#AE8B5C] text-[#fff] text-[12px] md:text-[24px] leading-[36px] rounded-[50px] px-[5px] py-[10px] hover:opacity-[.8] cursor-pointer mb-0 md:mb-[20px] flex justify-center items-center mt-0 md:mt-[25px]">
                                    View profile
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Team;
