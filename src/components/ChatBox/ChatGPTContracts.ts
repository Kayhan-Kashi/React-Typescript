// ChatGPTResponse.ts
export interface ChatGPTMessage {
  role: string;
  content: string;
}

export interface ChatGPTChoice {
  index: number;
  message: ChatGPTMessage;
  finish_reason: string;
}

export interface ChatGPTUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface ChatGPTResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: ChatGPTChoice[];
  usage: ChatGPTUsage;
}
