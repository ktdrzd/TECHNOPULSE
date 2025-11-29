// import { useState } from 'react';
// import css from "./Head.module.css";
// import { LuBrainCircuit } from "react-icons/lu";
// import { FiMenu, FiX } from "react-icons/fi";

// const Head = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <>
//             <div className={css.contHead}>
//                 <div className={css.brandSection}> 
//                     <LuBrainCircuit className={css.iconHead}/>
//                 </div>

//                 <button 
//                     className={css.menuButton} 
//                     onClick={toggleMenu} 
//                     aria-expanded={isMenuOpen}
//                     aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
//                 >

//                     {isMenuOpen ? (
//                         <FiX className={css.menuIcon} />
//                     ) : (
//                         <FiMenu className={css.menuIcon} />
//                     )}
//                 </button>
//             </div>

//             <nav className={`${css.mobileNav} ${isMenuOpen ? css.open : ''}`}>
//                 <p className={css.link} onClick={toggleMenu}>About us</p>
//                 <p className={css.link} onClick={toggleMenu}>Services</p>
//                 <p className={css.link} onClick={toggleMenu}>Team</p>
//                 <p className={css.link} onClick={toggleMenu}>Contact</p>
//             </nav>
//         </>
//     );
// }

// export default Head;

import React, { useState } from 'react';
import css from './Head.module.css';

const Head = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={css.mainNav}>
            {/* Логотип */}
            <div className={css.logo}>
                {/* Используем градиентный текст для стиля */}
                VENENA
            </div>

            {/* Бургер-меню (только для мобильных) */}
            <button className={css.menuToggle} onClick={() => setIsOpen(!isOpen)}>
                <span className={css.burgerLine}></span>
                <span className={css.burgerLine}></span>
                <span className={css.burgerLine}></span>
            </button>

            {/* Навигационное меню */}
            <nav className={`${css.navMenu} ${isOpen ? css.active : ''}`}>
                <ul className={css.navList}>
                    {navItems.map(item => (
                        <li key={item.name} className={css.navItem}>
                            <a href={item.href} onClick={() => setIsOpen(false)}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className={css.ctaNavButton}>Get Started</button>
            </nav>
        </header>
    );
};

export default Head;