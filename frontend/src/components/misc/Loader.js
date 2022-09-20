import { motion } from "framer-motion";

const Loader = ({ width, height }) => {
    const loadingContainer = {
        width: width || "50px",
        height: height || "30px",
        display: "flex",
        justifyContent: "space-around",
    };
    const loadingCircle = {
        display: "block",
        width: "1rem",
        height: "1rem",
        backgroundColor: "#3A36DB",
        borderRadius: "0.5rem",
    };
    
    const loadingContainerVariants = {
        start: {
            transition: {
                staggerChildren: 0.2,
            },
        },
        end: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
    
    const loadingCircleVariants = {
        start: {
            y: "0%",
        },
        end: {
            y: "60%",
        },
    };
    const loadingCircleTransition = {
        duration: 0.4,
        yoyo: Infinity,
        ease: 'easeInOut'
    }

    return (
        <div>
            <motion.div
                style={loadingContainer}
                variants={loadingContainerVariants}
                initial="start"
                animate="end"
            >
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                ></motion.span>
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                ></motion.span>
                <motion.span
                    style={loadingCircle}
                    variants={loadingCircleVariants}
                    transition={loadingCircleTransition}
                ></motion.span>
            </motion.div>
        </div>
    );
};

export default Loader;