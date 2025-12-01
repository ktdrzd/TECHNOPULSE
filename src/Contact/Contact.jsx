import React, { useState } from 'react';
import css from './Contact.module.css';
import Map from '../assets/map.png';
import PrivacyPolicyModal from '../PrivacyPolicyModal/PrivacyPolicyModal'
import TermsOfUseModal from '../TermsOfUseModal/TermsOfUseModal';

const Contact = () => {
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

    const openPrivacyModal = () => setIsPrivacyModalOpen(true);
    const closePrivacyModal = () => setIsPrivacyModalOpen(false);

    const openTermsModal = () => setIsTermsModalOpen(true);
    const closeTermsModal = () => setIsTermsModalOpen(false);

    return (
        <section id="contact" className={css.contactSection}>
            <h2 className={css.heading}>Let's build something great</h2>
            
            <div className={css.contactContent}>
                
                <div className={css.infoBlock}>
                    <h3 className={css.infoTitle}>Connect with Us</h3>
                    <p className={css.contactDetail}>
                        Email: <span>fajufahad1989@gmail.com</span>
                    </p>
                    <p className={css.contactDetail}>
                        Phone: <span>+97 15 0131 2484</span>
                    </p> 
                    <p className={css.contactDetail}>
                        Office: <span>Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates</span>
                    </p>
                    <img src={Map} alt="Office location" className={css.officeImage} />
                </div>
                
                <form className={css.contactForm}>
                    <h3 className={css.infoTitle}>Send a Message</h3>
                    <input type="text" placeholder="Your Name" className={css.inputField} required />
                    <input type="email" placeholder="Your Email" className={css.inputField} required />
                    <textarea placeholder="Tell us about your project..." className={css.textareaField} rows="5" required></textarea>
                    <button type="submit" className={css.submitButton}>
                        Send Inquiry
                    </button>

                    <div className={css.legalLinks}>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); openPrivacyModal(); }}
                            className={css.link}
                        >
                            Privacy Policy
                        </a>
                        <span className={css.linkSeparator}>|</span>
                        <a 
                            href="#" 
                            onClick={(e) => { e.preventDefault(); openTermsModal(); }}
                            className={css.link}
                        >
                            Terms of Use
                        </a>
                    </div>
                </form>

            </div>
            <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
            <TermsOfUseModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />

        </section>
    );
};

export default Contact;