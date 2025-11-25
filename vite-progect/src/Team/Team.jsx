// import css from "./Team.module.css";

// const Team = () => {
//     return;
// }

// export default Team;

import React, { useRef } from 'react';
import css from "./Team.module.css";

// Дані про команду (без змін)
const teamMembers = [
    {
        id: 1,
        name: "Дмитро Коваль",
        position: "CEO / Головний Стратег",
        bio: "Керує загальною візією та стратегією розвитку. Фокус на інноваційних технологіях та масштабуванні бізнесу.",
        pros: ["Стратегічне мислення", "Фінансова грамотність"],
        cons: ["Перфекціонізм"],
        imageSrc: "[Image of Dmytro Koval - CEO]", 
    },
    {
        id: 2,
        name: "Оксана Шевченко",
        position: "Lead Designer / Арт-директор",
        bio: "Відповідає за візуальний стиль та користувацький досвід (UX/UI). Перетворює складні ідеї на інтуїтивно зрозумілі інтерфейси.",
        pros: ["Креативність", "Увага до деталей"],
        cons: ["Ненавидить шрифти Comic Sans"],
        imageSrc: "[Image of Oksana Shevchenko - Lead Designer]",
    },
    {
        id: 3,
        name: "Андрій Петренко",
        position: "Chief Technical Officer (CTO)",
        bio: "Очолює розробку та архітектуру cloud-native рішень. Забезпечує надійність та безпеку всіх технічних платформ.",
        pros: ["Cloud Architecture", "Python/Go"],
        cons: ["Занадто любить код"],
        imageSrc: "[Image of Andriy Petrenko - CTO]",
    },
    {
        id: 4,
        name: "Юлія Савчук",
        position: "Head of Marketing",
        bio: "Відповідає за перфоманс-маркетинг, SEO та бренд-менеджмент. Забезпечує вимірювану присутність компанії на ринку.",
        pros: ["Data-Driven", "Ефективність"],
        cons: ["Прокидається до 6 ранку"],
        imageSrc: "[Image of Yulia Savchuk - Head of Marketing]",
    },
];

const Team = () => {
    const carouselRef = useRef(null); 

    return (
        <section className={css.teamSection}>
            <h2 className={css.sectionTitle}>🤝 Наші Лідери</h2>
            
            {/* teamCarousel тепер працює як вертикальний контейнер */}
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
                        
                        <div className={css.memberAttributes}>
                            <h4 className={css.attributesTitle}>Особливості</h4>
                            <div className={css.attributesList}>
                                {member.pros.map((pro, index) => (
                                    <span key={`pro-${index}`} className={css.attributeBadgeP}>
                                        + {pro}
                                    </span>
                                ))}
                                {member.cons.map((con, index) => (
                                    <span key={`con-${index}`} className={css.attributeBadgeM}>
                                        – {con}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;