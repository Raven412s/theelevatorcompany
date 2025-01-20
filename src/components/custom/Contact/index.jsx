"use client"
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '@/components/common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '@/components/common/Magnetic';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={`${styles.title} `}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                            fill={true}
                            alt={"image"}
                            src={`/images/the-elevator-company.svg`}
                            />
                        </div>
                        <h2>The Future of</h2>
                    <h2>Vertical Mobility</h2>
                    </span>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#fefdb9"} className={`${styles.button} md:!w-[8rem] md:!h-[8rem]`}>
                            <p>Get Quotation</p>
                        </Rounded>
                    </motion.div>
                </div>
                <div className={styles.nav}>
    <Rounded>
        <p>info@theelevatorcompany.com</p>
    </Rounded>
    <Rounded>
        <p>+912323232323</p>
    </Rounded>
</div>
<div className={`${styles.info} flex flex-col gap-8 md:flex-row`}>
    <div className="w-full flex flex-col md:gap-4">
        <span>
            <h3>Version</h3>
            <p>2025 © Edition</p>
        </span>
        <span>
            <h3>Time</h3>
            <p>11:49 PM GMT+5</p>
        </span>
    </div>
    <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <span>
            <h3>Socials</h3>
        </span>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Magnetic>
                <p>Email</p>
            </Magnetic>
            <Magnetic>
                <p>Instagram</p>
            </Magnetic>
            <Magnetic>
                <p>WhatsApp</p>
            </Magnetic>
            <Magnetic>
                <p>LinkedIn</p>
            </Magnetic>
        </div>
    </div>
</div>
            </div>
        </motion.div>
    )
}
