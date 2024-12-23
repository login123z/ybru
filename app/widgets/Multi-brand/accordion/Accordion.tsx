'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from '../Multi-brand.module.scss'

type AccordionProperties = {
    title: string
    children: React.ReactElement
    isOpen: boolean
    onToggle: () => void
}

export default function Accordion({
    title,
    children,
    isOpen,
    onToggle
}: AccordionProperties) {
    const [height, setHeight] = useState(0)
    const [rotation, setRotation] = useState(0)

    const contentRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0)
        }
    }, [isOpen])

    useEffect(() => {
        setRotation(isOpen ? 45 : 0)
    }, [isOpen])

    return (
        <div className={styles.multi__containerS} onClick={onToggle}>
            <div className={styles.multi__containerS_name}>
                <h3 className={styles.multi__containerS_h2}>{title}</h3>

                <img
                    src='plus.svg'
                    alt='plus'
                    className={styles.multi__containerS_img}
                    style={{ transform: `rotate(${rotation}deg)` }}
                />
            </div>
            <div
                style={{
                    height: height,
                    overflow: 'hidden',
                    transition: 'height 0.3s ease'
                }}
            >
                <div ref={contentRef}>{children}</div>
            </div>
        </div>
    )
}
