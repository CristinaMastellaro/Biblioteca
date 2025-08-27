export default interface Book {
  title: string;
  author: string;
  numPages: number;
  genre: string;
  published: number;
  code: string;
  editor: string;
  type: "ebook" | "cartaceo" | "audiobook";
  hashtag?: string[];
  note?: string;
  thoughts?: string;
  price?: number;
  dateYouBought?: Date;
}
