"use client";

import {useState, useRef, useEffect} from 'react';
import {MessageCircle, Send, X, Minimize2} from 'lucide-react';
import Groq from "groq-sdk";
import {systemPrompt} from "@/components/ayoubBakkaliPrompt";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import remarkEmoji from 'remark-emoji';
import remarkSmartypants from 'remark-smartypants';

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

export default function GroqChatbot(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isMinimized, setIsMinimized] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([
        {role: 'assistant', content: 'Hello! How can I help you today?'}
    ]);
    const [input, setInput] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [partialResponse, setPartialResponse] = useState<string>('');

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, partialResponse]);

    const getGroqChatCompletion = async (userMessages: Message[]) => {
        const fullMessages = [systemPrompt, ...userMessages];

        return groq.chat.completions.create({
            messages: fullMessages,
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 1024,
            stream: true,
        });
    };

    const sendMessage = async (): Promise<void> => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {role: 'user', content: input};
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput('');
        setIsLoading(true);
        setPartialResponse('');

        try {
            const chatCompletion = await getGroqChatCompletion(updatedMessages);
            let fullResponse = '';

            for await (const chunk of chatCompletion) {
                const content = chunk.choices[0]?.delta?.content || '';
                fullResponse += content;
                setPartialResponse(fullResponse);
            }

            setMessages(prev => [...prev, {role: 'assistant', content: fullResponse}]);
            setPartialResponse('');
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

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 
                    hover:scale-110 hover:shadow-xl dark:bg-blue-700 dark:hover:bg-blue-600 dark:shadow-lg flex items-center justify-center"
                    aria-label="Open chat"
                >
                    <MessageCircle size={24} className="stroke-current" />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 
                dark:border-gray-700 overflow-hidden transition-all duration-300 flex flex-col ${
                    isMinimized ? 'w-80 h-14' : 'w-96 h-[500px]'
                }`}>
                    {/* Header */}
                    <div
                        className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-gray-700 dark:to-gray-800 
                        text-white p-3 flex justify-between items-center select-none">
                        <div className="flex items-center gap-2">
                            <MessageCircle size={18} className="text-blue-200 dark:text-gray-400" />
                            <h3 className="font-medium text-sm">AI Assistant</h3>
                        </div>
                        <div className="flex gap-1">
                            <button
                                onClick={() => setIsMinimized(!isMinimized)}
                                className="hover:bg-white/10 p-1 rounded transition-colors"
                                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
                            >
                                <Minimize2 size={16} />
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-red-500/80 p-1 rounded transition-colors"
                                aria-label="Close chat"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>

                    {!isMinimized && (
                        <>
                            {/* Messages */}
                            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900 
                            scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                                {messages.map((message: Message, index: number) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} 
                                        animate-in fade-in slide-in-from-bottom-2 duration-300`}
                                    >
                                        <div
                                            className={`max-w-[85%] px-4 py-2.5 rounded-2xl shadow-sm ${
                                                message.role === 'user'
                                                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-tr-none'
                                                    : 'bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-800 border border-gray-200 dark:border-gray-700 rounded-tl-none'
                                            }`}
                                        >
                                            <ReactMarkdown
/*
                                                className="prose dark:prose-invert prose-sm max-w-none prose-p:my-1 prose-pre:my-1"
*/
                                                remarkPlugins={[
                                                    remarkGfm,
                                                    remarkMath,
                                                    remarkEmoji,
                                                    remarkSmartypants
                                                ]}
                                                rehypePlugins={[
                                                    rehypeRaw,
                                                    rehypeKatex,
                                                    rehypeHighlight
                                                ]}
                                            >
                                                {message.content}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                ))}
                                
                                {partialResponse && (
                                    <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-200">
                                        <div className="bg-white dark:bg-gray-800 dark:text-gray-100 text-gray-800 border 
                                        border-gray-200 dark:border-gray-700 px-4 py-2.5 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
                                            <ReactMarkdown
/*
                                                className="prose dark:prose-invert prose-sm max-w-none prose-p:my-1 prose-pre:my-1"
*/
                                                remarkPlugins={[
                                                    remarkGfm,
                                                    remarkMath,
                                                    remarkEmoji,
                                                    remarkSmartypants
                                                ]}
                                                rehypePlugins={[
                                                    rehypeRaw,
                                                    rehypeKatex,
                                                    rehypeHighlight
                                                ]}
                                            >
                                                {partialResponse}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                )}

                                {isLoading && !partialResponse && (
                                    <div className="flex justify-start">
                                        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border 
                                        border-gray-200 dark:border-gray-700 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm">
                                            <div className="flex space-x-1.5">
                                                <div className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce"
                                                     style={{animationDelay: '0.15s'}}></div>
                                                <div className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full animate-bounce"
                                                     style={{animationDelay: '0.3s'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            {/* Input */}
                            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                                <div className="flex space-x-2 items-center">
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={handleInputChange}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        className="flex-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 
                                        dark:text-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 
                                        focus:ring-blue-500 dark:focus:ring-blue-600 transition-all"
                                        disabled={isLoading}
                                        aria-label="Type your message"
                                    />
                                    <button
                                        onClick={sendMessage}
                                        disabled={isLoading || !input.trim()}
                                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 dark:disabled:bg-gray-600 
                                        text-white p-2.5 rounded-full transition-colors flex items-center justify-center
                                        disabled:cursor-not-allowed"
                                        aria-label="Send message"
                                    >
                                        <Send size={18} className="stroke-current" />
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
