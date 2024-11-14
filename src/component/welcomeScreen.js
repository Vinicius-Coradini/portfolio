import { motion } from 'framer-motion';

export default function welcomeScreen() {
    return (
        <motion.div
            className="text-white w-full h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
        >
            <h1>oi</h1>
        </motion.div>

    )
}