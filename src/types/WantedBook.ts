export default interface WantedBook {
  title: string;
  author: string;
  cover?: string;
  numPages?: number;
  genre?: string;
  favourite?: 1 | 2 | 3 | 4 | 5;
  code?: string;
  editor?: string;
  type?: "ebook" | "cartaceo" | "audiobook";
  price?: number;
}
