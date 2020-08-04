import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addSortBrand,
  removeSortBrand,
  resetBrands,
} from "../../store/brands/actions";

const BrandSort = () => {
  const [brands, setBrands] = useState([]);
  const [brandSelected, setSelectBrand] = useState(0);
  const brandsCount = useSelector((store) => store.brands);
  const dispatch = useDispatch();
  const select = document.querySelector(".brands");

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await axios.get(
        `https://winningpartner.com:26134/api/v1/schemes`,
        {
          headers: {
            Authorization:
              'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
          },
        }
      );
      setBrands(res.data.schemes);
    };
    fetchBrands();
    setSelectBrand(brandsCount.brands.length);
  }, [brandsCount]);

  const turnOffCheckbox = () => {
    let checkboxes = document.querySelectorAll(".brands-checkbox");
    checkboxes.forEach((item) => (item.checked = false));
  };

  const toggleSelectBrands = () => {
    select.classList.toggle("is-active");
  };

  return (
    <div className="brandsSelect">
      <div className="brandsContainer">
        <button
          className="toggleBrandSelect"
          onClick={() => toggleSelectBrands()}
        >
          {brandSelected > 0
            ? `${brandSelected} casino selected`
            : "All casino selected"}
        </button>
        <div className="brands">
          {brands.map((brand, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name="brand"
                value={brand.id}
                className="brands-checkbox"
                onChange={(e) =>
                  e.target.checked
                    ? dispatch(addSortBrand(e.target.value))
                    : dispatch(removeSortBrand(e.target.value))
                }
              />
              {brand.name}
            </label>
          ))}
        </div>
      </div>
      <button
        className="resetBrandList"
        onClick={() => {
          turnOffCheckbox();
          dispatch(resetBrands());
        }}
      >
        All Brands
      </button>
    </div>
  );
};

export default BrandSort;
