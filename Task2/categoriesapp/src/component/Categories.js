import React, { useState, useRef,useContext } from 'react'
import './Style.css';
import Popup from './Popup';
import { NavLink } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap'
// import Tags from './Tags'
import { UserProvider } from './UserContext';
// import Menu from './Menu';
import PassName from './PassName';
import { useEffect } from 'react';
import CategoryContex from '../Contex/CetogoryContex';




function Categories(props) {
    const [showModel, setShowmodel] = useState(false);
    const [category, setCategory] = useState('');
    const [searchData, setSearchData] = useState();
    let existingData = JSON.parse(localStorage.getItem("Category"));
    existingData = existingData ? existingData : [];
    const [storedData, setStoredData] = useState(existingData);
    const catName = useRef();
    const [check,setCheck]=useState(false);
    const { selectedCategory, setSelectedCategory } = useContext(CategoryContex);
    // console.log(catName);

    function closePopup () {setShowmodel(false)}
    function handleDelete(item) {
    // console.log(item)
    storedData.splice(item, 1);
    // // console.log(existingData);
    setStoredData(storedData);
    console.log(storedData)
    localStorage.setItem("Category", JSON.stringify(storedData));    }

    function sendData(check) {
        setShowmodel(true);
        setCategory('Category');
        setCheck(check);
    }
    function findData(finalData) {
        // console.log(finalData)
        
        // console.log(existingData);

        // Check for duplicates
        if (finalData) {

            const duplicate = existingData.map(data => {

                if (data.name === finalData) {
                    // console.log([data])
                    // console.log(data)
                    setStoredData([data]);
                }
            }
            );
        }
        else {
            setStoredData(existingData);
        }

    }


    function searchDataFnc(Data) {
        setSearchData(Data.target.value);
    }

    function sendName(Name) {

        // console.log(Name)
        // <MyContext.Provider value={Name}>
        //     <Tags/>
        // </MyContext.Provider>
    }
    // console.log(localStorage.getItem("Category"));
    return (

        <>
            <link rel="stylesheet"
                href=
                "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="navbar">
                <h2>Categories</h2>
            </div>

            <div className="row">
                <div class="side">Categories</div>
                <div className="main">
                    <div>
                        <input className='search' type='text' placeholder='Search..' onChange={searchDataFnc} /> <i class="fa fa-search icon" onClick={() => findData(searchData)}></i>

                        <button className='btncreat' onClick={() => sendData(false)}> Create New Category </button>
                        {showModel && <Popup closePopup={closePopup} category={category} check={check}/>}


                    </div>
                    <div className='categories'>
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
                                // console.log(storedData),
                                <tr key={item.name}>
                                    <td onClick={() => setSelectedCategory(item.name)}><NavLink to='/Main'  >{item.name}</NavLink></td>
                                    <td>{item.description}</td>
                                    <td><Button onClick={() => sendData(true,item)}>Edit</Button><Button onClick={() =>handleDelete(storedData.indexOf(item))}>Delete</Button></td>
                                </tr>
                            ))}

                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
