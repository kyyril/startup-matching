'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircleIcon, Search, SendIcon } from 'lucide-react';
import { mockConversations, mockMessages } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeConversation, setActiveConversation] = useState(mockConversations[0].id);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const filteredConversations = mockConversations.filter(
    conversation => conversation.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentMessages = messages.filter(
    message => message.conversationId === activeConversation
  );

  const currentConversation = mockConversations.find(
    conversation => conversation.id === activeConversation
  );

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const newMsg = {
      id: `msg-${Date.now()}`,
      conversationId: activeConversation,
      senderId: 'current-user',
      text: newMessage,
      timestamp: new Date().toISOString(),
      read: true,
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Messages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        {/* Conversations List */}
        <Card className="md:col-span-1 h-full flex flex-col retro-border">
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search conversations..."
                className="pl-8 retro-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="flex-1 p-2">
            {filteredConversations.map((conversation) => (
              <div key={conversation.id}>
                <div
                  className={cn(
                    "flex items-center space-x-4 rounded-md p-2 cursor-pointer transition-colors",
                    activeConversation === conversation.id
                      ? "bg-accent"
                      : "hover:bg-accent/50"
                  )}
                  onClick={() => setActiveConversation(conversation.id)}
                >
                  <Avatar>
                    <AvatarImage src={conversation.avatar} alt={conversation.name} />
                    <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium leading-none">{conversation.name}</p>
                      <p className="text-xs text-muted-foreground">{conversation.lastMessageTime}</p>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unreadCount > 0 && (
                    <Badge variant="default" className="ml-auto flex h-6 w-6 items-center justify-center rounded-full p-0">
                      {conversation.unreadCount}
                    </Badge>
                  )}
                </div>
                <Separator className="my-1" />
              </div>
            ))}
          </ScrollArea>
        </Card>
        
        {/* Messages Content */}
        <Card className="md:col-span-2 lg:col-span-3 h-full flex flex-col retro-border">
          {activeConversation ? (
            <>
              {/* Conversation Header */}
              <div className="flex items-center p-4 border-b">
                <Avatar>
                  <AvatarImage src={currentConversation?.avatar} alt={currentConversation?.name} />
                  <AvatarFallback>{currentConversation?.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="text-sm font-medium">{currentConversation?.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {currentConversation?.isOnline ? 'Online' : 'Last seen recently'}
                  </p>
                </div>
                <div className="ml-auto">
                  <Button variant="ghost" size="icon">
                    <MessageCircleIcon className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {currentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex",
                        message.senderId === 'current-user' ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] rounded-lg px-4 py-2",
                          message.senderId === 'current-user'
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground border-2 border-black shadow-[2px_2px_0_0_#1a1a1a]"
                        )}
                      >
                        <p>{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {new Date(message.timestamp).toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                    className="retro-input"
                  />
                  <Button onClick={handleSendMessage} className="retro-button">
                    <SendIcon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <MessageCircleIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-semibold">No conversation selected</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Choose a conversation from the list to start messaging.
                </p>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}