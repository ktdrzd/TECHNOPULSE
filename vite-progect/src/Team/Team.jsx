

// import React, { useRef } from 'react';
// import css from "./Team.module.css";

// const teamMembers = [
//     {
//         id: 1,
//         name: "VLADYSLAV VITENKO",
//         position: "CEO",
//         bio: "Leads the company, responsible for the strategy of developing secure cloud-native products and their scalable growth through measurable marketing and brand integrity.",
//         imageSrc: "[Image of Dmytro Koval - CEO]", 
//     },
//     {
//         id: 2,
//         name: "YULIIA DIATLOVA",
//         position: "CTCO",
//         bio: "Oversees the technological architecture and cybersecurity of cloud products, ensuring all processes and data pipelines achieve full regulatory compliance.",
//         imageSrc: "[Image of Oksana Shevchenko - Lead Designer]",
//     },
//     {
//         id: 3,
//         name: "ANDRII KURINNYI",
//         position: "CPGO",
//         bio: "Defines product strategy (including R&D) and drives growth via performance marketing, ensuring brand integrity and maximizing user value.",
//         imageSrc: "[Image of Andriy Petrenko - CTO]",
//     },
// ];

// const Team = () => {
//     const carouselRef = useRef(null); 

//     return (
//         <section className={css.teamSection}>
//             <h2 className={css.sectionTitle}>OUR TEAM</h2>
//             <div className={css.teamCarousel} ref={carouselRef}>
//                 {teamMembers.map((member) => (
//                     <div key={member.id} className={css.teamCard}>
                        
//                         <div className={css.photoWrapper}>
//                             <div className={css.profilePhoto}>
//                                 {member.imageSrc} 
//                             </div>
//                         </div>

//                         <div className={css.profileInfo}>
//                             <h3 className={css.memberName}>{member.name}</h3>
//                             <p className={css.memberPosition}>{member.position}</p>
//                         </div>
                        
//                         <p className={css.memberBio}>{member.bio}</p>
                        
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default Team;

import React from 'react';
import css from './Team.module.css';

const teamMembers = [
    { name: 'Alex Thompson', role: 'Founder & Strategy Lead', bio: 'Over 15 years in market entry and business scaling.' },
    { name: 'Sarah Chen', role: 'Head of Product Engineering', bio: 'Expert in secure, cloud-native (AWS/Azure) development.' },
    { name: 'Michael Lee', role: 'Growth & Marketing Director', bio: 'Focuses on performance marketing and user acquisition.' },
];

const Team = () => {
    return (
        <section id="team" className={css.teamSection}>
            <h2 className={css.heading}>Our Leadership Team</h2>
            <p className={css.subText}>A cross-functional group of experts dedicated to your success.</p>
            
            <div className={css.teamGrid}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={css.memberCard}>
                        <div className={css.photoPlaceholder}>
                            {/*  */}
                        </div>
                        <h3 className={css.memberName}>{member.name}</h3>
                        <p className={css.memberRole}>{member.role}</p>
                        <p className={css.memberBio}>{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;