// import { useState } from "react";
// import css from "./About.module.css";

// const About = () => {
//     const [active, setActive] = useState(null);

//     const toggle = (id) => {
//         setActive(prev => (prev === id ? null : id));
//     };

//     return (
//         <section id="about" className={css.mainWrapper}>
//             {/* Градиентный заголовок */}
//             <h2 className={css.header}>About Us</h2>
            
//             <div className={css.container}>
                
//                 {/* 1. Experience */}
//                 <div 
//                     className={`${css.block} ${active === "exp" ? css.active : ''}`} 
//                     onClick={() => toggle("exp")}
//                 >
//                     <p className={css.title}>Experience</p>
//                     <p className={css.desc}>
//                         Our team has delivered end-to-end digital products for companies across fintech, SaaS,
//                         e-commerce, and compliance-driven industries.
//                     </p>

//                     {active === "exp" && (
//                         <ul className={css.subpoints}>
//                             <li>Full-cycle product development</li>
//                             <li>Cloud-native engineering</li>
//                             <li>Security & compliance</li>
//                         </ul>
//                     )}
//                 </div>

//                 {/* 2. Versatility */}
//                 <div 
//                     className={`${css.block} ${active === "vers" ? css.active : ''}`} 
//                     onClick={() => toggle("vers")}
//                 >
//                     <p className={css.title}>Versatility</p>
//                     <p className={css.desc}>
//                         Our cross-functional expertise allows us to adapt to any scale or industry. 
//                         We integrate design, engineering, content, and strategy into a unified workflow.
//                     </p>

//                     {active === "vers" && (
//                         <ul className={css.subpoints}>
//                             <li>Multi-industry experience</li>
//                             <li>Flexible engagement models</li>
//                             <li>Cross-disciplinary skill set</li>
//                         </ul>
//                     )}
//                 </div>

//                 {/* 3. Advantages */}
//                 <div 
//                     className={`${css.block} ${active === "adv" ? css.active : ''}`} 
//                     onClick={() => toggle("adv")}
//                 >
//                     <p className={css.title}>Advantages</p>
//                     <p className={css.desc}>
//                         We combine expertise in design, development, data, and marketing to create secure,
//                         reliable products that deliver real business value.
//                     </p>

//                     {active === "adv" && (
//                         <ul className={css.subpoints}>
//                             <li>Holistic product approach</li>
//                             <li>Security by default</li>
//                             <li>Flexibility & scalability</li>
//                         </ul>
//                     )}
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default About;

import { useState } from "react";
import css from "./About.module.css";

const About = () => {
    const [active, setActive] = useState(null);

    const toggle = (id) => {
        setActive(prev => (prev === id ? null : id));
    };

    return (
        <section id="about" className={css.mainWrapper}>
            {/* Градиентный заголовок */}
            <h2 className={css.header}>About Us</h2>
            
            <div className={css.container}>
                
                {/* 1. Experience */}
                <div 
                    className={`${css.block} ${active === "exp" ? css.active : ''}`} 
                    onClick={() => toggle("exp")}
                >
                    <p className={css.title}>Experience</p>
                    <p className={css.desc}>
                        Our team has delivered end-to-end digital products for companies across fintech, SaaS,
                        e-commerce, and compliance-driven industries.
                    </p>

                    {/* ИЗМЕНЕНИЕ: УДАЛЕН УСЛОВНЫЙ РЕНДЕРИНГ {active === "exp" && (...)} */}
                    <ul className={css.subpoints}>
                        <li>Full-cycle product development</li>
                        <li>Cloud-native engineering</li>
                        <li>Security & compliance</li>
                    </ul>
                </div>

                {/* 2. Versatility */}
                <div 
                    className={`${css.block} ${active === "vers" ? css.active : ''}`} 
                    onClick={() => toggle("vers")}
                >
                    <p className={css.title}>Versatility</p>
                    <p className={css.desc}>
                        Our cross-functional expertise allows us to adapt to any scale or industry. 
                        We integrate design, engineering, content, and strategy into a unified workflow.
                    </p>

                    {/* ИЗМЕНЕНИЕ: УДАЛЕН УСЛОВНЫЙ РЕНДЕРИНГ */}
                    <ul className={css.subpoints}>
                        <li>Multi-industry experience</li>
                        <li>Flexible engagement models</li>
                        <li>Cross-disciplinary skill set</li>
                    </ul>
                </div>

                {/* 3. Advantages */}
                <div 
                    className={`${css.block} ${active === "adv" ? css.active : ''}`} 
                    onClick={() => toggle("adv")}
                >
                    <p className={css.title}>Advantages</p>
                    <p className={css.desc}>
                        We combine expertise in design, development, data, and marketing to create secure,
                        reliable products that deliver real business value.
                    </p>

                    {/* ИЗМЕНЕНИЕ: УДАЛЕН УСЛОВНЫЙ РЕНДЕРИНГ */}
                    <ul className={css.subpoints}>
                        <li>Holistic product approach</li>
                        <li>Security by default</li>
                        <li>Flexibility & scalability</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default About;