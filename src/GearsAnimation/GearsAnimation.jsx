import { motion } from "framer-motion";
import { HiCog } from "react-icons/hi";
import { HiOutlineCog } from "react-icons/hi";
import css from "./GearsAnimation.module.css";

export default function GearsAnimation() {
    return (
        <div className={css.wrapper}>
            <motion.div
                className={css.gear1}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear"
                }}
            >
                <HiCog size={160} color="#ffffff" />
            </motion.div>

            <motion.div
                className={css.gear2}
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear"
                }}
            >
                <HiOutlineCog size={220} color="#c74c96" />
            </motion.div>
        </div>
    );
}
