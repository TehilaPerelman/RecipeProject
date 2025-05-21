
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const RecipeList = () => {
  const arr = useSelector((state) => state.RecipeList.arr);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f9f4ef",
        overflowX: "hidden",
        paddingTop: 2,
      }}
    >
     

      <Paper
        elevation={3}
        sx={{
          width: "90%",
          maxWidth: "1200px",
          mt: 3,
          mb: 3,
          borderRadius: 4,
          p: 4,
          background: "#f9f4ef",
          boxShadow: "none",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: 4,
          }}
        >
          {arr.map((item) => (
            <Card
              key={item.id}
              component={Link}
              to={`/RecipeList/${item.id}`}
              sx={{
                textDecoration: "none",
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                ":hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                },
                height: "350px", 
              }}
            >
              <CardMedia
                component="img"
                height="200" 
                image={item.image}
                alt={`תמונה של ${item.name}`}
              />
              <CardContent sx={{ backgroundColor: "#f9f4ef" }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ color: "#8B4513", textAlign: "right" }}
                >
                  שם העוגה: {item.name}
                </Typography>
                <Typography
                  sx={{ color: "#8B4513", textAlign: "right" }}
                >
                  <span>זמן הכנה:</span> {item.time} דקות
                </Typography>
                <Typography
                  sx={{ color: "#8B4513", textAlign: "right" }}
                >
                  <span>קטגוריה:</span> {item.category}ז
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default RecipeList;
