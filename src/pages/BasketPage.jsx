import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
} from "@mui/material";
import { HomeContext } from "../contexts/HomeProvider";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

function BasketPage() {
<<<<<<< HEAD
  const {
    basketProducts,
    getProductsFromBasket,
    deleteProductFromBasket,
    getProducts,
  } = React.useContext(HomeContext);
  console.log(basketProducts);
=======
  const { basketProducts, getProductsFromBasket } =
    React.useContext(HomeContext);

>>>>>>> 7e09dcc0c7a3bff3d9919a6cbbf0c0fbd29186f7
  React.useEffect(() => {
    getProductsFromBasket();
  }, []);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <h2>Корзина</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Наименование</TableCell>
              <TableCell>Фото</TableCell>
              <TableCell>Стоимость</TableCell>
              <TableCell>Количество</TableCell>
              <TableCell>Сумма</TableCell>
              <TableCell>Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basketProducts.products.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <img width={60} src={item.photo} alt="" />
                </TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.count}</TableCell>

                <TableCell>{item.subPrice}</TableCell>
                <TableCell>
                  <HighlightOffRoundedIcon
                    onClick={() => {
                      deleteProductFromBasket(item.id);
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Итоговая сумма:</TableCell>
              <TableCell colSpan={1}>{basketProducts.totalPrice}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Container>
    </div>
  );
}

export default BasketPage;
