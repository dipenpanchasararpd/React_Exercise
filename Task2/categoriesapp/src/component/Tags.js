import React, { useState, useContext } from "react";
import CategoryContex from "../Contex/CetogoryContex";
import Popup from "./Popup";
import { NavLink } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import Dropmenu from "./dropmenu";


<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;

function Tags() {
    const SelectedCategory = useContext(CategoryContex);
    const [showModel, setShowmodel] = useState(false);
    const [category, setCategory] = useState("");
    const [check, setCheck] = useState(false);
    const [addMenu, setAddMenu] = useState(false);
    const [showMenu,setShowMenu] =useState(false);
    const closePopup = () => setShowmodel(false);
    let existingData = JSON.parse(
        localStorage.getItem(SelectedCategory.selectedCategory)
    );
    existingData = existingData ? existingData : [];

    //const { selectedCategory, setSelectedCategory } = useContext(CategoryContex);

    function sendData(check) {
        setShowmodel(true);
        setCategory(SelectedCategory.selectedCategory);
        setCheck(check);
    }
    return (
        <>
        <Dropmenu/>
            <div className="row">
                <div class="side2">
                    <div className="tagmenu">
                        <h3>Tags</h3>
                        <button className="addbtn" onClick={() => sendData(false)}>
                            +
                        </button>
                        {showModel && (
                            <Popup
                                closePopup={closePopup}
                                category={category}
                                check={check}
                            />
                        )}
                    </div>
                    <input
                        type="text"
                        className="tagSerch"
                        placeholder="Search.."
                    ></input>
                    <br></br>



                    {/* <td>hh</td> */}
                    {existingData.map((item) => (
                        // console.log(storedData),
                        <ul key={item.name} className="selectBox" onMouseEnter={() => setAddMenu(true)} onMouseLeave={() => setAddMenu(false)}>
                            {
                                addMenu ? <li >
                                    {item.name}<span onMouseEnter={()=>setShowMenu(true)}>&#8942;{showMenu&&(<Dropmenu/>)}</span>
                                </li> : <li>{item.name}</li>
                            }
                        </ul>
                    ))}

                </div>
                <div className="main"></div>
            </div>
        </>
    );
}

export default Tags;
