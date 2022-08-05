import React from "react";
import {
  Container,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Slider,
  Pagination,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
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
            src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/3049121/pexels-photo-3049121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <h2>
          Мы любим создавать особенные и уникальные вещи для украшения вашей
          жизни и дома
        </h2>
        <div className="filter-block">
          <h5>Фильтр</h5>
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
                <AddShoppingCartOutlinedIcon
                  onClick={() => addProductToBasket(item)}
                  variant="outlined"
                />
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
