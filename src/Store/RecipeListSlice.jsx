
import { createSlice } from "@reduxjs/toolkit";

const initvalue = {
  arr: [
    {
      id: 1,
      name: "עוגת שוקולד",
      time: 60,
      ingredients: ["קמח", "שוקולד", "סוכר", "ביצים", "חמאה"],
      category: "חלבי",
      isFavorite: false,
      image: '/1.jpg',
    },
    {
      id: 2,
      name: "עוגת גבינה",
      time: 90,
      ingredients: ["גבינה לבנה", "ביסקוויטים", "שמנת מתוקה", "סוכר", "וניל"],
      category: "חלבי",
      isFavorite: false,
      image: '/2.jpg',
    },

    {
      id: 3,
      name: "עוגת טורט",
      time: 80,
      ingredients: ["קמח", "תפוחים", "סוכר", "קינמון", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/3.jpg',
    },
    {
      id: 4,
      name: "טארט פירות יער",
      time: 120,
      ingredients: ["קמח", "חמאה", "פירות יער", "סוכר", "שמנת מתוקה"],
      category: "חלבי",
      isFavorite: false,
      image: '/4.jpg',
    }, {
      id: 5,
      name: "עוגת קרמבו",
      time: 90,
      ingredients: ["ביסקוויטים", "שמנת מתוקה", "שוקולד", "קצפת"],
      category: "חלבי",
      isFavorite: false,
      image: '/5.jpg',
    }, {
      id: 6,
      name: "עוגת שקדים",
      time: 45,
      ingredients: ["שוקולד מריר", "חמאה", "קמח", "סוכר", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/6.jpg',
    },
    {
      id: 7,
      name: " עוגת גזר  ",
      time: 75,
      ingredients: ["קמח", "גזר", "שמן", "סוכר", "אגוזים"],
      category: "חלבי",
      isFavorite: false,
      image: '/7.jpg',
    },
    {
      id: 8,
      name: "עוגת שוקולד לבן",
      time: 70,
      ingredients: ["שוקולד לבן", "קמח", "חמאה", "סוכר", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/8.jpg',
    }, {
      id: 9,
      name: "עוגת וניל",
      time: 50,
      ingredients: ["קמח", "וניל", "סוכר", "שמן", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/9.jpg',
    },

    {
      id: 10,
      name: "פאי תפוחים",
      time: 90,
      ingredients: ["קמח", "חמאה", "תפוחים", "קינמון", "סוכר"],
      category: "חלבי",
      isFavorite: false,
      image: '/10.jpg',
    },
    {
      id: 11,
      name: "עוגת קוקוס",
      time: 65,
      ingredients: ["קמח", "קוקוס", "סוכר", "חלב", "שמן"],
      category: "חלבי",
      isFavorite: false,
      image: '/11.jpg',
    },

    {
      id: 12,
      name: "עוגיות חמאה",
      time: 50,
      ingredients: ["קמח", "חמאה", "סוכר", "וניל"],
      category: "חלבי",
      isFavorite: false,
      image: '/12.jpg',
    },
    {
      id: 13,
      name: "עוגת לימון",
      time: 60,
      ingredients: ["קמח", "לימון", "סוכר", "שמן", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/13.jpg',
    },

    {
      id: 14,
      name: "מוס שוקולד",
      time: 40,
      ingredients: ["שוקולד מריר", "שמנת מתוקה", "סוכר", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/14.jpg',
    },


    {
      id: 15,
      name: "עוגת אגוזים",
      time: 70,
      ingredients: ["קמח", "ביצים", "שמנת מתוקה", " אגוזים  "],
      category: "חלבי",
      isFavorite: false,
      image: '/15.jpg',
    },
    {
      id: 16,
      name: "עוגה בחושה ",
      time: 60,
      ingredients: ["קמח", "פרג", "סוכר", "שמן", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/16.jpg',
    },
    {
      id: 17,
      name: "עוגת אגוזים",
      time: 45,
      ingredients: ["קמח", "חמאה", "סוכר", "שוקולד צ'יפס", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/17.jpg',
    },
    {
      id: 18,
      name: "עוגת בננות",
      time: 70,
      ingredients: ["קמח", "בננות", "סוכר", "שמן", "ביצים"],
      category: "חלבי",
      isFavorite: false,
      image: '/18.jpg',
    },
  ],

  lastId: 18,
};

const RecipeListSlice = createSlice({
  name: "RecipeList",
  initialState: initvalue,
  reducers: {
    AddRecipeMain(state, action) {
      const newRecipe = { ...action.payload, id: state.lastId + 1 };
      state.arr.push(newRecipe);
      state.lastId += 1;
    },
    favorit: (state, actions) => {
      const recipe = state.arr.find((item) => item.id === actions.payload);
      if (recipe) {
        recipe.isFavorite = !recipe.isFavorite;
      }
    },
  },
});

export const { AddRecipeMain, favorit } = RecipeListSlice.actions;
export default RecipeListSlice.reducer;
