

import React, { useRef } from 'react';
import css from "./Team.module.css";

const teamMembers = [
    {
        id: 1,
        name: "VLADYSLAV VITENKO",
        position: "CEO",
        bio: "Leads the company, responsible for the strategy of developing secure cloud-native products and their scalable growth through measurable marketing and brand integrity.",
        imageSrc: "[Image of Dmytro Koval - CEO]", 
    },
    {
        id: 2,
        name: "YULIIA DIATLOVA",
        position: "CTCO",
        bio: "Oversees the technological architecture and cybersecurity of cloud products, ensuring all processes and data pipelines achieve full regulatory compliance.",
        imageSrc: "[Image of Oksana Shevchenko - Lead Designer]",
    },
    {
        id: 3,
        name: "ANDRII KURINNYI",
        position: "CPGO",
        bio: "Defines product strategy (including R&D) and drives growth via performance marketing, ensuring brand integrity and maximizing user value.",
        imageSrc: "[Image of Andriy Petrenko - CTO]",
    },
];

const Team = () => {
    const carouselRef = useRef(null); 

    return (
        <section className={css.teamSection}>
            <h2 className={css.sectionTitle}>OUR TEAM</h2>
            <div className={css.teamCarousel} ref={carouselRef}>
                {teamMembers.map((member) => (
                    <div key={member.id} className={css.teamCard}>
                        
                        <div className={css.photoWrapper}>
                            <div className={css.profilePhoto}>
                                {member.imageSrc} 
                            </div>
                        </div>

                        <div className={css.profileInfo}>
                            <h3 className={css.memberName}>{member.name}</h3>
                            <p className={css.memberPosition}>{member.position}</p>
                        </div>
                        
                        <p className={css.memberBio}>{member.bio}</p>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;