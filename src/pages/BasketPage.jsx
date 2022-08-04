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

function BasketPage() {
  const { basketProducts, getProductsFromBasket } =
    React.useContext(HomeContext);
  console.log(basketProducts);
  React.useEffect(() => {
    getProductsFromBasket();
  }, []);

  return (
    <div>
      <Container>
        <h2>Корзина</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Фото</TableCell>
              <TableCell>Цена</TableCell>
              <TableCell>Кол.во</TableCell>
              <TableCell>Сумма</TableCell>
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
