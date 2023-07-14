export const popUp = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.5, delay: 0.1, ease: "easeInOut" }
};

export const slideLeft = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.1, ease: "easeInOut" }
};

export const slideUp = {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
    transition: { duration: 1.2, ease: "easeOut", opacity: { duration: 1.6 } }
};