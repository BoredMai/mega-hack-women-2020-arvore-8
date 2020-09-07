export interface Page {
  content: string[];
  background?: string;
  choice?: UserChoice;
  foreground?: string;
  next?: Page[];
  prompt?: UserPrompt;
}

export interface StoredPrompts {
  [key: string]: string;
}

export interface UserChoice {
  icon: string;
  label: string;
  url?: string;
  disabled?: boolean;
}

export interface UserPrompt {
  key: string;
  type: string;
  placeholder?: string;
}
