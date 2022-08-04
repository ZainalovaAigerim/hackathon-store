import React from "react";
import { AdminContext } from "../contexts/AdminProvider";
import { useParams, useNavigate } from "react-router-dom";
import { Container, TextField, Button } from "@mui/material";

function EditProductsPage() {
  const { savedEditedProduct, getEditProduct, toSaveEditedProduct } =
    React.useContext(AdminContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [barcode, setBarcode] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [photo, setPhoto] = React.useState("");

  const handleSubmit = () => {
    const editedProduct = {
      name,
      barcode,
      weight,
      price,
      photo,
      id,
    };
    console.log(editedProduct);
    for (let i in editedProduct) {
      if (typeof editedProduct[i] === "string") {
        if (!editedProduct[i].trim()) {
          alert("Заполните все поля!");
          return;
        }
      }
    }
    toSaveEditedProduct(editedProduct);
    navigate("/admin");
  };

  React.useEffect(() => {
    getEditProduct(id);
  }, []);

  React.useEffect(() => {
    if (savedEditedProduct) {
      setName(savedEditedProduct.name);
      setBarcode(savedEditedProduct.barcode);
      setWeight(savedEditedProduct.weight);
      setPrice(savedEditedProduct.price);
      setPhoto(savedEditedProduct.photo);
    }
  }, [savedEditedProduct]);

  return (
    <div className="edit-products-page">
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Наименование"
            variant="standard"
          />
          <TextField
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            label="Артикул"
            variant="standard"
          />
          <TextField
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            // type="number"
            label="Масса"
            variant="standard"
          />
          <TextField
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            type="number"
            label="Цена"
            variant="standard"
          />
          <TextField
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Картинка"
            variant="standard"
          />

          <Button variant="contained" type="submit">
            Сохранить изменения
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default EditProductsPage;
