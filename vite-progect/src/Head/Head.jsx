import Contact from "../Contact/Contact";
import css from "./Head.module.css";
// import Logo from "../assets/Logo.jpg";
// import Logotip from "../assets/Logotip.jpg";
import { LuBrainCircuit } from "react-icons/lu";

const Head = () => {
    return (
        <div className={css.contHead}>
            <div className={css.compnameHead}>
            <LuBrainCircuit className={css.iconHead}/>
                </div>
            <p>About</p>
            <p>Services</p>
            <p>Team</p>
            <p>Contact</p>
        </div>
    );
}

export default Head;