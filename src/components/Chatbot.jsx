import { useState, useEffect, useRef, } from 'react';
import axios from 'axios';
import { AnimatePresence, motion } from 'framer-motion';
import useLocalStorage from 'use-local-storage';

export default function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const chatRef = useRef(null);
    const [isDarkTheme] = useLocalStorage("isDarkTheme", false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setInput('');
        setMessages((prev) => [...prev, userMessage]);
        setLoading(true);

        try {
            const res = await axios.post('https://chatbot-476r.onrender.com/api/chat', {
                message: input,
            });

            const assistantMessage = {
                role: 'assistant',
                content: res.data.reply || 'No reply from Gemini.',
            };

            setMessages((prev) => [...prev, assistantMessage]);
            setInput('');
            
        } catch (err) {
            console.error('Frontend error:', err);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Gemini failed to reply.' },
            ]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        if (open && messages.length === 0) {
            setMessages((prev) => {
                if (prev.length === 0) {
                    return [{
                        role: 'assistant',
                        content: "Hi there! Welcome to Sarah's portfolio. How can I help you learn more about her work and experience?",
                    }];
                }
                return prev;
            });
        }
    }, [open]);

    return (
        <div className="fixed bottom-4 right-4 z-20 pointer-events-none rounded">
            <div className="pointer-events-auto flex flex-col items-end gap-2">
                {/* Button */}
                {!open && (
                    <div className="absolute bottom-0 right-0">
                        <button onClick={() => setOpen(true)} className="bg-indigo-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg hover:bg-indigo-600 cursor-pointer">
                            💬
                        </button>
                    </div>
                )}
                {/* Chat Window */}
                <AnimatePresence>
                    {open && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.25 }} className={`w-80 h-96 rounded-xl shadow-lg flex flex-col ${isDarkTheme === true ? "chatbot-dark" : "chatbot-light"}`}>
                            {/* Header */}
                            <div className={`flex justify-between items-center p-2 rounded-t-xl ${isDarkTheme ? "chatbot-header-dark" : "chatbot-header-light"}`}>
                                <h3 className="text-sm font-semibold px-2">Chat with SarahBot</h3>
                                <button onClick={() => setOpen(false)} className={`text-lg font-bold cursor-pointer rounded-full px-2 ${isDarkTheme ? "chatbot-icon-dark" : "chatbot-icon-light"}`}>
                                    ✕
                                </button>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto p-3 space-y-2 flex flex-col">
                                {messages.map((msg, i) => (
                                    <div key={i} className={`text-sm p-2 rounded-md w-fit whitespace-pre-wrap break-words ${ msg.role === 'user' ? isDarkTheme ? 'chatbot-message-user-dark self-end text-left' : 'chatbot-message-user-light self-end text-left' : isDarkTheme ? 'chatbot-message-bot-dark self-start text-left' : 'chatbot-message-bot-light self-start text-left' }`}>
                                        {msg.content}
                                    </div>
                                ))}
                                {loading && (
                                    <div className={`text-sm p-2 rounded-md max-w-[70%] w-fit self-start text-left animate-pulse ${isDarkTheme ? 'chatbot-message-user-dark' : 'chatbot-message-user-light'}`}>
                                        Typing...
                                    </div>
                                )}
                            </div>

                            {/* Prompts */}
                            <div className={`w-full overflow-x-auto px-2 py-1 flex gap-2 border-t ${isDarkTheme ? 'border-gray-700 bg-neutral-900' : 'border-gray-300 bg-gray-300'}`}>
                                {[
                                    'Tell me about Sarah',
                                    'What projects has she done?',
                                    'What is Management Engineering?',
                                ].map((prompt, index) => (
                                    <button key={index} onClick={() => {
                                        setInput('');
                                        setMessages((prev) => [...prev, { role: 'user', content: prompt }]);
                                        setLoading(true);
                                        axios.post('http://127.0.0.1:5001/api/chat', { message: prompt })
                                        .then((res) => {
                                            const assistantMessage = {
                                                role: 'assistant',
                                                content: res.data.reply || 'No reply from Gemini.',
                                            };
                                            setMessages((prev) => [...prev, assistantMessage]);
                                        }).catch((err) => {
                                            console.error('Prompt error:', err);
                                            setMessages((prev) => [
                                                ...prev,
                                                { role: 'assistant', content: 'Gemini failed to reply.' },
                                            ]);
                                        }).finally(() => setLoading(false));
                                    }} className={`${isDarkTheme ? 'chatbot-prompt-dark' : 'chatbot-prompt-light'} whitespace-nowrap text-sm px-3 py-1 rounded-full transition cursor-pointer`}>
                                    {prompt}
                                </button>
                            ))}
                            </div>

                            {/* Input */}
                            <div className="border-t dark:border-gray-700 flex p-2">
                                <input type="text" className={`flex-1 rounded-l-md px-2 py-1 text-sm focus:outline-none border ${isDarkTheme ? "chatbot-input-dark" : "chatbot-input-light"}`} value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Ask me anything..."/>
                                <button onClick={sendMessage} className="bg-indigo-400 hover:bg-indigo-600 text-white px-3 rounded-r-md text-sm cursor-pointer">
                                    Send
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
