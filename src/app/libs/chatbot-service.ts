import { generateMessageId } from "@/utils/generate-ids";
import { ChatMessage } from "@/interfaces/chat-message";

export const sendMessage = async (
  message: string,
  history: ChatMessage[] = []
): Promise<ChatMessage> => {
  try {
    const response = await fetch("https://personal-chatbot-9hav.onrender.com/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        history: history.map((msg) => ({ role: msg.role, content: msg.content })),
      }),
    });

    console.log("Response from chatbot:", response);

    if (!response.ok) {
      throw new Error("Error en la respuesta del chatbot");
    }

    const data = await response.json();

    return {
      content: data.response,
      id: generateMessageId(),
      role: "assistant",
    };
  } catch (error) {
    throw new Error(`No se pudo conectar con el chatbot: ${error}`);
  }
};
