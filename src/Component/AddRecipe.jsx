import { useDispatch } from "react-redux";
import { useState } from "react";
import { AddRecipeMain } from "../Store/RecipeListSlice";
import { useForm } from "react-hook-form"; 
import {Box, TextField, Button,Typography,List,ListItem,ListItemText, IconButton,Paper,Divider} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";  

const AddRecipe = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ingredients, setIngredients] = useState([]);
  const [temp, setTemp] = useState("");

  const Add = () => {
    if (temp.trim() !== "") {
      setIngredients((prev) => [...prev, temp]);
      setTemp("");
    }
  };

  const Remove = (index) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  const saveRecipe = (data) => {
    const newRecipe = {
      name: data.name,
      time: parseInt(data.time),
      ingredients,
      category: data.category,
      isFavorite: false,
    };
     dispatch(AddRecipeMain(newRecipe));

     setIngredients([]);
     setTemp(""); 
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "#f9f4ef",
        overflowX: "hidden",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "90%",
          maxWidth: "800px",
          mt: 3,
          borderRadius: 4,
          p: 4,
          background: "#ffffff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            color: "#8b6a4a",
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
          }}
        >
          המתכון הפרטי
        </Typography>
        <form onSubmit={handleSubmit(saveRecipe)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              fullWidth
              label="שם המתכון"
              variant="outlined"
              {...register("name", { required: "שם המתכון חובה" })}
              sx={{
                mb: 2,
                background: "#f9f9f9",
                borderRadius: 2,
                fontSize: "0.9rem",
                maxWidth: "400px",
                textAlign: "right",
              }}
              InputProps={{ sx: { height: 40 } }} error={!!errors.name}
             
            />
              {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
            
            <TextField
              fullWidth
              type="number"
              label="זמן הכנה (בדקות)"
              variant="outlined"
              {...register("time", { required: "זמן הכנה חובה" })}
              sx={{
                mb: 2,
                background: "#f9f9f9",
                borderRadius: 2,
                fontSize: "0.9rem",
                maxWidth: "400px",
                textAlign: "right",
              }}
              InputProps={{ sx: { height: 40 } }}
              error={!!errors.time}
            />
               {errors.time && <span style={{ color: 'red' }}>{errors.time.message}</span>}
            
            <TextField
              fullWidth
              label="קטגוריה"
              variant="outlined"
              {...register("category", { required: "קטגוריה חובה" })}
              sx={{
                mb: 3,
                background: "#f9f9f9",
                borderRadius: 2,
                fontSize: "0.9rem",
                maxWidth: "400px",
                textAlign: "right",
              }}
              InputProps={{ sx: { height: 40 } }}
              error={!!errors.category}
            />
            {errors.category && <span style={{ color: 'red' }}>{errors.category.message}</span>}
          </Box>
          <Divider sx={{ my: 3, background: "#d3b88c" }} />
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#8b6a4a",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            רכיבים
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <TextField  fullWidth  
                label="רכיב חדש"
                variant="outlined"
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                sx={{
                  background: "#f9f4ef",
                  borderRadius: 2,
                  fontSize: "0.9rem",
                  maxWidth: "400px",
                  textAlign: "right",
                }}
                 InputProps={{ sx: { height: 40 } }}
              />
              <Button
                variant="contained"
                 sx={{
                  background: "#d3b88c",
                  ":hover": { background: "#b89e78" },
                  fontWeight: "bold",
                  px: 3,
                }}
                onClick={Add}
              >
                הוסף
              </Button>
            </Box>
            <List sx={{ background: "#f9f4ef", borderRadius: 2, p: 2 }}>
                 {ingredients.map((ingredient, index) => (
                 <ListItem
                  key={index}
                  sx={{
                    mb: 1,
                    background: "#ffffff",
                    borderRadius: 2,
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <ListItemText
                    primary={ingredient}
                    sx={{
                      textAlign: "right",
                      color: "#000",
                      fontFamily: "'Segoe UI', 'Arial', sans-serif",
                      fontSize: "1rem",
                      fontWeight: "bold",
                    }}
                  />
                  <IconButton
                     edge="end"
                     onClick={() => Remove(index)}
                    sx={{
                      color: "#d3b88c",
                      ":hover": { color: "#b89e78" },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              width: "90%",
              maxWidth: "800px",
              mt: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                 background: "#b89e78",
                 color: "#fff",
                 fontWeight: "bold",
                 fontSize: "1rem",
                 borderRadius: 4,
                 py: 1,
                 px: 4,
                 ":hover": { background: "#8b6a4a" },
                 boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
              }}
              type="submit"
            >
              <Link to="/"  style={{ color: 'white', textDecoration: 'none' }}>
                   שמור מתכון
              </Link>
            </Button>
          </Box>
        </form>
       </Paper>
    </Box>
  );
};

export default AddRecipe;
