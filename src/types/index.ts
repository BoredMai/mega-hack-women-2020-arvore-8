export interface Book {
  icon: string;
  label: string;
  url: string;
  disabled?: boolean;
}

export interface Page {
  content: string;
  choiceText?: string;
  next?: Page[];
  prompt?: UserPrompt;
}

export interface StoredPrompts {
  [key: string]: string;
}

export interface UserPrompt {
  key: string;
  type: string;
  placeholder?: string;
}
