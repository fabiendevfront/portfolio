/**
 * Animation variant "popUp" for Framer Motion.
 * This animation makes an element appear by scaling it up and increasing its opacity.
 */
export const popUp = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" }
};

/**
 * Animation variant "slideUp" for Framer Motion.
 * This animation makes an element appear by moving it up while increasing its opacity.
 */
export const slideUp = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: { duration: 1.2, ease: "easeOut", opacity: { duration: 1.6 } }
};