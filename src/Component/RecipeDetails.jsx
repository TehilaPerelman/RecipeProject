
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { favorit } from "../Store/RecipeListSlice";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

const RecipeDetails = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null); 
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.RecipeList.arr); 
  const Ceack = recipe?.isFavorite;

  useEffect(() => {
    const foundRecipe = arr.find((item) => item.id === Number(id));
    setRecipe(foundRecipe || null);
  }, [id, arr]);

  if (!recipe) {
    return (
      <Typography
        variant="h5"
        color="error"
        align="center"
        sx={{ mt: 4 }}
      >
        מתכון לא נמצא!
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        py: 3,
        px: 2,
        backgroundColor: "#f9f4ef",
        direction: "rtl", 
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: "600px",
          width: "100%",
          p: 3,
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.9)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
   
        {recipe.image && (
          <Box
            component="img"
            src={recipe.image}
            alt={recipe.name}
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 4,
              mb: 3,
            }}
          />
        )}

        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem", 
            fontWeight: "bold",
            color: "#8c6e52", 
            mb: 1,
          }}
        >
          שם:{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "0.95rem", 
              fontWeight: "normal",
              color: "#5e4429",
            }}
          >
            {recipe.name}
          </Typography>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#8c6e52",
            mb: 1,
          }}
        >
          קטגוריה:{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "0.95rem",
              fontWeight: "normal",
              color: "#5e4429",
            }}
          >
            {recipe.category}
          </Typography>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#8c6e52",
            mb: 2,
          }}
        >
          זמן הכנה:{" "}
          <Typography
            component="span"
            sx={{
              fontSize: "0.95rem",
              fontWeight: "normal",
              color: "#5e4429",
            }}
          >
            {recipe.time} דקות
          </Typography>
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#8c6e52",
            mb: 2,
          }}
        >
          רכיבים:
        </Typography>
        <List>
          {recipe.ingredients.map((ingredient, index) => (
            <ListItem
              key={index}
              sx={{
                p: 0,
                fontSize: "0.95rem",
                color: "#5e4429", 
              }}
            >
              <Divider sx={{ my: 1 }} />
              {ingredient}
            </ListItem>
          ))}
        </List>

        <Button
          variant="contained"
          onClick={() => dispatch(favorit(recipe.id))}
          sx={{
            mt: 2,
            width: "100%",
            background: Ceack ? "#8c6e52" : "#d9c2a8",
            ":hover": {
              background: Ceack ? "#5e4429" : "#b89e78",
            },
            color: "#fff",
            fontSize: "0.95rem", 
          }}
        >
          {Ceack ? "הסר ממועדפים" : "הוסף למועדפים"}
        </Button>

        <Button
          component={Link}
          to={`/RecipeList`}
          variant="outlined"
          sx={{
            mt: 2,
            width: "100%",
            fontSize: "0.95rem",
            color: "#8c6e52",
            borderColor: "#8c6e52",
            ":hover": {
              borderColor: "#5e4429",
              color: "#5e4429",
            },
          }}
        >
          חזרה לדף המתכונים
        </Button>
      </Paper>
    </Box>
  );
};

export default RecipeDetails;
