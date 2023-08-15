import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Component for Animation with framer-motion
 * @component
 * @param {React.ReactNode} children - The components to be animated
 * @param {Object} variants - The animation variants to be used.
 * @param {...Object} props - Additional props
 * @returns {JSX.Element}
 */
const Animation = ({ children, variants, ...props }) => {

    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ ...variants.transition }}
                style={{}}
                {...props}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

// PropTypes for Animation component
Animation.propTypes = {
    children: PropTypes.node.isRequired,
    variants: PropTypes.object.isRequired,
};

export default Animation;