import { AnimatePresence, motion } from "framer-motion";

const Animation = ({ children, variants, ...props }) => {
    console.log(variants)
    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...variants.transition }}
                {...props}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default Animation;