import React from "react";
import { AdminContext } from "../contexts/AdminProvider";
import { Link } from "react-router-dom";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function AdminPage() {
  const { getProducts, products } = React.useContext(AdminContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-page">
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Наименование</TableCell>
              <TableCell>Артикул</TableCell>
              <TableCell>Масса</TableCell>
              <TableCell>Стоимость</TableCell>
              <TableCell>Фото товара</TableCell>
              <TableCell>Редактировать</TableCell>
              <TableCell>Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => (
              <TableRow key={item.id}></TableRow>
            ))}
          </TableBody>
        </Table>
        <Link to="/admin/add">Добавить новый товар</Link>
      </Container>
    </div>
  );
}

export default AdminPage;
