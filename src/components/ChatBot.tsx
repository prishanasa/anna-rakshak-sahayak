import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: 'नमस्ते! मैं आपका कृषि सहायक हूं। आप मुझसे खेती से जुड़ी किसी भी समस्या के बारे में पूछ सकते हैं। आज आपकी कैसे मदद कर सकूं?',
      timestamp: new Date()
    }
  ])
  
  const [newMessage, setNewMessage] = useState('')

  const quickQuestions = [
    "इस सप्ताह क्या करना चाहिए?",
    "मिट्टी की जांच कैसे करें?", 
    "कीटों से कैसे बचें?",
    "सिंचाई कब करें?"
  ]

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: newMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: `आपके प्रश्न "${newMessage}" के लिए: मैं आपकी फसल और मौसम के डेटा के आधार पर सुझाव दे रहा हूं। इस समय आपको मिट्टी की नमी जांचनी चाहिए और यदि आवश्यक हो तो सिंचाई करनी चाहिए। क्या आपको विस्तृत जानकारी चाहिए?`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 1000)

    setNewMessage('')
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="h-[600px] flex flex-col">
        <div className="flex items-center gap-3 p-4 border-b">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold">सहायक - AI कृषि विशेषज्ञ</h3>
            <p className="text-sm text-muted-foreground">24/7 उपलब्ध</p>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'user' 
                    ? 'bg-secondary' 
                    : 'bg-primary'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-secondary-foreground" />
                  ) : (
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  )}
                </div>
                
                <div className={`flex-1 max-w-[80%] ${message.type === 'user' ? 'text-right' : ''}`}>
                  <div className={`p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {message.timestamp.toLocaleTimeString('hi-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Quick Questions */}
        <div className="p-4 border-t">
          <p className="text-sm text-muted-foreground mb-2">तुरंत पूछें:</p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-8 justify-start"
                onClick={() => setNewMessage(question)}
              >
                {question}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="अपना प्रश्न यहां लिखें..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} variant="agricultural">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}