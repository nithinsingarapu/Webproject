import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Upload, Stethoscope } from "lucide-react"

export default function MedicalChatbot() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() || image) {
      const newMessage = {
        id: Date.now(),
        text: input.trim(),
        image: image,
        sender: "user",
      }
      setMessages([...messages, newMessage])
      setInput("")
      setImage(null)

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "Thank you for your message. A healthcare professional will review it shortly.",
          sender: "bot",
        }
        setMessages((prevMessages) => [...prevMessages, botResponse])
      }, 1000)
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="bg-blue-500 text-white">
          <CardTitle className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6" />
            Medical Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
              >
                <div
                  className={`rounded-lg p-2 max-w-[80%] ${
                    message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text && <p>{message.text}</p>}
                  {message.image && (
                    <img
                      src={message.image || "/placeholder.svg"}
                      alt="Uploaded"
                      className="mt-2 rounded-md max-w-full h-auto"
                    />
                  )}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow"
            />
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => document.getElementById("image-upload").click()}
            >
              <Upload className="w-4 h-4" />
            </Button>
            <Button type="submit">
              <Send className="w-4 h-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}