import WishedBook from "./WishedBook";

export default interface ActionWish {
  type: string;
  payload: WishedBook;
}
