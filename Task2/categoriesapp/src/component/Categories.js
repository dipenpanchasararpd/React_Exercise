import React, { useState, useRef, useContext } from "react";
import "./Style.css";
import Popup from "./Popup";
import { NavLink } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
// import Tags from './Tags'
import { UserProvider } from "./UserContext";
// import Menu from './Menu';
import PassName from "./PassName";
import { useEffect } from "react";
import CategoryContex from "../Contex/CetogoryContex";

function Categories() {
    const [showModel, setShowmodel] = useState(false);
    const [category, setCategory] = useState("");
    const [searchData, setSearchData] = useState();
    const [storedData, setStoredData] = useState([]);
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContex);
    // console.log(catName);
    const catName = useRef();
    const [check, setCheck] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
    });
    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem("Category")) || [];
        setStoredData(existingData);
    }, []);

    function closePopup() {
        setShowmodel(false);
    }
    function handleDelete(item) {
        const newData = [...storedData];
        newData.splice(item, 1);
        setStoredData(newData);
        localStorage.setItem("Category", JSON.stringify(newData));
    }

    function sendData(check) {
        setShowmodel(true);
        setCategory("Category");
        setCheck(check);
        setFormData({
            name: "",
            description: "",
        })
    }
    function addCategory(newCategory) {
        const newData = [...storedData, newCategory];
        setStoredData(newData);
        localStorage.setItem("Category", JSON.stringify(newData));
    }

    function updateData(updatedData) {
        const newData = [...storedData];
        newData[editIndex] = updatedData;
        setStoredData(newData);
        localStorage.setItem("Category", JSON.stringify(newData));
        // setFormData({
        //     name: updateFormData?.name,
        //     description: updateFormData?.description
        // })
    }

    function findData(finalData) {
        if (finalData) {
            const existingData = JSON.parse(localStorage.getItem("Category")) || [];
            const filteredData = existingData.filter((data) =>
                data.name.toLowerCase().includes(finalData.toLowerCase())
            );
            setStoredData(filteredData);
        } else {
            const existingData = JSON.parse(localStorage.getItem("Category")) || [];
            setStoredData(existingData);
        }
    }

    function searchDataFnc(Data) {
        setSearchData(Data.target.value);
    }

    function handleEdit(item) {
        setEditIndex(storedData.indexOf(item)); // set the index of the edited item
        setCheck(true);
        setCategory(item.name);
        setShowmodel(true);
        setCategory("Category");
        setFormData(item)
    }
    // console.log(localStorage.getItem("Category"));
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
            <div className="navbar">
                <h2>Categories</h2>
            </div>

            <div className="row">
                <div class="side">Categories</div>
                <div className="main">
                    <div>
                        <input
                            className="search"
                            type="text"
                            placeholder="Search.."
                            onChange={searchDataFnc}
                        />{" "}
                        <i
                            class="fa fa-search icon"
                            onClick={() => findData(searchData)}
                        ></i>
                        <button className="btncreat" onClick={() => sendData(false)}>
                            {" "}
                            Create New Category{" "}
                        </button>
                        {showModel && (
                            <Popup
                                closePopup={closePopup}
                                category={category}
                                check={check}
                                setFormData={setFormData}
                                formData={formData}
                            />
                        )}
                    </div>
                    <div className="categories">
                        {/* <table>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td><NavLink to='/Main'>automobile</NavLink></td>
                                <td>-</td>
                                <td><button onClick={() => setShowmodel(true)}>Edit</button><button onClick={() => handleDelete()}>Delete</button></td>
                            </tr>
                        </table> */}

                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>

                            {/* <td>hh</td> */}
                            {storedData.map((item) => (
                                <tr key={item.name}>
                                    <td onClick={() => setSelectedCategory(item.name)}>
                                        <NavLink to="/Main">{item.name}</NavLink>
                                    </td>
                                    <td>{item.description}</td>
                                    <td>
                                        <Button onClick={() => handleEdit(item)}>Edit</Button>
                                        <Button
                                            onClick={() => handleDelete(storedData.indexOf(item))}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </table>
                        {showModel && (
                            <Popup
                                closePopup={closePopup}
                                check={check}
                                updateData={updateData}
                                addCategory={addCategory}
                                setFormData={setFormData}
                                formData={formData}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;
