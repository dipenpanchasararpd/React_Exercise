import React from 'react'
import './Style.css';


function dropmenu() {
    return (
        <>
            <div></div>
            <div className="model-container-menu">
                <label>Add</label>
                <label>Delete</label>
                <label>Move</label>
                <label>Mearge</label>
                {/* {check ? <button className='btn' onClick={() => { updateData(); closePopup(); }}>Update</button> : <button className='btn' onClick={() => { addCategory(); closePopup(); }}>Add</button>} */}
            </div>
        </>
    )
}

export default dropmenu
