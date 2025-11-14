import { promptTemplate } from "./prompt";


export function generatePrompt(data: Record<string, string>): string {
  let prompt = promptTemplate;

  for (const [key, value] of Object.entries(data)) {
    const regex = new RegExp(`{{${key}}}`, "g");
    prompt = prompt.replaceAll(regex, value || "");
  }
  return prompt;
}
