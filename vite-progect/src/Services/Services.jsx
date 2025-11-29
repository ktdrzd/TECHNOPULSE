// import css from "./Services.module.css";

// const allServices = [
//   {
//     title: "Product Strategy & Research",
//     items: [
//       "Market and competitor analysis",
//       "User research & behavior insights",
//       "Product strategy and roadmap creation",
//       "Feature prioritization and value modeling"
//     ]
//   },
//   {
//     title: "UX/UI Design & Interface R&D",
//     items: [
//       "UX research, wireframes, and prototypes",
//       "UI design systems and component libraries",
//       "Interaction design and usability improvements",
//       "In-product content, structure, microcopy"
//     ]
//   },
//   {
//     title: "Web & App Development",
//     items: [
//       "Front-end and back-end development",
//       "Cloud-native engineering (AWS, GCP, Azure)",
//       "API development and system integrations",
//       "Performance optimization & QA testing"
//     ]
//   },
//   {
//     title: "Architecture & Infrastructure",
//     items: [
//       "Cloud infrastructure design",
//       "CI/CD automation and DevOps pipelines",
//       "Scalable and secure system architecture",
//       "Logging, monitoring, and observability setup"
//     ]
//   },
//   {
//     title: "Security & Compliance",
//     items: [
//       "Secure-by-design implementation",
//       "Access control, encryption, audit logging",
//       "GDPR-ready data flows",
//       "Risk assessment & technical documentation"
//     ]
//   },
//   {
//     title: "Data Engineering",
//     items: [
//       "Data pipelines and ETL processes",
//       "Storage and database optimization",
//       "Analytics infrastructure setup",
//       "Event tracking and measurement framework"
//     ]
//   },
//   {
//     title: "Branding & Creative Production",
//     items: [
//       "Brand identity development",
//       "Visual communication systems",
//       "Creative assets for digital campaigns",
//       "Tone of voice and messaging guides"
//     ]
//   },
//   {
//     title: "Performance Marketing",
//     items: [
//       "Paid acquisition (Google, Meta, TikTok, LinkedIn)",
//       "Funnel design and CRO",
//       "A/B testing & experiment frameworks",
//       "Analytics, reporting, attribution setup"
//     ]
//   },
//   {
//     title: "Ongoing Product Growth",
//     items: [
//       "Feature expansion and iteration",
//       "UX optimization based on data",
//       "Product maintenance and support",
//       "Continuous improvement cycles"
//     ]
//   }
// ];

// const Services = () => {
//   const services = allServices.slice(0, 7); // Берём первые 7 услуг

//   return (
//     <div className={css.servicesWrapper}>
//       <p className={css.title}>OUR SERVICES</p>
//       <div className={css.cardsContainer}>
//         {services.map((service, index) => (
//           <div key={index} className={css.card}>
//             <h3 className={css.cardTitle}>{service.title}</h3>
//             <ul className={css.cardList}>
//               {service.items.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import css from './Services.module.css';

const Services = () => {
    return (
        <section id="services" className={css.servicesSection}>
            <h2 className={css.mainHeading}>Our Core Services</h2>

            {/* Блок ключевых компетенций (Сетка) */}
            <div className={css.competenciesGrid}>
                
                <div className={css.competencyItem}>
                    <div className={css.icon}>🚀</div>
                    <h3 className={css.gridTitle}>Venture Building</h3>
                    <p>From idea generation and strategic planning to full market launch and fundraising support, we act as co-founders to accelerate your growth.</p>
                </div>
                
                <div className={css.competencyItem}>
                    <div className={css.icon}>⚙️</div>
                    <h3 className={css.gridTitle}>Product Engineering</h3>
                    <p>Building secure, scalable, and high-performance cloud-native platforms, specializing in complex B2B and SaaS architectures.</p>
                </div>
                
                <div className={css.competencyItem}>
                    <div className={css.icon}>📈</div>
                    <h3 className={css.gridTitle}>Growth Strategy</h3>
                    <p>Data-driven performance marketing, brand development, and sustainable user acquisition campaigns designed for measurable results.</p>
                </div>

            </div>

            {/* Дополнительный блок: ИТ и Автоматизация (Выделенный темный блок) */}
            <div className={css.consultingBlock}>
                <h3 className={css.consultingHeading}>IT & Business Automation Consulting</h3>
                <p className={css.consultingText}>
                    Optimize operational efficiency through smart technology adoption. We audit infrastructure, implement customized software (ERP, CRM), and automate key workflows to minimize manual effort and ensure compliance.
                </p>
                <ul className={css.consultingList}>
                    <li>Аудит IT-инфраструктуры</li>
                    <li>Автоматизация CRM/ERP</li>
                    <li>Цифровизация документооборота</li>
                    <li>Обеспечение IT-безопасности</li>
                </ul>
                <button className={css.consultingCta}>Schedule an Audit</button>
            </div>
        </section>
    );
};

export default Services;