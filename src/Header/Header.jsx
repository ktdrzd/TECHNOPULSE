import css from "./Header.module.css";
import Head from "../Head/Head";
import Logo from '../assets/Logo.png';

const Header = () => {
    const heroDescription = "We design and build secure, cloud-native products—combining interface R&D, robust architecture, and clear in-product content with compliant data pipelines and hosting. We launch and grow them through performance marketing campaigns and brand management that keep every touchpoint consistent, measurable, and on-brand.";

    return (
        <header className={css.mainHeader}> 
            <Head />
            <div className={css.heroSection}>
                <div className={css.heroContentWrapper}> 
                    <div className={css.companyInfo}>
                        <h1 className={css.companyNameTop}>VENENA MARKETING </h1>
                        <p className={css.companyNameBottom}>SERVICES - FZCO</p>
                    </div>

                    <p className={css.heroLocation}>Dubai, United Arab Emirates</p> 
                    <p className={css.heroText}>{heroDescription}</p>
                </div>
                
                <div className={css.animationContainer}>
                    <img src={Logo} alt="Venena Marketing Logo" className={css.animatedLogo} />
                </div>

            </div>
        </header>
    );
}

export default Header;