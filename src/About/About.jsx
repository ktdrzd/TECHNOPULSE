import { useState } from "react";
import css from "./About.module.css";

const About = () => {
    const [active, setActive] = useState(null);

    const toggle = (id) => {
        setActive(prev => (prev === id ? null : id));
    };

    return (
        <section id="about" className={css.mainWrapper}>
            <h2 className={css.header}>About Us</h2>
            
            <div className={css.container}>
               
                <div 
                    className={`${css.block} ${active === "exp" ? css.active : ''}`} 
                    onClick={() => toggle("exp")}
                >
                    <p className={css.title}>Experience</p>
                    <p className={css.desc}>
                        Our team has delivered end-to-end digital products for companies across fintech, SaaS,
                        e-commerce, and compliance-driven industries.
                    </p>

                    <ul className={css.subpoints}>
                        <li>Full-cycle product development</li>
                        <li>Cloud-native engineering</li>
                        <li>Security & compliance</li>
                    </ul>
                </div>

                <div 
                    className={`${css.block} ${active === "vers" ? css.active : ''}`} 
                    onClick={() => toggle("vers")}
                >
                    <p className={css.title}>Versatility</p>
                    <p className={css.desc}>
                        Our cross-functional expertise allows us to adapt to any scale or industry. 
                        We integrate design, engineering, content, and strategy into a unified workflow.
                    </p>

                    <ul className={css.subpoints}>
                        <li>Multi-industry experience</li>
                        <li>Flexible engagement models</li>
                        <li>Cross-disciplinary skill set</li>
                    </ul>
                </div>

                <div 
                    className={`${css.block} ${active === "adv" ? css.active : ''}`} 
                    onClick={() => toggle("adv")}
                >
                    <p className={css.title}>Advantages</p>
                    <p className={css.desc}>
                        We combine expertise in design, development, data, and marketing to create secure,
                        reliable products that deliver real business value.
                    </p>

                    <ul className={css.subpoints}>
                        <li>Holistic product approach</li>
                        <li>Security by default</li>
                        <li>Flexibility & scalability</li>
                    </ul>
                </div>

                <div 
                    className={`${css.block} ${active === "mission" ? css.active : ''}`} 
                    onClick={() => toggle("mission")}
                >
                    <p className={css.title}>Mission</p>
                    <p className={css.desc}>
                        We focus on building technology that empowers businesses to grow, scale, 
                        and operate securely in an ever-changing digital environment.
                    </p>

                    <ul className={css.subpoints}>
                        <li>Innovation-driven mindset</li>
                        <li>Client-centric delivery</li>
                        <li>Long-term value creation</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default About;
