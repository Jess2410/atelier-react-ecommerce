import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/store";
import { CardProduct } from "../components/Card";
import { removeProductFromCart } from "../redux/cartSlice";

const CartViewer: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId: number) => {
    dispatch(removeProductFromCart(productId));
  };

  const total = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Votre Panier
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="body1" align="center">
          Votre panier est vide.
        </Typography>
      ) : (
        <List>
          {cart.map((product: any) => (
            <div key={product.id}>
              <ListItem>
                <ListItemText>
                  <Typography variant="subtitle1">{product.title}</Typography>
                  <Typography variant="body2">
                    {`€${product.price.toFixed(2)} `} x{product.quantity}
                  </Typography>
                </ListItemText>
                <Box display="flex" alignItems="center">
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </Box>
              </ListItem>
              <Divider />
            </div>
          ))}
          <Typography variant="h6" align="right">
            Total : €{total.toFixed(2)}
          </Typography>
        </List>
      )}
    </div>
  );
};

export default CartViewer;
