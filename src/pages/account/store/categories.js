

import axios from "axios";

let initialState = {
  categories:[],
  activeCategory: [],
}

let activatedCategory;
let newCategories;

export default function CategoriesReducer(state=initialState, action){
  let {type, payload} = action;

  switch(type){

    case "LOAD_CATEGORIES":
      return{
        categories: payload.data.results,
        activeCategory: [],
      }

    case "SWITCH_ACTIVE_CATEGORY":
      activatedCategory = state.categories.filter(category => category.name === payload)[0];
      newCategories = state.categories;
      return {activeCategory: activatedCategory, categories: newCategories};
      default: return state;
    };
}

export const loadCategories = () => (dispatch, getState) => {
  return axios.get('https://api-js401.herokuapp.com/api/v1/categories')
    .then(response => {
      dispatch({
        type: 'LOAD_CATEGORIES',
        payload: response
      });
    });
}

export function changecategory(name){
  return{
    type: "SWITCH_ACTIVE_CATEGORY",
    payload: name,
  };
}
