import MenuHomepage from "./MenuHomepage";
import "../css/favouriteBooks.css";
import { useSelector } from "react-redux";
import { IRootState } from "../redux/store/indexStore";
import ShowBook from "./ShowBook";

const FavouriteBooks = () => {
  const favourites = useSelector((state: IRootState) =>
    state.allBooks.filter((book) => book.favourite)
  );

  return (
    <>
      <MenuHomepage />
      <div className="wallpaper"></div>
      <section className="mt-1">
        <h1 className="text-center p-3 favourite-sec m-3">
          I tuoi libri preferiti
        </h1>
        {favourites
          ? favourites.map((book) => (
              <ShowBook book={book} key={book.code} wishList={false} />
            ))
          : "Non hai ancora selezionato i tuoi libri preferiti"}
      </section>
    </>
  );
};

export default FavouriteBooks;
