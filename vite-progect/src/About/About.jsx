// import { useState } from "react";
// import css from "./About.module.css";

// const About = () => {
//     const [active, setActive] = useState(null);

//     const toggle = (id) => {
//         setActive(prev => (prev === id ? null : id));
//     };

//     return (
//         <div className={css.mainWrapper}>
//             {/* Добавляем новый заголовок */}
//             <h2 className={css.header}>About Us</h2>
            
//             <div className={css.container}>
//                 {/* Динамическое добавление класса 'active' */}
//                 <div 
//                     className={`${css.block} ${active === "exp" ? css.active : ''}`} 
//                     onClick={() => toggle("exp")}
//                 >
//                     <p className={css.title}>Experience</p>
//                     <p className={css.desc}>
//                         Our team has delivered end-to-end digital products for companies across fintech, SaaS,
//                         e-commerce, and compliance-driven industries. We specialize in building secure, cloud-native
//                         systems and high-performance user experiences.
//                     </p>

//                     {active === "exp" && (
//                         <ul className={css.subpoints}>
//                             <p>Our experience includes:</p>
//                             <li>Full-cycle product development</li>
//                             <li>Cloud-native engineering</li>
//                             <li>Security & compliance</li>
//                             <li>Content & communication systems</li>
//                             <li>Brand & marketing execution</li>
//                             <li>Lifecycle product management</li>
//                         </ul>
//                     )}
//                 </div>

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
//                             <p>Our versatility is reflected in:</p>
//                             <li>Multi-industry experience</li>
//                             <li>Flexible engagement models</li>
//                             <li>Cross-disciplinary skill set</li>
//                             <li>Scalable processes</li>
//                             <li>Tech-agnostic approach</li>
//                             <li>Adaptable communication</li>
//                         </ul>
//                     )}
//                 </div>

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
//                             <p>Our key advantages:</p>
//                             <li>Holistic product approach</li>
//                             <li>Security by default</li>
//                             <li>Flexibility & scalability</li>
//                             <li>Transparent processes</li>
//                             <li>Cloud-native expertise</li>
//                             <li>User-centric product thinking</li>
//                         </ul>
//                     )}
//                 </div>

//                 <div 
//                     className={`${css.block} ${active === "approach" ? css.active : ''}`} 
//                     onClick={() => toggle("approach")}
//                 >
//                     <p className={css.title}>Our Approach</p>
//                     <p className={css.desc}>
//                         We structure every phase—from ideation to scaling—so it is predictable, transparent,
//                         and results-oriented.
//                     </p>

//                     {active === "approach" && (
//                         <ul className={css.subpoints}>
//                             <p>Our approach is based on three key principles:</p>
//                             <li>Meaningful simplicity</li>
//                             <li>Data-driven decision making</li>
//                             <li>Close collaboration</li>
//                         </ul>
//                     )}
//                 </div>

//             </div>
//         </div>
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

                    {active === "exp" && (
                        <ul className={css.subpoints}>
                            <li>Full-cycle product development</li>
                            <li>Cloud-native engineering</li>
                            <li>Security & compliance</li>
                        </ul>
                    )}
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

                    {active === "vers" && (
                        <ul className={css.subpoints}>
                            <li>Multi-industry experience</li>
                            <li>Flexible engagement models</li>
                            <li>Cross-disciplinary skill set</li>
                        </ul>
                    )}
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

                    {active === "adv" && (
                        <ul className={css.subpoints}>
                            <li>Holistic product approach</li>
                            <li>Security by default</li>
                            <li>Flexibility & scalability</li>
                        </ul>
                    )}
                </div>

            </div>
        </section>
    );
};

export default About;