'use client'

import { useState, useEffect } from 'react'

export default function IntroLoader({ onComplete }) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [shouldUnmount, setShouldUnmount] = useState(false)

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden'

        // Simulate minimum loading time for the effect
        const timer = setTimeout(() => {
            setIsLoaded(true)
            document.body.style.overflow = 'unset'

            // Notify parent that the animation started
            if (onComplete) onComplete()

            // Wait for the travel animation to finish before unmounting the overlay
            setTimeout(() => {
                window.dispatchEvent(new Event('introAnimationComplete'))
                setShouldUnmount(true)
            }, 1000) // Match this with CSS transition duration
        }, 1500) // Loading time

        return () => {
            clearTimeout(timer)
            document.body.style.overflow = 'unset'
        }
    }, [onComplete])

    if (shouldUnmount) return null

    return (
        <div className={`intro-overlay ${isLoaded ? 'fade-out' : ''}`}>
            <div className={`intro-robot-container ${isLoaded ? 'travel-to-corner' : ''}`}>
                <lottie-player
                    src="/robot.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '100%', height: '100%' }}
                    loop
                    autoplay
                ></lottie-player>
            </div>

            <div className={`intro-text ${isLoaded ? 'fade-out' : ''}`}>
                <h1 className="animated-name intro-name">ANDREI MANUEL</h1>
                <div className="intro-loading-bar">
                    <div className="intro-progress"></div>
                </div>
            </div>
        </div>
    )
}
