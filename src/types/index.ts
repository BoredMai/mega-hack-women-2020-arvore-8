export interface UserPrompt {
  type: string;
  value: string;
  placeholder?: string;
}

export interface Page {
  content: string;
  choiceText?: string;
  next?: Page[];
  prompt?: UserPrompt;
}
