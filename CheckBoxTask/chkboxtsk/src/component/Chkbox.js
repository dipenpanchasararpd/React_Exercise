import React, { useContext } from 'react'
import UserContext from './UserContext';
import '../App';


function Chkbox() {
    const permissions = useContext(UserContext);
    console.log(permissions)
    return (
        <div>
            {
                permissions.map((value) => (
                    <div className='mainscontainer'>
                        <input type='checkbox' />
                        <label>{value.Pname}</label>
                    </div>
                ))
            }

        </div>
    )
}

export default Chkbox
