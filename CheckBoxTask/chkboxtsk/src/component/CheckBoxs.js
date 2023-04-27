import { useState, useRef, useContext } from 'react';
import jsonData from '../jsonData.json';
import React from 'react'

function CheckBoxs({ checkFnc }) {
    const [expanded, setExpanded] = useState({});
    const selectele = useRef();

    // For Show And Hide Onclick
    const toggleExpand = (key) => {
        setExpanded(prevExpanded => ({ ...prevExpanded, [key]: !prevExpanded[key] }));
    };

    // Function For Chacking And Unchecking ChackBox
    return (
        <div>
            {jsonData.map(parent => (
                <div key={parent.key}>
                    <div style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                        <h3 onClick={() => toggleExpand(parent.key)}>{parent.key}</h3>
                        <div>
                            {/* For Creating A Parent checkBoxs And Label */}
                            {parent.checkBox.map(val => (
                                <label key={val.checkBoxKey}>
                                    <input
                                        id={val.checkBoxKey}
                                        type='checkbox'
                                        onChange={() => checkFnc(parent.key, val.checkBoxKey)}
                                        checked={val.isChecked}
                                        ref={selectele}
                                    />
                                    {val.checkBoxKey}
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Check The Show Hide Toggle And Show and Hide The Childrens */}
                    {expanded[parent.key] && (
                        <ul>
                            {parent.children.map(child => (
                                <li key={child.key}>
                                    {child.key}
                                    <div>
                                        {child.checkBox.map(ele => (
                                            <label key={ele.checkBoxKey}>
                                                <input
                                                    id={ele.checkBoxKey}
                                                    onChange={() => checkFnc(parent.key, child.key, ele.checkBoxKey)}
                                                    type="checkbox"
                                                    checked={ele.isChecked}
                                                    ref={selectele}
                                                />
                                                {ele.checkBoxKey}
                                            </label>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};


export default CheckBoxs