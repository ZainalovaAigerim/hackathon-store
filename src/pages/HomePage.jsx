import React from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Button,
  Typography,
  Slider,
  Pagination,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { HomeContext } from "../contexts/HomeProvider";

function HomePage() {
  const {
    products,
    getProducts,
    filterByPrice,
    setFilterByPrice,
    pagesCount,
    currentPage,
    setCurrentPage,
    addProductToBasket,
    minmax,
  } = React.useContext(HomeContext);

  React.useEffect(() => {
    getProducts();
  }, [filterByPrice, currentPage]);

  return (
    <div className="home-page">
      <Container>
        <div className="market-logo">
          <img
            width={250}
            src="https://t4.ftcdn.net/jpg/03/32/97/33/360_F_332973317_SyQf6OsDnTe4zH5cjFA2TsrEMUaVMNnf.jpg"
            alt=""
          />
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
          {products.map((item) => (
            <Card key={item.id} className="products-card">
              <CardActionArea>
                <CardMedia component="img" height={140} image={item.photo} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price} сом
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => addProductToBasket(item)}
                  variant="outlined"
                >
                  Добавить в корзину
                </Button>
              </CardActions>
            </Card>
          ))}
        </div>
        <div className="pagination">
          <Pagination
            onChange={(_, newValue) => setCurrentPage(newValue)}
            count={pagesCount}
            variant="outlined"
          />
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
