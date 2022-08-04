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
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

function AdminPage() {
  const { getProducts, products, deleteProduct } =
    React.useContext(AdminContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-page">
      <Container>
        <Link className="add-new-product-link" to="/admin/add">
          + Добавить новый товар
        </Link>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Наименование</TableCell>
              <TableCell>Артикул</TableCell>
              <TableCell>Масса(кг)</TableCell>
              <TableCell>Стоимость</TableCell>
              <TableCell>Фото товара</TableCell>
              <TableCell>Редактировать</TableCell>
              <TableCell>Удалить</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.barcode}</TableCell>
                <TableCell>{item.weight}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <img width={100} src={item.photo} alt="" />
                </TableCell>
                <TableCell>
                  <Link to={`/admin/edit/${item.id}`}>
                    <AutoAwesomeRoundedIcon />
                  </Link>
                </TableCell>
                <TableCell>
                  <HighlightOffRoundedIcon
                    onClick={() => deleteProduct(item.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
}

export default AdminPage;
