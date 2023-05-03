import React, { useState, useContext, useEffect } from "react";
import CategoryContex from "../Contex/CetogoryContex";
import Popup from "./Popup";
import { NavLink } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import Dropmenu from "./dropmenu";
import MoveMerge from "./MoveMerge";


function Tags() {
    const SelectedCategory = useContext(CategoryContex);
    const [showModel, setShowmodel] = useState(false);
    const [category, setCategory] = useState("");
    const [check, setCheck] = useState(false);
    const [addMenu, setAddMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const closePopup = () => setShowmodel(false);
    const [storedData, setStoredData] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [searchData, setSearchData] = useState();
    const [moveMergePopup, setMoveMergePopup] = useState(false);
    const [move, setMove] = useState("");
    const [showDisc, setShowDisc] = useState();
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContex);
    // const [selectedSubCategory, setSelectedsubCategory] = useContext(CategoryContex)''
    // const data = JSON.parse(localStorage.getItem(selectedCategory));
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });
    //console.log(showDisc);

    const closeMoveMerge = () => setMoveMergePopup(false);

    useEffect(() => {
        const existingData =
            JSON.parse(localStorage.getItem(SelectedCategory.selectedCategory)) || [];
        setStoredData(existingData);

    }, []);

    function addsubCategory(newCategory) {
        const existingData = JSON.parse(localStorage.getItem(category)) || [];
        // console.log(existingData);
        const newData = [...existingData, newCategory];
        localStorage.setItem(category, JSON.stringify(newData));
        setStoredData(storedData);
    }
    //const { selectedCategory, setSelectedCategory } = useContext(CategoryContex);

    function sendData(check) {
        setShowmodel(true);
        setCategory(SelectedCategory.selectedCategory);
        // console.log(subcatname)
        setCheck(check);
        setFormData({
            name: "",
            description: "",
        });
    }

    function findData(finalData) {
        if (finalData) {
            const existingData =
                JSON.parse(localStorage.getItem(SelectedCategory.selectedCategory)) ||
                [];
            const filteredData = existingData.filter((data) =>
                data.name.toLowerCase().includes(finalData.toLowerCase())
            );
            setStoredData(filteredData);
            // console.log(filteredData);
            if (filteredData.length == 0) {
                alert("Data Not Found");
            }
        } else {
            const existingData =
                JSON.parse(localStorage.getItem(SelectedCategory.selectedCategory)) ||
                [];
            setStoredData(existingData);
        }
    }

    function searchDataFnc(Data) {
        setSearchData(Data.target.value);
    }

    function subAdd(check, subCatName) {
        setShowmodel(true);
        setCheck(check);
        setCategory(subCatName);
        setFormData({
            name: "",
            description: "",
        });
    }

    function handleDelete(item, catname) {
        // const newData = [...storedData];
        const existingData = JSON.parse(localStorage.getItem(SelectedCategory.selectedCategory)) || [];
        const newData = JSON.parse(localStorage.getItem(catname)) || [];
        const data = JSON.parse(localStorage.getItem('Category'));
        // console.log(storedData)
        newData.splice(item, 1);
        setStoredData(newData);
        // console.log(newData)
        localStorage.removeItem(catname);
        // console.log(catname)
        // console.log(item);
        if (newData.name) {
            handleDelete(item, newData.name);
        }
        // console.log(existingData)
        // console.log(catname)
        console.log(data[item].name)
        
        if (selectedCategory === data[item].name && catname===existingData[item].name) {
            // localStorage.removeItem()
            // console.log(data[item].name)
            // console.log(selectedCategory)
            // localStorage.removeItem(data[item].name);
            // console.log(data[item].name)
            // const deleteData = JSON.parse(localStorage.getItem(selectedCategory))
            // console.log(deleteData[item])
            // existingData.splice(item,1)
            // localStorage.setItem(selectedCategory, JSON.stringify(existingData));
            // localStorage.removeItem(deleteData[item])
        }
    }

    function handleMove(who) {
        setMoveMergePopup(true);
        setMove(who);
    }

    function printdata(category) {
        const existingData = JSON.parse(localStorage.getItem(category)) || [];
        return existingData.map((item, index) => (
            <ul
                key={item.name}
                className="selectBox"
                onMouseEnter={() => {
                    setHoveredIndex(index);
                    setAddMenu(true);
                }}
                onMouseLeave={() => {
                    setHoveredIndex(null);
                    setAddMenu(false);
                    setShowMenu(false);
                }}
            >
                {
                    addMenu && hoveredIndex === index ? (
                        <li onClick={() => setShowDisc(item.description)}>
                            {item.name}
                            <span
                                style={{ marginLeft: 150 }}
                                onClick={() => setShowMenu(!showMenu)}

                            >
                                &#8942;
                            </span>
                            {
                                showMenu && (
                                    <div className="menu" onClick={() => setShowMenu(true)}>
                                        <ul>
                                            <li
                                                className="menu-item"
                                                onClick={() => subAdd(false, item.name)}
                                            >
                                                Add
                                            </li>
                                            <li className="menu-item" onClick={() => handleDelete(index, item.name)}>
                                                Delete
                                            </li>
                                            <li className="menu-item" onClick={() => handleMove("move")}>
                                                Move
                                            </li>
                                            <li className="menu-item" onClick={() => handleMove("merge")}>
                                                Merge
                                            </li>
                                        </ul>
                                    </div>
                                )
                            }
                        </li>
                    ) : (
                        <li onClick={() => setShowDisc(item.discription)}>{item.name}</li>
                    )
                }
                {/* Call printdata recursively with the current item's name */}
                {printdata(item.name)}
            </ul>
        )
        )
    }

    // function printData(category) {
    //     const existingData = JSON.parse(localStorage.getItem(category));
    //     // console.log(existingData.name)
    //     existingData?.map((item) => {
    //         const childData = JSON.parse(localStorage.getItem(item.name)) || [];
    //         // console.log(childData)
    //         return childData?.map((childItem) => {
    //             printData(childItem.name)
    //         });
    //     })

    // }

    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>

            <div className="row">
                <div class="side2">
                    {/* <Dropmenu/> */}
                    <div className="tagmenu">
                        <h3>Tags</h3>
                        <button className="addbtn" onClick={() => sendData(false)}>
                            +
                        </button>
                        {showModel && (
                            <Popup
                                closePopup={closePopup}
                                check={check}
                                addCategory={addsubCategory}
                                setFormData={setFormData}
                                formData={formData}
                            />
                        )}
                    </div>
                    <input
                        type="text"
                        className="tagSerch"
                        placeholder="Search.."
                        onChange={searchDataFnc}
                    ></input>
                    <i class="fa fa-search icon" onClick={() => findData(searchData)}></i>
                    <br></br>
                    {/* <td>hh</td> */}

                    {printdata(SelectedCategory.selectedCategory)}
                </div>
                <div className="main">
                    <h3>Description</h3>
                    <div className="disbox">{showDisc}</div>
                    {moveMergePopup && (
                        <MoveMerge
                            closeMoveMerge={closeMoveMerge}
                            isMove={move}
                            category={category}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default Tags;

// import React from 'react'
// import "./Style.css";
// import MoveMerge from './MoveMerge';

// function Tags() {
//   return (
//    <MoveMerge/>
//   )
// }

// export default Tags
