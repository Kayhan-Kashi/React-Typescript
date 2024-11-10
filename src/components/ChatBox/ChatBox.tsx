import { useEffect, useState } from "react";
import { fetchChatResponse } from "./chatService";
import { useForm } from "react-hook-form";

interface PromptData {
  prompt: string;
}

const ChatBox = () => {
  const { register, watch } = useForm<PromptData>();
  const [chatResponse, setChatResponse] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string | null>(null);
  useEffect(() => {
    const getChatResponse = async () => {
      try {
        if (!prompt) return;

        const response = await fetchChatResponse(prompt);
        if (response) {
          setChatResponse(response.choices[0].message.content);
        }
      } catch (error) {
        console.error("Error in fetching chat response:", error);
      }
    };

    getChatResponse();
  }, [prompt]);

  return (
    <div className="p-3 border">
      <h1>ChatBOT</h1>
      <h6 className="pl-md-4 pb-3 border-bottom">based on ChatGPT</h6>
      <div>
        <label htmlFor="prompt" className="form-label">
          Enter prompt :
        </label>
        <input
          {...register("prompt")}
          id="prompt"
          name="prompt"
          type="text"
          className="form-control"
        />
      </div>
      <button
        className="btn btn-primary m-3"
        onClick={() => setPrompt(watch("prompt") || "")}
      >
        Send
      </button>
      <div className="mb-3 pt-2 border-top">
        <label htmlFor="">Answer :</label>
      </div>
      {chatResponse && <p>{chatResponse}</p>}
    </div>
  );
};

export default ChatBox;
