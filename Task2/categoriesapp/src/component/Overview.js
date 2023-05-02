import React, { useContext } from "react";
import Popup from "./Popup";
import CategoryContex from "../Contex/CetogoryContex";

function Overview() {
  let existingData = JSON.parse(localStorage.getItem("Category"));
  existingData = existingData ? existingData : [];
  const SelectedCategory = useContext(CategoryContex);
  let childexistingData = JSON.parse(
    localStorage.getItem(SelectedCategory.selectedCategory)
  );
  childexistingData = childexistingData ? childexistingData : [];
  console.log(childexistingData);
  return (
    <>
      <div className="row">
        <div class="side2">
          <h3>Overview</h3>
        </div>
        <div className="main">
          <h3 style={{ marginLeft: 70, marginBottom: 40, marginTop: 0 }}>
            Automibile Overview
          </h3>
          <div className="boxes">
            <div className="counttag">
              <label>Automobile Tags Count</label>
              <br></br>
              <label className="count">{existingData.length}</label>
            </div>
            <div className="counttag">
              <label>All Tags Count</label>
              <br></br>
              <label className="count">{childexistingData.length}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
