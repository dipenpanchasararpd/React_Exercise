import Categories from "./Categories";
import "./Style.css";
import React, { useState } from "react";

function Popup({ closePopup, check, updateData, addCategory,setFormData,formData }) {
  // console.log(formData)
  // console.log(updateFormData)
  
  function handleAdd() {
    if (formData.name.trim() === "" || formData.description.trim() === "") {
      // If either field is empty, do not add the data
      return;
    }
    const newCategory = {
      name: formData.name,
      description: formData.description,
    };
    addCategory(newCategory);
    closePopup();
  }
  
  // const handelNameChange = (field, event) => {
  //   // setFormData({...formData, [field]: event.target.value });
  //   console.log(setFormData)
  // };
  
  const handelNameChange = (field, event) => {
    // console.log(field,event)
    setFormData({ ...formData, [field]: event.target.value });
  };

  function handleUpdate() {
    if (formData.name.trim() === "" || formData.description.trim() === "") {
      // If either field is empty, do not add the data
      return;
    }
    const updatedData = {
      name: formData.name,
      description: formData.description,
    };
    updateData(updatedData);
    closePopup();
  }
  
  return (
    <>
      <div className="model-wrapper" onClick={closePopup}></div>
      <div className="model-container">
        <form>
          <input
            className="name_input"
            type="text"
            placeholder="Name"
            value={formData?.name}
            onChange={handelNameChange.bind(this, "name")}
          ></input>
          <input
            className="description_input"
            type="text"
            placeholder="Description"
            value={formData?.description}
            onChange={handelNameChange.bind(this, "description")}
          ></input>
        </form>
        {check ? (
          <button
          className="btn"
          onClick={() => {
            handleUpdate();
            closePopup();
          }}
          >
            Update
          </button>
        ) : (
          <button
          className="btn"
          onClick={() => {
            handleAdd();
            closePopup();
          }}
          >
            Add
          </button>
        )}
      </div>
    </>
  );
}

export default Popup;
