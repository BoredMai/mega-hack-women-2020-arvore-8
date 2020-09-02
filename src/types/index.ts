export interface Page {
  content: string;
  choiceText?: string;
  next?: Page[];
}
