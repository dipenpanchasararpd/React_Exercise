import Categories from "./Categories";
import "./Style.css";
import React, { useState, useEffect } from "react";

function MoveMerge({ closeMoveMerge, isMove, category }) {
    // console.log(isMove)
    const [childStoredData, setchildStoredData] = useState([]);
    const [storedData, setStoredData] = useState([]);
    useEffect(() => {
        const existingData =
            JSON.parse(localStorage.getItem(category)) || [];
        setchildStoredData(existingData);
    }, []);
    useEffect(() => {
        const existingData =
            JSON.parse(localStorage.getItem("Category")) || [];
        setStoredData(existingData);
    }, []);


    return (
        <>
            <div className="model-wrapper" onClick={closeMoveMerge}></div>
            <div className="model-container">
                <form>
                    <label>Currunt Category</label>
                    <div className="select">
                        <select className="standard-select">
                            {storedData.map((item) => (
                                // console.log(item)
                                <option className="standard-select-options" value={item.name}>{item.name}</option>
                            ))}
                        </select>
                        <span class="focus"></span>
                    </div>
                    <label>Parent Tag</label>
                    <div className="select">
                        <select className="standard-select">
                            {childStoredData.map((item) => (
                                // console.log(item)
                                <option className="standard-select-options" value={item.name}>{item.name}</option>
                            ))}
                        </select>
                        <span class="focus"></span>
                    </div>
                    {isMove === 'move' ? <button className="mbtn">Move</button> : <button className="mbtn">Merge</button>}
                </form>
            </div>
        </>
    );
}

export default MoveMerge;
