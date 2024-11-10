// chatService.ts
import openaiApi from "./openAIApi";
import { ChatGPTResponse } from "./ChatGPTContracts";

export const fetchChatResponse = async (
  prompt: string
): Promise<ChatGPTResponse> => {
  const response = await openaiApi.post<ChatGPTResponse>("/chat/completions", {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return response.data;
};
