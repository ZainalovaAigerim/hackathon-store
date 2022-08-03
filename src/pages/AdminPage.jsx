import React from "react";
import { AdminContext } from "../contexts/AdminProvider";
import { Link } from "react-router-dom";

function AdminPage() {
  const { getProducts, products } = React.useContext(AdminContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Link to="/admin/add">Добавить новый товар</Link>
    </div>
  );
}

export default AdminPage;
