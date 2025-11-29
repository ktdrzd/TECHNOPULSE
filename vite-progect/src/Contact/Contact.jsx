// import React from 'react';
import css from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={css.contactSection}>
            <h2 className={css.heading}>Let's Build Something Great</h2>
            
            <div className={css.contactContent}>
                
                {/* Контактная информация */}
                <div className={css.infoBlock}>
                    <h3 className={css.infoTitle}>Connect with Us</h3>
                    <p className={css.contactDetail}>
                        Email: <span>hello@venena.marketing</span>
                    </p>
                    <p className={css.contactDetail}>
                        Phone: <span>+44 20 7946 0999</span>
                    </p>
                    <p className={css.contactDetail}>
                        Office: <span>London, United Kingdom</span>
                    </p>
                    <p className={css.socialLinks}>
                        {/* Здесь можно добавить иконки соцсетей */}
                        [Social Icons]
                    </p>
                </div>
                
                {/* Форма обратной связи */}
                <form className={css.contactForm}>
                    <h3 className={css.infoTitle}>Send a Message</h3>
                    <input type="text" placeholder="Your Name" className={css.inputField} required />
                    <input type="email" placeholder="Your Email" className={css.inputField} required />
                    <textarea placeholder="Tell us about your project..." className={css.textareaField} rows="5" required></textarea>
                    <button type="submit" className={css.submitButton}>
                        Send Inquiry
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Contact;