export default interface Book {
  title: string;
  author: string;
  cover?: string;
  numPages?: number;
  genre: string;
  favourite?: boolean;
  published?: number;
  alreadyRead: boolean;
  code: string;
  editor: string;
  type: "ebook" | "cartaceo" | "audiobook";
  hashtag?: string[];
  note?: string;
  price?: number;
  dateYouBought?: string;
}
