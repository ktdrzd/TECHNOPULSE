// import css from "./Head.module.css";
// import { LuBrainCircuit } from "react-icons/lu";

// const Head = () => {
//     return (
//         <div className={css.contHead}>
//             <div className={css.compnameHead}>
//             <LuBrainCircuit className={css.iconHead}/>
//                 </div>
//             <p>About</p>
//             <p>Services</p>
//             <p>Team</p>
//             <p>Contact</p>
//         </div>
//     );
// }

// export default Head;

import { useState } from 'react';
import css from "./Head.module.css";
import { LuBrainCircuit } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";

const Head = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className={css.contHead}>
                <div className={css.brandSection}> 
                    <LuBrainCircuit className={css.iconHead}/>
                </div>

                <button 
                    className={css.menuButton} 
                    onClick={toggleMenu} 
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                >

                    {isMenuOpen ? (
                        <FiX className={css.menuIcon} />
                    ) : (
                        <FiMenu className={css.menuIcon} />
                    )}
                </button>
            </div>

            <nav className={`${css.mobileNav} ${isMenuOpen ? css.open : ''}`}>
                <p className={css.link} onClick={toggleMenu}>About</p>
                <p className={css.link} onClick={toggleMenu}>Services</p>
                <p className={css.link} onClick={toggleMenu}>Team</p>
                <p className={css.link} onClick={toggleMenu}>Contact</p>
            </nav>
        </>
    );
}

export default Head;