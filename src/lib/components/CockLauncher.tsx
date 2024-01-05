import { motion } from "framer-motion";
import { useState } from "react";
import { VITE_SVG } from "../consts/assets";

export default function CockLauncher()
{
    const [isAnimated, setIsAnimated] = useState(false);
    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(0.7);
    return (
        <>
            <div>
                <p>Count: {count}</p>
            </div>
            <motion.img
                // src={"https://www.svgrepo.com/show/264074/dumbbell-gym.svg"}
                src={VITE_SVG}
                className="logo"
                alt="Vite logo"
                style={{ height: 200, rotate: 180 }}
                animate={{
                    y: isAnimated ? [0, -200, 0] : 0,
                }}
                transition={{
                    y: {
                        duration: speed,
                    }
                }}
                onAnimationComplete={() =>
                {
                    if (isAnimated)
                    {
                        setCount(count + 1);
                    }
                    setIsAnimated(false);

                    console.log("onAnimationComplete", {
                        count, isAnimated
                    });

                }}
            >
            </motion.img>
            <div>
                <button onClick={() =>
                {
                    setIsAnimated(true);
                }}>Up</button>

            </div>
            <div>
                <select onChange={(e) => setSpeed(parseFloat(e.target.value))}>
                    <option value={0.7}>slow</option>
                    <option value={0.5}>normal</option>
                    <option value={0.3}>fast</option>
                </select>
            </div>

        </>
    );
}