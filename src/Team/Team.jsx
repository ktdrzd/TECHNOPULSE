// src/components/Team/Team.js

import React, { useState, useEffect, useRef } from 'react'; // <--- ДОДАНО ХУКИ
import css from './Team.module.css';
import CEO from '../assets/CEO.jpg';
import YULIA from '../assets/YULIA.jpg';
import ANDRII from '../assets/ANDRII.jpg';

// 1. ДАНІ ЗАЛИШАЮТЬСЯ БЕЗ ЗМІН
const teamMembers = [
    {
        id: 1,
        name: "VLADYSLAV VITENKO",
        role: "CEO",
        bio: "Leads the company, responsible for the strategy of developing secure cloud-native products and their scalable growth through measurable marketing and brand integrity.",
        imageSrc: CEO,
    },
    {
        id: 2,
        name: "YULIIA DIATLOVA",
        role: "CTCO",
        bio: "Oversees the technological architecture and cybersecurity of cloud products, ensuring all processes and data pipelines achieve full regulatory compliance.",
        imageSrc: YULIA,
    },
    {
        id: 3,
        name: "ANDRII KURINNYI",
        role: "CPGO",
        bio: "Defines product strategy (including R&D) and drives growth via performance marketing, ensuring brand integrity and maximizing user value.",
        imageSrc: ANDRII,
    },
];

const TeamMemberCard = ({ member }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { root: null, rootMargin: '0px', threshold: 0.2 } 
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={cardRef} 
            className={`${css.memberCard} ${isVisible ? css.isVisible : ''}`}
        >
            <div className={css.photoPlaceholder}>
                <img src={member.imageSrc} alt={member.name} />
            </div>
            <h3 className={css.memberName}>{member.name}</h3>
            <p className={css.memberRole}>{member.role}</p>
            <p className={css.memberBio}>{member.bio}</p>
        </div>
    );
};

const Team = () => {
    return (
        <section id="team" className={css.teamSection}>
            <h2 className={css.heading}>Our Team</h2>
            <p className={css.subText}>A cross-functional group of experts dedicated to your success.</p>
            
            <div className={css.teamGrid}>
                {teamMembers.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                ))}
            </div>
        </section>
    );
};

export default Team;