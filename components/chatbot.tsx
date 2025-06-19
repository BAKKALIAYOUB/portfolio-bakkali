"use client";

import {useState, useRef, useEffect} from 'react';
import {MessageCircle, Send, X, Minimize2} from 'lucide-react';
import Groq from "groq-sdk";
import {systemPrompt} from "@/components/ayoubBakkaliPrompt";
import ReactMarkdown from 'react-markdown';


// Define the message interface
interface Message {
    role: 'system' | 'user' | 'assistant';
    content: string;
}

// Instantiate Groq SDK
const groq = new Groq({
    apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
});


// Define the system prompt


export default function GroqChatbot(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMinimized, setIsMinimized] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
        {role: 'assistant', content: 'Hello! How can I help you today?'}
    ]);
    const [input, setInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getGroqChatCompletion = async (userMessages: Message[]) => {
        const fullMessages = [systemPrompt, ...userMessages];

        return groq.chat.completions.create({
            messages: fullMessages,
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
        });
    };

    const sendMessage = async (): Promise<void> => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {role: 'user', content: input};
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput('');
        setIsLoading(true);

        try {
            const chatCompletion = await getGroqChatCompletion(updatedMessages);
            const assistantMessage = chatCompletion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.";

            setMessages(prev => [...prev, {role: 'assistant', content: assistantMessage}]);
        } catch (error) {
            console.error('Groq API Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value);
    };

    const toggleOpen = (): void => {
        setIsOpen(true);
    };

    const toggleClose = (): void => {
        setIsOpen(false);
    };

    const toggleMinimize = (): void => {
        setIsMinimized(!isMinimized);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Button */}
            {!isOpen && (
                <button
                    onClick={toggleOpen}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110
               dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white dark:shadow-gray-900"
                    aria-label="Open chat"
                >
                    <MessageCircle size={24}/>
                </button>
            )}


            {/* Chat Window */}
            {isOpen && (
                <div className={`bg-white rounded-lg shadow-2xl border transition-all duration-300 ${
                    isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'
                }`}>
                    {/* Header */}
                    <div
                        className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center dark:bg-gray-800 dark:text-white">
                        <h3 className="font-semibold">AI Assistant</h3>
                        <div className="flex gap-2">
                            <button
                                onClick={toggleMinimize}
                                className="hover:bg-blue-700 dark:hover:bg-gray-700 p-1 rounded"
                                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                            >
                                <Minimize2 size={16}/>
                            </button>
                            <button
                                onClick={toggleClose}
                                className="hover:bg-blue-700 dark:hover:bg-red-700 p-1 rounded"
                                aria-label="Close chat"
                            >
                                <X size={16}/>
                            </button>
                        </div>
                    </div>


                    {!isMinimized && (
                        <>
                            {/* Messages */}
                            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                                {messages.map((message: Message, index: number) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                                                message.role === 'user'
                                                    ? 'bg-blue-600 text-white'
                                                    : 'bg-white text-gray-800 border'
                                            }`}
                                        >
                                            <ReactMarkdown>{message.content}</ReactMarkdown>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="bg-white text-gray-800 border px-4 py-2 rounded-lg">
                                            <div className="flex space-x-1">
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                     style={{animationDelay: '0.1s'}}></div>
                                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                                     style={{animationDelay: '0.2s'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef}/>
                            </div>

                            {/* Input */}
                            <div className="p-4 border-t bg-white rounded-b-lg">
                                <div className="flex space-x-2">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={handleInputChange}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        disabled={isLoading}
                                        aria-label="Type your message"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={isLoading || !input.trim()}
                                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
                                        aria-label="Send message"
                                    >
                                        <Send size={20}/>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
