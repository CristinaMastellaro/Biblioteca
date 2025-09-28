import { Button, Form, Row, Col } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiSolidCameraPlus } from "react-icons/bi";
import WishedBook from "../types/WishedBook";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToWishListAction } from "../redux/actions";

const book = {
  cover: "",
  title: "",
  author: "",
  editor: "",
  priority: "",
  notes: "",
};

interface AddToWishListProps {
  setAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddToWishList = ({ setAdd }: AddToWishListProps) => {
  const [cover, setCover] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WishedBook>({ defaultValues: book });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<WishedBook> = (data) => {
    data.cover = cover;
    dispatch(addToWishListAction(data));
    setAdd(false);
    alert("Libro aggiunto alla wishlist!");
  };

  return (
    <Form
      className="m-3 border p-2 d-flex flex-column align-items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Form.Group
        as={Row}
        className="chooseCover mb-3 position-relative text-center py-3 w-50 mt-2 ms-1"
      >
        {cover ? (
          <>
            <img src={cover} alt="Cover del libro" />
            <p className="m-0 small mt-2">Clicca per modificare</p>
          </>
        ) : (
          <>
            <Form.Label column sm={2}>
              <p className="m-0 small">Immagine di copertina</p>
            </Form.Label>

            <div>
              <BiSolidCameraPlus className="fs-2" />
            </div>
          </>
        )}
        <Col sm={10}>
          <Form.Control
            type="file"
            {...register("cover", { required: false })}
            accept="image/*;capture=camera"
            onChange={(e) => {
              const urlImage = URL.createObjectURL(
                (e.target as HTMLInputElement).files![0]
              );
              setCover(urlImage);
              //   console.log("cover", cover);
            }}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          {"Titolo (*)"}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && <span>É necessario completare questo campo</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          {"Autore (*)"}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            {...register("author", { required: true })}
          />
          {errors.title && <span>É necessario completare questo campo</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          {"Editore"}
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" {...register("editor")} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label as="legend" column sm={2}>
          Quanto desideri avere questo libro nella tua biblioteca? (*)
        </Form.Label>
        <Col sm={10}>
          <div className="d-flex flex-column align-items-center gap-2 my-2 px-4">
            <div className="d-flex">
              <input
                type="radio"
                id="important"
                value="important"
                className="me-1"
                {...register("priority", { required: true })}
              />
              <Form.Label column sm={2} className="p-0 ms-2 text-start">
                Davvero tanto, sarà il mio prossimo acquisto!
              </Form.Label>
            </div>
            <div className="d-flex">
              <input
                type="radio"
                id="notImportant"
                value="notImportant"
                defaultChecked
                className="me-1"
                {...register("priority", { required: true })}
              />
              <Form.Label column sm={2} className="p-0 ms-2 text-start">
                Sembra carino, intanto lo salvo e poi vediamo
              </Form.Label>
            </div>
          </div>
          {errors.priority && <span>É necessario completare questo campo</span>}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={2}>
          {"Note"}
        </Form.Label>
        <Col sm={10}>
          <Form.Control as="textarea" {...register("notes")} />
        </Col>
      </Form.Group>
      <Button variant="success" type="submit">
        Salva
      </Button>
    </Form>
  );
};

export default AddToWishList;
