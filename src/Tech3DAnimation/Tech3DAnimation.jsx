import { motion } from "framer-motion";
import { LuCpu, LuCloud, LuShieldCheck, LuNetwork } from "react-icons/lu";
import css from "./Tech3DAnimation.module.css";

const float = {
    animate: {
        y: [0, -12, 0],
        transition: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
        }
    }
};

export default function Tech3DAnimation() {
    return (
        <div className={css.wrapper}>
            {/* Cloud */}
            <motion.div
                className={css.item}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
                <LuCloud className={css.bigIcon} />
            </motion.div>

            {/* CPU */}
            <motion.div
                className={css.item}
                variants={float}
                animate="animate"
                style={{ top: "30%", left: "20%" }}
            >
                <LuCpu className={css.midIcon} />
            </motion.div>

            {/* Shield */}
            <motion.div
                className={css.item}
                variants={float}
                animate="animate"
                style={{ bottom: "20%", right: "15%" }}
                transition={{ duration: 2 }}
            >
                <LuShieldCheck className={css.midIcon} />
            </motion.div>

            {/* Network */}
            <motion.div
                className={css.item}
                variants={float}
                animate="animate"
                style={{ top: "10%", right: "30%" }}
                transition={{ duration: 3.5 }}
            >
                <LuNetwork className={css.smallIcon} />
            </motion.div>
        </div>
    );
}
