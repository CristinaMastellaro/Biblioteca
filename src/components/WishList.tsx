import { Button } from "react-bootstrap";
import MenuHomepage from "./MenuHomepage";
import { useEffect, useState } from "react";
import AddToWishList from "./AddToWishList";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../redux/store/indexStore";
import ShowBook from "./ShowBook";
import { allBooksWishListAction } from "../redux/actions";

const WishList = () => {
  const [add, setAdd] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allBooksWishListAction());
    console.log("totalWishedBooks", totalWishedBooks);
  }, []);

  const totalWishedBooks = useSelector((state: IRootState) => state.wishList);

  return (
    <>
      <MenuHomepage />
      <section className="my-3 book-sec pb-1 mx-auto" style={{ width: "90%" }}>
        <h1 className="text-center text-light p-3">Lista desideri</h1>
        <div className="text-center my-3">
          <Button variant="outline-success" onClick={() => setAdd(!add)}>
            Aggiungi libro
          </Button>
          {add && <AddToWishList setAdd={setAdd} />}
          {totalWishedBooks.length > 0 ? (
            <>
              {totalWishedBooks.map((book) => {
                return <ShowBook book={book} wishList={true} />;
              })}
            </>
          ) : (
            <p>
              È il momento di fare un salto in libreria e farti incantare da un
              libro... O anche di più
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default WishList;
