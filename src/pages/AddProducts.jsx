import React from "react";
import { AdminContext } from "../contexts/AdminProvider";
import { Container, TextField, Button, Stack } from "@mui/material";

function AddProducts() {
  const { addNewProduct } = React.useContext(AdminContext);

  const [name, setName] = React.useState("");
  const [barcode, setBarcode] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [photo, setPhoto] = React.useState("");

  const handleSubmit = () => {
    const newProduct = {
      name: name.trim(),
      barcode: barcode.trim(),
      weight: weight.trim(),
      price,
      photo: photo.trim(),
    };

    for (let i in newProduct) {
      if (!newProduct[i]) {
        alert("Заполните все поля!");
        return;
      }
    }
    addNewProduct(newProduct);
    setName("");
    setBarcode("");
    setWeight("");
    setPrice("");
    setPhoto("");
  };

  return (
    <div className="add-new-product">
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
            label="Масса"
            variant="standard"
          />
          <TextField
            value={price}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            label="Стоимость"
            variant="standard"
            type="number"
          />
          <TextField
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            label="Фото"
            variant="standard"
          />

          <Stack direction="row" spacing={2}>
            <Button variant="contained" type="submit">
              Добавить товар
            </Button>
          </Stack>
        </form>
      </Container>
    </div>
  );
}

export default AddProducts;
