import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cartSlice";

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getProductById = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
      <Card>
        <CardMedia
          component="img"
          alt={product.title}
          height="200"
          image={product.thumbnail}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Price: ${product.price}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Rating: {product.rating}
          </Typography>
          {product?.images && (
            <Grid container spacing={2}>
              {product.images.map((image, index) => (
                <Grid item key={index}>
                  <img
                    style={{ height: 100, width: 100 }}
                    src={image}
                    alt={image}
                  />
                </Grid>
              ))}
            </Grid>
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "50%",
            }}
          >
            <Button
              onClick={() => navigate("/products")}
              variant="contained"
              color="primary"
            >
              Return
            </Button>
            <Button
              onClick={() => dispatch(addCart(product))}
              variant="outlined"
              color="primary"
            >
              Add
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProductScreen;
