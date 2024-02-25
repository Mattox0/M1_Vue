export interface Emoji {
  name: string;
  display: boolean;
}

export interface EmojiUpdated extends Emoji {
  sheet_x: number;
  sheet_y: number;
}