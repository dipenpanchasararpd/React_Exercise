import Categories from './Categories';
import './Style.css';
import React, { useState, useEffect, useRef } from 'react'
// function addCategory() { 

//     // useEffect(() => {
//         //     localStorage.setItem('items', JSON.stringify(items));
//         // }, [items])
//         const [items, setItems] = useState([]);
//     }

// function Popup({ closePopup,category}) {

//     console.log(category)

//     const name = useRef();
//     const description = useRef();
//     const [catValue, setCatValue] = useState({ name: "", description: "" });
//     const Data = JSON.stringify(catValue)

//     useEffect(() => {
//         // localStorage.setItem(closePopup.category, Data);
//         // creating an object
//         const myCountryInfo = {
//             country: 'India',
//             capital: 'New Delhi'
//         }

//         // stringifying the myCountryInfo object and 
//         // storing it in the localStorage
//         localStorage.setItem('myCountryInfo', JSON.stringify(myCountryInfo))

//         // retrieving localStorage data in HTML
//     });
//     function addCategory() {
//         setCatValue({ name: name, description: description });
//     }

//     return (
//         <>
//             <div className="model-wrapper" onClick={closePopup}></div>
//             <div className="model-container">

//                 <form>
//                     <input className='name_input' type='text' placeholder='Name' ref={name}></input>
//                     <input className='description_input' type='text' placeholder='Description' ref={description}></input>
//                 </form>

//                 <button className='btn' onClick={() => addCategory()}>Save</button>
//             </div>
//         </>
//     )
// }
function Popup({ closePopup, category, check }) {
  const name = useRef();
  const description = useRef();
  //const [catValue, setCatValue] = useState();
  console.log(check)
  let existingData = JSON.parse(localStorage.getItem(category));
  

  function addCategory() {
    const newData = { name: name.current.value, description: description.current.value };
    existingData = existingData ? existingData : [];

    // Check for duplicates
    const duplicate = existingData.some(data =>
      data.name === newData.name && data.description === newData.description
    );

    if (!duplicate) {
      const updatedData = [...existingData, newData];
      localStorage.setItem(category, JSON.stringify(updatedData));
    }
  }

  function updateData() {
    // const newData = { name: name.current.value, description: description.current.value };
    // existingData = existingData ? existingData : [];

    // // Check for duplicates  
  }

  return (
    <>
      <div className="model-wrapper" onClick={closePopup}></div>
      <div className="model-container">

        <form>
          <input className='name_input' type='text' placeholder='Name' ref={name}></input>
          <input className='description_input' type='text' placeholder='Description' ref={description}></input>
        </form>
        {check ? <button className='btn' onClick={() => { updateData(); closePopup(); }}>Update</button> : <button className='btn' onClick={() => { addCategory(); closePopup(); }}>Add</button>}
      </div>
    </>
  );
}

export default Popup;