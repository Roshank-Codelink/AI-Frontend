

export default function AiChatbox() {
    return (
        <div className="w-full h-full bg-white rounded-lg shadow-lg border border-orange-200 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-orange-200 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <h3 className="font-semibold text-sm">AI Assistant</h3>
                </div>
                <button className="text-white hover:bg-white/20 p-1 rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-3 flex flex-col justify-center">
                {/* Welcome Message */}
                <div className="text-center space-y-2">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
                        <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-gray-900">How can I help?</h3>
                        <p className="text-xs text-gray-600 mt-1">
                            I&apos;m here to assist you with team management tasks.
                        </p>
                    </div>
                    
                    {/* Quick Suggestions */}
                    <div className="space-y-1 mt-3">
                        <button className="w-full p-2 rounded-lg text-left bg-orange-50 border border-orange-200 hover:border-orange-300 transition-colors">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-900">Team Management</p>
                                </div>
                            </div>
                        </button>
                        
                        <button className="w-full p-2 rounded-lg text-left bg-orange-50 border border-orange-200 hover:border-orange-300 transition-colors">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs font-medium text-gray-900">General Questions</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Input Area - Fixed at Bottom */}
            <div className="p-4 border-t border-orange-200 flex-shrink-0">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-3 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
