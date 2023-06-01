import { AnimatePresence, motion } from "framer-motion";

const Animation = ({ children, variants, ...props }) => {

    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...variants.transition }}
                style={{ width: "100%", overflowX: "hidden" }}
                {...props}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Animation;