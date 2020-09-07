export interface Page {
  content: string[];
  background?: string;
  choice?: ShelfItem;
  foreground?: string;
  next?: Page[];
  prompt?: UserPrompt;
}

export interface StoredPrompts {
  [key: string]: string;
}

export interface ShelfItem {
  icon: string;
  label: string;
  url?: string;
  disabled?: boolean;
}

export interface User {
  first: string;
  last: string;
}

export interface UserPrompt {
  key: string;
  type: string;
  placeholder?: string;
}
