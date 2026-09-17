"use client";

import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

export default function Chat() {
  const [input, setInput] = useState("");
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, stop, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isStreaming = status === "streaming";
  const isSubmitting = status === "submitted";
  const isBusy = isStreaming || isSubmitting;

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior,
    });
  };

  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom("auto");
    }
  }, [messages, status, isAtBottom]);

  const handleScroll = () => {
    const container = scrollRef.current;

    if (!container) return;

    const distanceFromBottom =
      container.scrollHeight -
      container.scrollTop -
      container.clientHeight;

    setIsAtBottom(distanceFromBottom < 80);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = input.trim();

    if (!text || isBusy) {
      return;
    }

    sendMessage({ text });
    setInput("");
    setIsAtBottom(true);
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f7f7]">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#297373]">
            FlyRank AI
          </p>

          <h1 className="mt-1 text-2xl font-bold text-[#0d3b3e] sm:text-3xl">
            Streaming AI Chat
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Ask a question and watch the response stream in real time.
          </p>
        </header>

        <section className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="min-h-[55vh] flex-1 overflow-y-auto p-4 sm:p-6"
          >
            {messages.length === 0 ? (
              <div className="flex min-h-[50vh] items-center justify-center text-center">
                <div className="max-w-md">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8f5f3] text-2xl">
                    AI
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-[#0d3b3e]">
                    Start a conversation
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Send a message to test the streaming AI interface.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-5">
                {messages.map((message) => {
                  const isUser = message.role === "user";

                  return (
                    <div
                      key={message.id}
                      className={`flex ${
                        isUser ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[75%] ${
                          isUser
                            ? "bg-[#0d3b3e] text-white"
                            : "border border-gray-200 bg-[#f8faf9] text-gray-800"
                        }`}
                      >
                        <div
                          className={`mb-1 text-xs font-semibold ${
                            isUser
                              ? "text-[#c9e9e5]"
                              : "text-[#297373]"
                          }`}
                        >
                          {isUser ? "You" : "AI Assistant"}
                        </div>

                        <div className="whitespace-pre-wrap break-words">
                          {message.parts.map((part, index) => {
                            if (part.type !== "text") {
                              return null;
                            }

                            return (
                              <span key={`${message.id}-${index}`}>
                                {part.text}
                              </span>
                            );
                          })}
                        </div>

                        {!isUser &&
                          isStreaming &&
                          message.id ===
                            messages[messages.length - 1]?.id &&
                          message.parts.length === 0 && (
                            <div className="mt-1 flex items-center gap-1">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-[#297373]" />
                              <span className="h-2 w-2 animate-pulse rounded-full bg-[#297373] [animation-delay:150ms]" />
                              <span className="h-2 w-2 animate-pulse rounded-full bg-[#297373] [animation-delay:300ms]" />
                            </div>
                          )}
                      </div>
                    </div>
                  );
                })}

                {isSubmitting && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl border border-gray-200 bg-[#f8faf9] px-4 py-3 text-sm text-gray-500">
                      Thinking...
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {!isAtBottom && messages.length > 0 && (
            <div className="border-t border-gray-100 px-4 py-2">
              <button
                type="button"
                onClick={() => {
                  scrollToBottom();
                  setIsAtBottom(true);
                }}
                className="mx-auto block rounded-full bg-[#0d3b3e] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#297373]"
              >
                ↓ Jump to latest
              </button>
            </div>
          )}

          {error && (
            <div className="mx-4 mb-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Something went wrong while generating the response.
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-200 bg-white p-3 sm:p-4"
          >
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isBusy}
                rows={2}
                placeholder="Type your message..."
                className="min-h-[52px] flex-1 resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#297373] focus:ring-2 focus:ring-[#297373]/20 disabled:bg-gray-100"
              />

              {isBusy ? (
                <button
                  type="button"
                  onClick={() => stop()}
                  className="rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Stop
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="rounded-xl bg-[#0d3b3e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#297373] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Send
                </button>
              )}
            </div>

            <p className="mt-2 px-1 text-xs text-gray-400">
              Enter to send · Shift + Enter for a new line
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}