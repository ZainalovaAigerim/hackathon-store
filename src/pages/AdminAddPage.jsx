import React from "react";
import {
  Container,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { AdminContext } from "../contexts/AdminProvider";

const AdminAddPage = () => {
  const [name, setName] = React.useState("");
  const [articul, setArticul] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [weigth, setWeigth] = React.useState("");
  const [photo, setPhoto] = React.useState("");

  const handleSubmit = () => {
    const newProduct = {
      name: name.trim(),
      articul: articul.trim(),
      price,
      weigth: weigth.trim(),
      photo: photo.trim(),
    };
    for (let i in newProduct) {
      if (!newProduct[i]) {
        alert("Заполните поля");
        return;
      }
    }
  };

  return (
    <div className="admin-add-page">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Название"
          variant="standard"
        />
        <TextField
          value={articul}
          onChange={(e) => setArticul(e.target.value)}
          label="Артикул"
          variant="standard"
        />
        <TextField
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
          label="Цена"
          variant="standard"
          type="number"
        />
        <TextField
          value={weigth}
          onChange={(e) => setWeigth(e.target.value)}
          label="масса"
          variant="standard"
        />
        <TextField
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          label="Картинка"
          variant="standard"
        />
        <FormControl variant="standard"></FormControl>
        <Button variant="outlined" type="submit">
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default AdminAddPage;
