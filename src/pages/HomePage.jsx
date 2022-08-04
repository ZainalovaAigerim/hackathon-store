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
  Pagination,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { HomeContext } from "../contexts/HomeProvider";

function HomePage() {
  const { products, getProducts, pagesCount, currentPage, setCurrentPage } =
    React.useContext(HomeContext);

  React.useEffect(() => {
    getProducts();
  }, [currentPage]);

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
                <AddShoppingCartIcon
                  size="small"
                  color="error"
                ></AddShoppingCartIcon>
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
