import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {changecategory,loadCategories} from './account/store/categories.js';
import {changeproduct} from './account/store/productpage.js'
// import './Categories.scss';
import { Button } from '@material-ui/core';



const Categories = (props) => {
  useEffect(() => {
    props.loadCategories();
  }, [])

  return(
    <div>
      <h2> Categories Here </h2>
      {props.categories.map((category,i) => {
        return(
          <Button key={i} onClick={() => { props.changecategory(category.name); props.changeproduct(category.name);}} title={category.name}>{category.name.toUpperCase()}</Button>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return{
    // activeCategory: state.categories.activeCategory,
    categories: state.categories
  }
}

const mapDispatchToProps = {
  changecategory,
  changeproduct,
  loadCategories,
 
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
