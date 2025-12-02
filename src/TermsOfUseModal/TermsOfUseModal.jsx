import React from 'react';
import modalCss from './TermsOfUseModal.module.css'; 

const TermsOfUseModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const contentStyle = {
        color: '#fff' 
    };

    return (
        <div className={modalCss.modalOverlay} onClick={onClose}>
            <div 
                className={modalCss.modalContent} 
                onClick={e => e.stopPropagation()}
                style={{ backgroundColor: '#333' }}
            >
                <button 
                    className={modalCss.closeButton} 
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times; {/* HTML-сущность для крестика (×) */}
                </button>
                <div className={modalCss.modalBody} style={contentStyle}>
                    
                    <h1>Terms of Use</h1>
                    <p>Last updated: November 25, 2025</p>
                    <p>
                        You are on the website venenafzco.org (hereinafter – the “Website”), which is owned and operated by VENENA MARKETING SERVICES - FZCO, a company duly incorporated and registered under the laws of England and Wales, with company number 72094, and its Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates, UAE (hereinafter – “VENENA”, “We”, “Us”, “Our”).
                    </p>
                    <p>
                        These Terms of Use govern the relationship between Users and VENENA. Please read these Terms carefully before using the Website.
                    </p>
                    <p>
                        If You do not agree with any part of these Terms of Use, please stop using the Website immediately.
                    </p>

                    <h3>1. SUBJECT MATTER</h3>
                    <p>
                        VENENA defines the terms and conditions of these Terms of Use at its own discretion, and these Terms of Use can be concluded only by the acceptance of the User (“User”, “You”, “Your”) as a whole when the latter uses the Website.
                    </p>
                    <p>
                        These Terms of Use regulate the use of the Website, access to its functionality, and the services provided by VENENA, including but not limited to: general information about our services, IT consultancy, engineering, marketing, project management, contact and communication functions, and any other features VENENA may add.
                    </p>
                    <p>
                        The User may not use the Website for any unlawful purposes and must comply with UAE laws and applicable local regulations. 
                    </p>
                    <p>
                        These Terms of Use and VENENA’s Privacy Policy together constitute the entire agreement between You and VENENA regarding your use of the Website.
                    </p>

                    <h3>2. ACCEPTANCE OF THE TERMS</h3>
                    <p>
                        By using the Website, filling in forms, or sending messages, You agree to be bound by these Terms. If You do not agree, discontinue use immediately.
                    </p>

                    <h3>3. CHANGES TO THE WEBSITE AND TERMS</h3>
                    <p>
                        VENENA reserves the right to modify, suspend, or discontinue the Website at any time without notice. We may update these Terms periodically. Your continued use of the Website constitutes your acceptance of any revised Terms. VENENA is not responsible for any interruptions caused by maintenance, server issues, or third-party providers.
                    </p>

                    <h3>4. SUSPENSION OF ACCESS</h3>
                    <p>
                        VENENA may suspend or terminate your access to the Website at any time and for any reason, including violations of these Terms. Provisions regarding intellectual property, limitation of liability, and applicable law shall survive termination.
                    </p>

                    <h3>5. INTELLECTUAL PROPERTY</h3>
                    <p>
                        All content on the Website (text, graphics, code, images, design) is owned or licensed by VENENA. Unauthorized copying, use, or modification is prohibited. All rights are protected under UAE copyright law.
                    </p>
                    
                    <h3>6. PRIVACY & COOKIES</h3>
                    <p>
                        VENENA values your privacy. Personal data is processed in accordance with our Privacy Policy.
                    </p>
                    <p>
                        We don’t use cookies, analytics tools, or tracking technologies on this Website. Any data you provide (for example, through the contact form or email) is processed only for the purpose of responding to your inquiry.
                    </p>

                    <h3>7. LIMITATION OF LIABILITY</h3>
                    <p>
                        The Website and its content are provided “as is” and “as available” without any warranty of accuracy or fitness for a particular purpose. VENENA shall not be liable for any loss, damage, or interruption caused by the use or inability to use the Website. Users access the Website at their own risk.
                    </p>
                    <p>
                        VENENA reserves the right to update or modify its Privacy Policy and Terms of Use at any time and at its sole discretion. Any such changes will take effect immediately upon publication on this Website, and your continued use of the Website will constitute your acceptance of the updated Policy.
                    </p>

                    <h3>8. ELECTRONIC COMMUNICATIONS</h3>
                    <p>
                        By using the Website and communicating with us, You consent to receive electronic communications and agree that such communications satisfy any legal requirement for written communication.
                    </p>

                    <h3>9. GOVERNING LAW & DISPUTE RESOLUTION</h3>
                    <p>
                        These Terms shall be governed by the laws of the United Arab Emirates. Any dispute shall first be attempted to resolve through good-faith negotiations by contacting venena.fzco@proton.me. If unresolved, disputes shall be referred to arbitration in If unresolved, disputes shall be referred to arbitration under the rules of the Dubai Integrated Economic Zones Arbitration Centre (DIEZA Arbitration Centre), in Dubai, UAE. The language of proceedings shall be English.
                    </p>

                    <h3>10. CONTACT</h3>
                    <ul>
                        <li>Email: venena.fzco@proton.me</li>
                        <li>Address: Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates, UAE</li>
                        <li>Phone: +97 15 0733 7042</li>
                    </ul>
                    <p>© 2025 VENENA MARKETING SERVICES - FZCO. All rights reserved.</p>

                </div>
            </div>
        </div>
    );
};

export default TermsOfUseModal;