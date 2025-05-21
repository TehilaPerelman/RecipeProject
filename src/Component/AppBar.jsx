
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import HomeRounded from "@mui/icons-material/HomeRounded";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const AppBar = () => {
    const arr = useSelector((state) => state.RecipeList.arr); 
     const [recipe, setRecipe] = useState(null); 
     const [recipe2, setRecipe2] = useState(""); 
     const [flag, setFlag] = useState(false);
     const location = useLocation(); 

  const Search = () => {
     setFlag(true); 
     if (!recipe2.trim()) {
      setRecipe(null);
      return; 
    }
    const foundRecipe = arr.find((item) => item.name.trim() === recipe2.trim());
    setRecipe(foundRecipe || null); 
  };


  useEffect(() => {
     setRecipe(null);
     setRecipe2("");
     setFlag(false);
   }, [location]);


  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 10,
        background: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        direction: "rtl",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "none",
          p: 2,
          borderRadius: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <List
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            padding: 0,
          }}
        >

          <ListItem disablePadding sx={{ width: "auto" }}>
            <Button
              component={Link}
              to="/Home"
              sx={{
                color: "#5e4429",
                ":hover": { color: "#8c6e52" },
                minWidth: 0,
                padding: 1,
              }}
            >
              <HomeRounded fontSize="large" />
            </Button>
          </ListItem>

          <ListItem disablePadding sx={{ width: "auto" }}>
            <Button
              component={Link}
              to="/Home"
              sx={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                color: "#5e4429",
                ":hover": { color: "#8c6e52" },
                paddingX: 2,
              }}
            >
              דף הבית
            </Button>
           </ListItem>
            <Divider orientation="vertical" flexItem />
           <ListItem disablePadding sx={{ width: "auto" }}>
            <Button
              component={Link}
              to="/RecipeList"
              sx={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                color: "#5e4429",
                ":hover": { color: "#8c6e52" },
                paddingX: 2,
              }}
            >
              רשימת מתכונים
            </Button>
            </ListItem>
            <Divider orientation="vertical" flexItem />
            <ListItem disablePadding sx={{ width: "auto" }}>
            <Button
              component={Link}
              to="/AddRecipe"
              sx={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                color: "#5e4429",
                ":hover": { color: "#8c6e52" },
                paddingX: 2,
              }}
            >
              הוספת מתכון
            </Button>
            </ListItem>
            <Divider orientation="vertical" flexItem />
            <ListItem disablePadding sx={{ width: "auto" }}>
            <Button
              component={Link}
              to="/Login"
              sx={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                color: "#5e4429",
                ":hover": { color: "#8c6e52" },
                paddingX: 2,
              }}
            >
              התחברות
            </Button>
          </ListItem>
        </List>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            label="חפש מתכון"
            value={recipe2}
            onChange={(e) => {
              setRecipe2(e.target.value);
              setFlag(false); 
            }}
            size="small"
            sx={{
              width: "250px",
              borderRadius: 3,
              border: "1px solid #ccc",
              background: "white",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }}
            InputProps={{
              sx: {
                pl: 2,
                color: "#5e4429",
                fontSize: "0.9rem",
                fontWeight: "500",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={Search}
            sx={{
              background: "linear-gradient(90deg, #8c6e52, #5e4429)",
              ":hover": { background: "linear-gradient(90deg, #5e4429, #8c6e52)" },
              color: "white",
              fontWeight: "bold",
              px: 3,
              borderRadius: 3,
              ml:3
            }}
          >
            חפש
          </Button>
        </Box>
      </Paper>

  
      {flag && (
        <Box
          sx={{
            mt: 2,
            p: 2,
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            textAlign: "center",
          }}
        >
          {recipe ? (
            <>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#5e4429" }}>
                פרטי המתכון:
              </Typography>
              <Typography sx={{ color: "#5e4429" }}>שם: {recipe.name}</Typography>
              <Typography sx={{ color: "#5e4429" }}>זמן הכנה: {recipe.time} דקות</Typography>
              <Typography sx={{ color: "#5e4429" }}>
                מצרכים: {recipe.ingredients.join(", ")}
            </Typography>
             <Typography sx={{ color: "#5e4429" }}>קטגוריה: {recipe.category}</Typography>
             <Typography sx={{ color: "#5e4429" }}>
                  מועדף: {recipe.isFavorite ? "כן" : "לא"}
              </Typography>
            </>
           ) : (
              <Typography sx={{ fontWeight: "bold", color: "#8c6e52" }}>
              מתכון לא נמצא!
            </Typography>
          )}
        </Box>
      )}
    </Box>
    
   );
};

export default AppBar;
