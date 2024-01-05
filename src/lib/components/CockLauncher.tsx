import { motion } from "framer-motion";
import { useState } from "react";
import { PENIS_SVG } from "../consts/assets";

export default function CockLauncher()
{
    const [isAnimated, setIsAnimated] = useState(false);
    const [count, setCount] = useState(0);
    const [speed, setSpeed] = useState(0.7);
    return (
        <div className="flex flex-col gap-10 items-center">
            <div>
                <p>Count: {count}</p>
            </div>
            <input type="text" placeholder="လီးနဲ့ထိုးခံရမယ့်ကောင်" className="w-full max-w-xs rounded-full input input-bordered" />
            <motion.img
                src={PENIS_SVG}
                className="mx-auto"
                alt="Vite logo"
                style={{ height: 200, rotate: -40 }}
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
                }}
                className="btn btn-primary"
                >Up</button>

            </div>
            <div>
                <select onChange={(e) => setSpeed(parseFloat(e.target.value))}>
                    <option value={0.7}>slow</option>
                    <option value={0.5}>normal</option>
                    <option value={0.3}>fast</option>
                </select>
            </div>

        </div>
    );
}