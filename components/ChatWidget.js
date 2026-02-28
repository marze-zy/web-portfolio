'use client'

import { useState, useRef, useEffect } from 'react'

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { role: 'model', parts: [{ text: "Hi! I'm Andrei's AI assistant. Ask me anything about his skills, projects, or background!" }] }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [bubbleMessage, setBubbleMessage] = useState('')
    const [isIntroComplete, setIsIntroComplete] = useState(false)

    const messagesEndRef = useRef(null)

    // Array of engaging prompts for the text bubble
    const promptMessages = [
        "Want to know more about Andrei?",
        "Ask me about his 3D printing projects!",
        "Curious about AlphaBot?",
        "I can tell you about his skills!",
        "Need info on SAKAY PH concept?",
        "Hi! Ask me anything!",
        "Let's chat about embedded systems!"
    ]

    useEffect(() => {
        // Set a random message on mount
        const randomMsg = promptMessages[Math.floor(Math.random() * promptMessages.length)]
        setBubbleMessage(randomMsg)

        // Listen for intro animation completion
        const handleIntroComplete = () => {
            setIsIntroComplete(true)
        }

        window.addEventListener('introAnimationComplete', handleIntroComplete)

        // Fallback in case event doesn't fire (e.g., if IntroLoader is already gone or removed)
        const fallbackTimer = setTimeout(() => {
            setIsIntroComplete(true)
        }, 3000)

        return () => {
            window.removeEventListener('introAnimationComplete', handleIntroComplete)
            clearTimeout(fallbackTimer)
        }
    }, [])

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMessage = input.trim()
        setInput('')

        setMessages(prev => [...prev, { role: 'user', parts: [{ text: userMessage }] }])
        setIsLoading(true)

        try {
            // Build history from all previous messages, excluding the first greeting
            const history = messages.slice(1).map(msg => ({
                role: msg.role,
                parts: [{ text: msg.parts[0].text }]
            }))

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage, history }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Request failed')
            }

            setMessages(prev => [...prev, { role: 'model', parts: [{ text: data.text }] }])
        } catch (error) {
            console.error('Chat error:', error)
            setMessages(prev => [...prev, { role: 'model', parts: [{ text: `Sorry, something went wrong. (${error.message})` }] }])
        } finally {
            setIsLoading(false)
        }
    }

    // Generate a new random message when chat is closed
    const handleToggleChat = () => {
        if (isOpen) {
            const randomMsg = promptMessages[Math.floor(Math.random() * promptMessages.length)]
            setBubbleMessage(randomMsg)
        }
        setIsOpen(!isOpen)
    }

    return (
        <div className={`chat-widget-container ${!isIntroComplete ? 'hide-widget' : ''}`}>
            {/* Dynamic Text Bubble - only show when chat is closed */}
            {!isOpen && bubbleMessage && isIntroComplete && (
                <div className="chat-bubble-prompt bounce-animation">
                    {bubbleMessage}
                </div>
            )}

            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h3>AI Assistant</h3>
                        <button onClick={() => setIsOpen(false)} className="close-button" aria-label="Close Chat">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.role === 'user' ? 'user-message' : 'ai-message'}`}>
                                <div className="message-content">
                                    {msg.parts[0].text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message ai-message">
                                <div className="message-content typing-indicator">
                                    <span>.</span><span>.</span><span>.</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSubmit} className="chat-input-form">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask me anything..."
                            disabled={isLoading}
                        />
                        <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send Message">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </form>
                </div>
            )}

            <button
                onClick={handleToggleChat}
                className={`floating-robot-btn ${isOpen ? 'active' : ''}`}
                aria-label="Toggle Chat"
                style={{ opacity: isIntroComplete ? 1 : 0, transition: 'opacity 0.5s ease-in' }}
            >
                <lottie-player
                    src="/robot.json"
                    background="transparent"
                    speed="1"
                    style={{ width: '100%', height: '100%' }}
                    loop
                    autoplay
                ></lottie-player>
            </button>
        </div>
    )
}

