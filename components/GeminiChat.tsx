import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { generateChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '안녕하세요! 저는 이 포트폴리오의 AI 어시스턴트입니다. 지원자의 경험이나 기술 스택에 대해 궁금한 점을 물어보세요.' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userText = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);
    try {
      const responseText = await generateChatResponse(userText);
      setMessages((prev) => [...prev, { role: 'model', text: responseText }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'model', text: '오류가 발생했습니다.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            marginBottom: 12,
            width: 360,
            height: 500,
            background: 'var(--ln-surface)',
            border: '1px solid var(--ln-border-md)',
            borderRadius: 'var(--ln-radius-xl)',
            boxShadow: '0 24px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'ln-fade-up 0.2s cubic-bezier(0.25,0.46,0.45,0.94) both',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'var(--ln-bg)',
              padding: '14px 16px',
              borderBottom: '1px solid var(--ln-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: 'var(--ln-accent-dim)',
                  border: '1px solid rgba(94,106,210,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Bot size={17} style={{ color: 'var(--ln-accent)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 600, color: 'var(--ln-text)' }}>AI Recruiter Assistant</h3>
                <p style={{ fontSize: 11, color: 'var(--ln-muted)' }}>Powered by Gemini 2.5</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="채팅 닫기"
              style={{
                color: 'var(--ln-muted)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                borderRadius: 6,
                transition: 'color 150ms',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ln-text)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--ln-muted)')}
            >
              <X size={17} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              background: 'var(--ln-bg)',
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '12px 12px 4px 12px' : '12px 12px 12px 4px',
                    fontSize: 13,
                    lineHeight: 1.6,
                    ...(msg.role === 'user'
                      ? { background: 'var(--ln-accent)', color: '#fff', border: 'none' }
                      : {
                          background: 'var(--ln-surface)',
                          color: 'var(--ln-text)',
                          border: '1px solid var(--ln-border)',
                        }),
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '10px 14px',
                    background: 'var(--ln-surface)',
                    border: '1px solid var(--ln-border)',
                    borderRadius: '12px 12px 12px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Loader2
                    size={14}
                    style={{ color: 'var(--ln-accent)', animation: 'spin 1s linear infinite' }}
                  />
                  <span style={{ fontSize: 12, color: 'var(--ln-muted)' }}>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '12px',
              background: 'var(--ln-surface)',
              borderTop: '1px solid var(--ln-border)',
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              style={{ display: 'flex', gap: 8 }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my experience..."
                style={{
                  flex: 1,
                  background: 'var(--ln-bg)',
                  border: '1px solid var(--ln-border)',
                  borderRadius: 8,
                  padding: '8px 12px',
                  fontSize: 13,
                  color: 'var(--ln-text)',
                  outline: 'none',
                  transition: 'border-color 150ms',
                }}
                onFocus={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'var(--ln-accent)')
                }
                onBlur={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor = 'var(--ln-border)')
                }
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: 'var(--ln-accent)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  opacity: isLoading || !input.trim() ? 0.4 : 1,
                  transition: 'opacity 150ms',
                  flexShrink: 0,
                }}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? '채팅 닫기' : '채팅 열기'}
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: isOpen ? 'var(--ln-surface2)' : 'var(--ln-accent)',
          border: '1px solid var(--ln-border-md)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          transition: 'all 150ms cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = 'translateY(-2px)';
          el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.5)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.4)';
        }}
      >
        {isOpen ? <X size={20} /> : <MessageSquare size={20} />}
      </button>
    </div>
  );
};

export default GeminiChat;
