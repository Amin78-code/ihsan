import Layout from "../../components/layout/layout";
import Content from "../../components/profile/content/Content";
import BrownSection from "../../components/profile/brown-section/BrownSection";
import couple from '../../assets/images/services/couple.svg';

import meeting from '../../assets/images/about-us/meeting.svg';
import person1 from '../../assets/images/about-us/person1.svg';
import person2 from '../../assets/images/about-us/person2.svg';
import person3 from '../../assets/images/about-us/person7.svg';
import person4 from '../../assets/images/about-us/person8.svg';
import person5 from '../../assets/images/about-us/person5.svg';
import person6 from '../../assets/images/about-us/person6.svg';
import person7 from '../../assets/images/about-us/person4.svg';
import person8 from '../../assets/images/about-us/person3.svg';

const hero = {
    title: 'Marital coaching',
    paragraph1: "Our marital coaching focuses on helping you and your partner understand one another, how to effectively communicate and conflict resolution.",
}
const imgText1 = {
    img: couple,
    title: 'Individual coaching',
    paragraph1: "These personalized one-on-one online coaching sessions can help you uncover solutions to a myriad of problems, allowing you to more clearly define and achieve your goals. We can help you build self-confidence, improve relationships, or even provide support for your career.",
    paragraph2: " Whether you need solutions to ongoing problems, need direction in how to achieve your personal goals or just aren’t feeling quite like yourself, our individual coaching services are tailored to your needs."
}
const prof = {
    profileImg: person1,
    name: 'Farhan Ahmed',
    slugName: 'Farhan_Ahmed',
    designation: 'Founder & Coach',
    status: 'Masters in Clinical Mental Health Counseling',
    email: 'farhan.ahmed@ihsancoaching.com',
    paragraph1: 'Farhan Ahmed is a Licensed Clinical Professional Counselor and the founder of Ihsan Coaching. He completed his Masters in Clinical Mental Health Counseling from Argosy University. Prior to that, he graduated from Benedictine University with a Bachelors in Psychology. Farhan has worked as a therapist focusing on anxiety, depression, OCD, marital discord, sexual intimacy, self-esteem issues, anger management, manic disorders, and spiritual/personal development.',
    paragraph2: 'In addition to having his Masters, Farhan also has extensive Islamic knowledge. He was part of the first graduating class of the Dream Program at Bayyinah Institute back in 2010. Afterwards, he went on to study Islamic sciences at both DarusSalam Seminary located in Lombard, IL and Darul Qasim located in Glen Ellyn, IL. There he spent time learning Islamic Jurisprudence, Aqeedah, Tafsir, higher level Arabic, and Hadith. Farhan currently has 3 years left to complete his Aalimiyah degree insha Allah. Farhan lives in the Chicagoland area with his wife and three kids.'
}
const coaches = [{
    profileImg: person1,
    name: 'Farhan Ahmed',
    slugName: 'Farhan_Ahmed',
    designation: 'Founder & Coach',
    status: 'Masters in Clinical Mental Health Counseling',
    email: 'farhan.ahmed@ihsancoaching.com',
},
{
    profileImg: person2,
    name: 'Maria Mir',
    slugName: 'Maria_Mir',
    designation: ' Coach',
    status: 'Masters in Clinical Psychology',
    email: 'maria.mir@ihsancoaching.com',
}, 

]

export default function Profile({id}) {

    
// export const getStaticProps = async (context)=>{
//     const id = context.params.servicesId
//     const res = await fetch("http://localhost:8080/services/"+id)
//     const data = await res.json()
//     return {
//         props:{
//             service:data
//         }
//     }
// }

    console.log('id',id);
    return (
        <Layout>
            <Content data={prof} />
            <BrownSection />
        </Layout>
    );
}
