export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export enum AssistantMode {
  PLANNING_TIP = 'PLANNING_TIP',
  ROMANTIC_QUOTE = 'ROMANTIC_QUOTE',
  VOW_DRAFT = 'VOW_DRAFT'
}

export interface GeminiResponse {
  text: string;
  error?: string;
}
