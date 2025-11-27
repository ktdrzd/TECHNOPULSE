// import css from "./About.module.css";

// const About = () => {
//     return (
//         <div>
//             <div className={css.Experience}>
//                 <p>Experience</p>
//                 <p>Our team has delivered end-to-end digital products for companies across fintech, SaaS, e-commerce, and compliance-driven industries. We specialize in building secure, cloud-native systems and high-performance user experiences, ensuring every solution meets modern regulatory, technical, and business requirements.</p>
//             </div>
//             <div className={css.Versatility}>
//                 <p>Versatility</p>
//                 <p>Our team combines cross-functional expertise that allows us to adapt to projects of any scale, complexity, or industry. We integrate design, engineering, content, and strategy into a single workflow, ensuring smooth collaboration and predictable results.</p>
//             </div>
//             <div className={css.Advantages}>
//                 <p>Advantages</p>
//                 <p>We combine expertise in design, development, data, and marketing to create products that operate reliably, securely, and deliver business results.</p>
//             </div>
//             <div className={css.OurApproach}>
//                 <p>Our Approach</p>
//                 <p>We structure our processes so that every phase—from ideation to scaling—is manageable, transparent, and results-oriented.</p>
//             </div>
//         </div>
//     );
// }

// export default About;

import { useState } from "react";
import css from "./About.module.css";

const About = () => {
    const [active, setActive] = useState(null);

    const toggle = (id) => {
        setActive(prev => (prev === id ? null : id));
    };

    return (
        <div className={css.container}>
            <div className={css.block} onClick={() => toggle("exp")}>
                <p className={css.title}>Experience</p>
                <p className={css.desc}>
                    Our team has delivered end-to-end digital products for companies across fintech, SaaS,
                    e-commerce, and compliance-driven industries. We specialize in building secure, cloud-native
                    systems and high-performance user experiences.
                </p>

                {active === "exp" && (
                    <ul className={css.subpoints}>
                        <p>Our experience includes:</p>
                        <li>Full-cycle product development</li>
                        <li>Cloud-native engineering</li>
                        <li>Security & compliance</li>
                        <li>Content & communication systems</li>
                        <li>Brand & marketing execution</li>
                        <li>Lifecycle product management</li>
                    </ul>
                )}
            </div>

            <div className={css.block} onClick={() => toggle("vers")}>
                <p className={css.title}>Versatility</p>
                <p className={css.desc}>
                    Our cross-functional expertise allows us to adapt to any scale or industry. 
                    We integrate design, engineering, content, and strategy into a unified workflow.
                </p>

                {active === "vers" && (
                    <ul className={css.subpoints}>
                        <p>Our versatility is reflected in:</p>
                        <li>Multi-industry experience</li>
                        <li>Flexible engagement models</li>
                        <li>Cross-disciplinary skill set</li>
                        <li>Scalable processes</li>
                        <li>Tech-agnostic approach</li>
                        <li>Adaptable communication</li>
                    </ul>
                )}
            </div>

            <div className={css.block} onClick={() => toggle("adv")}>
                <p className={css.title}>Advantages</p>
                <p className={css.desc}>
                    We combine expertise in design, development, data, and marketing to create secure,
                    reliable products that deliver real business value.
                </p>

                {active === "adv" && (
                    <ul className={css.subpoints}>
                        <p>Our key advantages:</p>
                        <li>Holistic product approach</li>
                        <li>Security by default</li>
                        <li>Flexibility & scalability</li>
                        <li>Transparent processes</li>
                        <li>Cloud-native expertise</li>
                        <li>User-centric product thinking</li>
                    </ul>
                )}
            </div>

            <div className={css.block} onClick={() => toggle("approach")}>
                <p className={css.title}>Our Approach</p>
                <p className={css.desc}>
                    We structure every phase—from ideation to scaling—so it is predictable, transparent,
                    and results-oriented.
                </p>

                {active === "approach" && (
                    <ul className={css.subpoints}>
                        <p>Our approach is based on three key principles:</p>
                        <li>Meaningful simplicity</li>
                        <li>Data-driven decision making</li>
                        <li>Close collaboration</li>
                    </ul>
                )}
            </div>

        </div>
    );
};

export default About;
