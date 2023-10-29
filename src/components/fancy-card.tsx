import { motion } from "framer-motion"
import { useState } from 'react'

interface CardProps {
    from: string,
}
const cardVariants = {
    selected: {
        rotateY: 180,
        scale: 1.1,
        transition: { duration: .35 },
        zIndex: 10,
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px'
    },
    notSelected: (i: number) => ({
        rotateY: i * 15,
        scale: 1 - Math.abs(i * 0.15),
        x: i ? i * 50 : 0,
        opacity: 1 - Math.abs(i * .15),
        zIndex: 10 - Math.abs(i),
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        transition: { duration: .35 }
    })
}

export default function FancyCard(props: CardProps) {
    const [isSelected, setIsSelected] = useState(false);

    const handleMouseUp = () => {
        console.log("Card Tapped!");
        setIsSelected((prevSelected) => !prevSelected);
    }

    return (
        <motion.div
            className="card"
            onMouseUp={() => handleMouseUp()}
            animate={isSelected ? "selected" : "notSelected"}
            variants={cardVariants}
            custom={0}
        >
            Meow <br />
            From: {props.from}
        </motion.div>
    )
}