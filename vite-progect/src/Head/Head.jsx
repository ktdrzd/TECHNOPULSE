import React, { useState } from 'react';
import css from './Head.module.css';

const Head = () => {
    // Состояние для отслеживания, открыто ли бургер-меню
    const [isOpen, setIsOpen] = useState(false);
    
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    // Функция-обработчик для закрытия меню при клике на ссылку
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className={css.mainNav}>
            {/* Логотип */}
            <div className={css.logo}>
                VENENA
            </div>

            {/* Бургер-меню (только для мобильных) */}
            {/* Добавляем класс .active для анимации крестика */}
            <button 
                className={`${css.menuToggle} ${isOpen ? css.active : ''}`} 
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Линии бургера */}
                <span className={css.burgerLine}></span>
                <span className={css.burgerLine}></span>
                <span className={css.burgerLine}></span>
            </button>

            {/* Навигационное меню */}
            {/* Добавляем класс .active для отображения меню на мобильных */}
            <nav className={`${css.navMenu} ${isOpen ? css.active : ''}`}>
                <ul className={css.navList}>
                    {navItems.map(item => (
                        <li key={item.name} className={css.navItem}>
                            {/* При клике на ссылку меню закрывается */}
                            <a href={item.href} onClick={handleLinkClick}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button className={css.ctaNavButton} onClick={handleLinkClick}>
                    Get Started
                </button>
            </nav>
        </header>
    );
};

export default Head;