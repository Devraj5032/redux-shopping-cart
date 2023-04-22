import React, { useEffect, useState } from "react";
import {changeCategory} from '../redux/actions/category'
import { connect } from "react-redux";

const Categories = ({changeCategory}) => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const getData = await fetch("https://fakestoreapi.com/products/categories");
    const data = await getData.json();
    setCategories(data);
  };

  const onCategoryClick = (cate) => {
    changeCategory(cate)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul className="nav nav-pills nav-fill">
      {categories.map((cate, index) => (
        <li className="nav-item" key={index} style={{margin: '10px 30px'}} onClick={() => {onCategoryClick(cate)}}>
          <a className="nav-link active" aria-current="page" href="#">
            {cate}
          </a>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  changeCategory: (cate) => (dispatch(changeCategory(cate)))
})

export default connect(mapStateToProps , mapDispatchToProps) (Categories);
