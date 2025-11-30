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

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className={css.mainNav}>
            <div className={css.logo}>
                VENENA
            </div>

            <button 
                className={`${css.menuToggle} ${isOpen ? css.active : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* 🔥 Удалена вторая burgerLine для крестика 🔥 */}
                <span className={css.burgerLine}></span>
                <span className={css.burgerLine}></span> 
            </button>

            <div 
                className={`${css.overlay} ${isOpen ? css.active : ''}`}
                onClick={handleLinkClick}
            ></div>

            <nav className={`${css.navMenu} ${isOpen ? css.active : ''}`}>
                <ul className={css.navList}>
                    {navItems.map(item => (
                        <li key={item.name} className={css.navItem}>
                            <a href={item.href} onClick={handleLinkClick}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Head;