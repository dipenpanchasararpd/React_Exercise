// import React, { useState } from 'react'

// const Form = () => {

//     const [data, setData] = useState({ fname: '', lname: '' });

//     function addData() {
//         setData([...data, { fname: 'Dipen', lname: 'Panchasara' }]);
//     }
//     return (
//         <div>
//             <input type="text" id="Fname" name="Fname" />
//             <input type="text" id="Lname" name="Lname" />
//             <button onClick={() => addData}>+ Add</button>
//             {
//                 data.map(() => {
//                     return (
//                         <>
//                             <input type="text" id="Fname" name="Fname" />
//                             <input type="text" id="Lname" name="Lname" />
//                             <button>Edit</button>
//                             <button>Delete</button>

//                         </>
//                     );
//                 })

//             }

//         </div>
//     )
// }

// export default Form

// import React, { useState } from 'react';

// const Form = () => {
//     const [firstname, setFirstname] = useState('');
//     const [Lastname, setLastname] = useState('');


//     function addData() {
//         setData([...data, { Fname: '', Lname: '' }]);
//     }

//     return (
//         <div>
//             <form onSubmit={addData}>


//                 <input type="text" placeholder='First Name' onChange={e => setFirstname(e.target.value)} />
//                 <input type="text" placeholder='Last Name' onChange={e => setLastname(e.target.value)} />
//                 <button type='submit'>+ Add</button>
//             </form>
//             {data.map((item) => {
//                 return (
//                     <>
//                         <br></br>

//                         <button>Edit</button>
//                         <button>Delete</button>
//                     </>
//                 );
//             })}
//         </div>
//     );
// };

// export default Form;

// import React from 'react'
// import { useState } from 'react';


// function Form() {
//     const [inputarr, setInputarr] = useState([])

//     const [inputdata, SetInputdata] = useState({ fname: "", lname: "" })

//     function changehandle(e) {
//         SetInputdata({ ...inputdata, [e.target.name]: e.target.value })
//     }

//     let { fname, lname } = inputdata;

//     function changhandle() {

//         if (fname === "" && lname === "") {
//             alert("Enter INPUT fields")
//         } else {
//             setInputarr([...inputarr, { fname, lname }])
//         }
//         console.log(inputdata, "input data what we Enter")
//         SetInputdata({ fname: "", lname: "" })

//     }
//     return (
//         <div className="App" >
//             <input type="text" name='fname' value={inputdata.fname} onChange={changehandle} placeholder="First Name" />
//             <input type="text" name='lname' value={inputdata.lname} onChange={changehandle} placeholder="Last Name" />

//             <button onClick={changhandle}>+ Add</button><br />

//             <table border={1} className="inputsimpletable" cellPadding={10}>
//                 <tbody>
//                     <tr>
//                         <th>First Name </th>
//                         <th>Last Name</th>
//                         <th></th>
//                     </tr>
//                     {
//                         inputarr.map((info, ind) => {
//                             return (
//                                 <tr key={ind}>
//                                     <td>{info.fname}</td>
//                                     <td>{info.lname}</td>
//                                     <td><button>Edit</button><button>Delete</button></td>
//                                 </tr>
//                             )
//                         })
//                     }

//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Form;

// import React, { useState } from "react";

// function Form() {
//     const [name, setName] = useState({ firstName: "", lastName: "" });
//     const [tableData, setTableData] = useState([]);

//     function addRow() {
//         if (name.firstName === "" || name.lastName === "") {
//             return;
//         } else {
//             const fullName = `${name.firstName} ${name.lastName}`;
//             if (tableData.some((item) => item.name === fullName)) {
//                 alert("Already available in table");
//             } else {
//                 setTableData([...tableData, { id: Date.now(), name: fullName }]);
//                 setName({ firstName: "", lastName: "" });
//             }
//         }
//     }

//     function editRow(index) {
//         if (name.firstName === "" || name.lastName === "") {
//             return;
//         } else {
//             const fullName = tableData[index].name;
//             const [fname, lname] = fullName.split(" ");
//             if (tableData.some((item) => item.name === fullName)) {
//                 alert("Already exists");
//             } else {
//                 setName({ firstName: fname, lastName: lname });
//                 setTableData(tableData.filter((_, i) => i !== index));
//             }
//         }
//     }

//     function deleteRow(index) {
//         setTableData(tableData.filter((_, i) => i !== index));
//     }

//     function updateRow(index) {
//         if (name.firstName === "" || name.lastName === "") {
//             return;
//         } else {
//             const fullName = `${name.firstName} ${name.lastName}`;
//             if (tableData.some((item) => item.name === fullName)) {
//                 alert("Already exists");
//             } else {
//                 const newTableData = [...tableData];
//                 newTableData.splice(index, 1, { id: tableData[index].id, name: fullName });
//                 setTableData(newTableData);
//                 setName({ firstName: "", lastName: "" });
//             }
//         }
//     }

//     return (
//         <div>
//             <form onSubmit={addRow}>
//                 <input
//                     type="text"
//                     placeholder="First Name"
//                     value={name.firstName}
//                     onChange={(e) => setName({ ...name, firstName: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Last Name"
//                     value={name.lastName}
//                     onChange={(e) => setName({ ...name, lastName: e.target.value })}
//                 />
//                 <button type="submit">+ Add</button>
//             </form>
//             <table border={1} cellPadding={10}>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData.map((item, index) => (
//                         <tr key={item.id}>
//                             <td>{item.id}</td>
//                             <td>{item.name}</td>
//                             <td>
//                                 <button onClick={() => editRow(index)}>Edit</button>
//                                 <button onClick={() => deleteRow(index)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             {name.firstName !== "" || name.lastName !== "" ? (
//                 <div>
//                     <button onClick={() => updateRow(tableData.length)}>Update</button>
//                     <button onClick={() => setName({ firstName: "", lastName: "" })}>Cancel</button>
//                 </div>
//             ) : null}
//         </div>
//     );
// }

// export default Form;

// import React, { useRef, useState } from 'react'

// function Form() {
//     const list = []
//     const [lists, setList] = useState(list)
//     const [updateState, setUpdateState] = useState(-1)
//     return (
//         <div className='crud'>
//             <div>
//                 <AddList setList={setList} />
//                 <form onSubmit={handleSubmit}>
//                     <table>
//                         {
//                             lists.map((current) => (
//                                 updateState === current.id ? <EditList current={current} lists={lists} setList={setList} /> :
//                                     <tr>
//                                         <td>{current.name}</td>
//                                         <td>{current.price}</td>
//                                         <td>
//                                             <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
//                                             <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
//                                         </td>
//                                     </tr>
//                             ))
//                         }
//                     </table>
//                 </form>
//             </div>
//         </div>
//     )

//     function handleEdit(id) {
//         setUpdateState(id)
//     }
//     function handleDelete(id) {
//         const newlist = lists.filter((li) => li.id !== id)
//         setList(newlist)
//     }
//     function handleSubmit(event) {
//         event.preventDefault()
//         const name = event.target.elements.name.value
//         const price = event.target.elements.price.value
//         const newlist = lists.map((li) => (
//             li.id === updateState ? { ...li, name: name, price: price } : li
//         ))

//         setList(newlist)
//         setUpdateState(-1)
//     }
// }

// function EditList({ current, lists, setList }) {
//     function handInputname(event) {
//         const value = event.target.value;
//         const newlist = lists.map((li) => (
//             li.id === current.id ? { ...li, name: value } : li
//         ))

//         setList(newlist)
//     }
//     function handInputprice(event) {
//         const value = event.target.value;
//         const newlist = lists.map((li) => (
//             li.id === current.id ? { ...li, price: value } : li
//         ))

//         setList(newlist)
//     }
//     return (
//         <tr>
//             <td><input type="text" onChange={handInputname} name='name' value={current.name} /></td>
//             <td><input type="text" onChange={handInputprice} name='price' value={current.price} /></td>
//             <td><button type='submit'>Update</button></td>
//         </tr>
//     )
// }

// function AddList({ setList }) {
//     const nameRef = useRef()
//     const priceRef = useRef()

//     function handleSubmit(event) {
//         event.preventDefault();
//         const name = event.target.elements.name.value;
//         const price = event.target.elements.price.value;
//         const newlist = {
//             id: 3,
//             name,
//             price
//         }
//         setList((prevList) => {
//             return prevList.concat(newlist)
//         })
//         nameRef.current.value = ""
//         priceRef.current.value = ""
//     }
//     return (
//         <form className='addForm' onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
//             <input type="text" name="price" placeholder="Enter Price" ref={priceRef} />
//             <button type="submit">Add</button>
//         </form>


//     )
// }

// export default Form;

import React, { useState } from 'react';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [data, setData] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateId, setUpdateId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!firstName || !lastName) {
            alert('Please enter both First Name and Last Name');
            return;
        }

        const existingEntry = data.find(
            (item) =>
                item.firstName.toLowerCase() === firstName.toLowerCase() &&
                item.lastName.toLowerCase() === lastName.toLowerCase()
        );
        if (existingEntry) {
            alert('This entry already exists');
            return;
        }

        if (isUpdate) {
            const newData = data.map((item) => {
                if (item.id === updateId) {
                    return { ...item, firstName, lastName };
                } else {
                    return item;
                }
            });
            setData(newData);
            setFirstName('');
            setLastName('');
            setIsUpdate(false);
            setUpdateId(null);
        } else {
            const newData = [...data, { id: Date.now(), firstName, lastName }];
            setData(newData);
            setFirstName('');
            setLastName('');
        }
    };

    const handleEdit = (id) => {
        const itemToEdit = data.find((item) => item.id === id);
        setFirstName(itemToEdit.firstName);
        setLastName(itemToEdit.lastName);
        setIsUpdate(true);
        setUpdateId(id);
    };

    const handleDelete = (id) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <button type="submit">{isUpdate ? 'Update' : 'Add'}</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>
                                <button onClick={() => handleEdit(item.id)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Form;



