
import React from "react";
import { useDispatch } from "react-redux";
import { SavePerson } from "../Store/SaveData";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useForm } from "react-hook-form"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { register, handleSubmit, formState: { errors } } = useForm();

  const save = (data) => {
    const newPerson = {
      name: data.name,  
      email: data.email,
    };
    dispatch(SavePerson(newPerson));

    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "87vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:"#f9f4ef",
        overflow: "hidden",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "90%",
          maxWidth: "400px",
          p: 4,
          borderRadius: 4,
          background: "#ffffff",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-10%)",
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
          התחברות
        </Typography>
        
        <form onSubmit={handleSubmit(save)}>
          <TextField
            label="שם"
             {...register("name", { required: "השם הוא שדה חובה" })}
            fullWidth
            error={!!errors.name}
             helperText={errors.name ? errors.name.message : "אנא הזן את שמך"}
             sx={{
              mb: 2,
              background: "#f9f9f9",
              borderRadius: 2,
            }}
          />
          
          <TextField
            label="מייל"
            type="email"
            {...register("email", {
              required: "המייל הוא שדה חובה",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "הזן מייל תקין",
              },
            })}
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : "אנא הזן כתובת מייל תקינה"}
            sx={{
              mb: 3,
              background: "#f9f9f9",
              borderRadius: 2,
            }}
          />
          
          <Button
            variant="contained"
            color="primary"
            type="submit" 
            fullWidth
            sx={{
              background: "#b89e78",
              ":hover": { background: "#8b6a4a" },
              fontWeight: "bold",
              fontSize: "1rem",
              py: 1.5,
              borderRadius: 2,
            }}
          >
            שמור פרטים
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
