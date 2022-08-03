import React from "react";
import { ClientContext } from "../contexts/ClientProvider";
import {
  Container,
  Card,
  CardMedia,
  Typography,
  Slider,
  CardContent,
  Pagination,
  Button,
} from "@mui/material";

function HomePage() {
  const {
    getProducts,
    watches,
    filterByPrice,
    setFilterByPrice,
    pagesCount,
    currentPage,
    setCurrentPage,
    addWatchToBasket,
    minmax,
  } = React.useContext(ClientContext);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="main-page">
      <Container>
        <h2>Каталог</h2>
        <div>
          <img src="" alt="" />
        </div>
        <h2>
          Мы любим создавать особенные и уникальные вещи для украшения вашей
          жизни и дома
        </h2>
        <div className="filter-block">
          <h4>Фильтрация по цене</h4>
          <Slider
            max={minmax[1]}
            min={minmax[0]}
            valueLabelDisplay="auto"
            value={filterByPrice}
            onChange={(_, newValue) => setFilterByPrice(newValue)}
          />
        </div>
        <div className="products">
          {/* {products.map((item) => (
        
       ))} */}
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
