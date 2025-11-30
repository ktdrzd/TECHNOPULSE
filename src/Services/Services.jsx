import React from 'react';
import css from './Services.module.css';
import { FaRocket } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";

const Services = () => {
    return (
        <section id="services" className={css.servicesSection}>
            
            {/* 1. ОПРЕДЕЛЕНИЕ SVG-ГРАДИЕНТА (ОСТАЕТСЯ БЕЗ ИЗМЕНЕНИЙ) */}
            <svg style={{ width: 0, height: 0, position: 'absolute' }}>
                <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#6c429c' }} /> 
                    <stop offset="100%" style={{ stopColor: '#c74c96' }} /> 
                </linearGradient>
            </svg>

            <h2 className={css.mainHeading}>Our Services</h2>

            <div className={css.competenciesGrid}>
                
                <div className={css.competencyItem}>
                    {/* ИЗМЕНЕНИЕ: Используем fill="url(#icon-gradient)" */}
                    <div className={css.icon}><FaRocket fill="url(#icon-gradient)" /></div> 
                    <h3 className={css.gridTitle}>Venture Building</h3>
                    <p>From idea generation and strategic planning to full market launch and fundraising support, we act as co-founders to accelerate your growth.</p>
                </div>
                
                <div className={css.competencyItem}>
                    {/* ИЗМЕНЕНИЕ: Используем fill="url(#icon-gradient)" */}
                    <div className={css.icon}><FaGears fill="url(#icon-gradient)" /></div>
                    <h3 className={css.gridTitle}>Product Engineering</h3>
                    <p>Building secure, scalable, and high-performance cloud-native platforms, specializing in complex B2B and SaaS architectures.</p>
                </div>
                
                <div className={css.competencyItem}>
                    {/* ИЗМЕНЕНИЕ: Используем fill="url(#icon-gradient)" */}
                    <div className={css.icon}><GiProgression fill="url(#icon-gradient)" /></div>
                    <h3 className={css.gridTitle}>Growth Strategy</h3>
                    <p>Data-driven performance marketing, brand development, and sustainable user acquisition campaigns designed for measurable results.</p>
                </div>

            </div>
            
            <div className={css.consultingBlock}>
                <h3 className={css.consultingHeading}>IT & Business Automation Consulting</h3>
                <p className={css.consultingText}>
                    Optimize operational efficiency through smart technology adoption. We audit infrastructure, implement customized software (ERP, CRM), and automate key workflows to minimize manual effort and ensure compliance.
                </p>
                <ul className={css.consultingList}>
                    <li>IT infrastructure audit</li>
                    <li>CRM/ERP Automation</li>
                    <li>Digitalization of document flow</li>
                    <li>Ensuring IT security</li>
                </ul>
                {/* <button className={css.consultingCta}>Schedule an Audit</button> */}
            </div>
        </section>
    );
};

export default Services;