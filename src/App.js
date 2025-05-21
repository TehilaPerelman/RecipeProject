
import React, { Suspense } from 'react';
import {  Routes, Route } from 'react-router-dom';
import RecipeDetails from './Component/RecipeDetails'
import MarkOfCus from "./Component/MarkOfCus"; // ייבוא הקומפוננטה


const Home = React.lazy(() => import("./Component/Home"));
const RecipeList = React.lazy(() => import("./Component/RecipeList"));
const AppBar = React.lazy(() => import("./Component/AppBar"));
const Login=React.lazy(()=>import("./Component/Login"));
const AddRecipe = React.lazy(() => import("./Component/AddRecipe")); 

function App() {
  return (

        <Suspense fallback={<div>Loading...</div>}>
        <AppBar /> 
         <MarkOfCus />
          <Routes>
      
          <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/RecipeList" element={<RecipeList />} /> 
            <Route path="/RecipeList/:id" element={<RecipeDetails />} /> 
            <Route path="/Login" element={<Login />} />
            <Route path="/AddRecipe" element={<AddRecipe />} />
          

          </Routes>
        </Suspense>

  );
}

export default App;
