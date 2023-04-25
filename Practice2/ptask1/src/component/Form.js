import React from 'react'
import { useForm } from 'react-hook-form';

const Form = () => {
    const {register, handlesubmit} = useForm();
    const onsubmit = (Data) => {
        console.log(Data);
    }
    return (
        <div style={{ width: 500, marginLeft: 500, marginTop: 100 }}>
            <form onSubmit={handlesubmit(onsubmit)}>
                <div className="form-row form-group">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter Your First name" ref={register} name='fname' />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter Your Last name" ref={register} name='lname' />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Enter Your E-mail Address" ref={register} name='email' />
                    </div>
                    <div className="col">
                        <select className="form-control" id="state" ref={register} name='stats'>
                            <option value="">Select Your State</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Assam">Assam</option>
                            <option value="Goa">Goa</option>
                            <option value="Manipur">Manipur</option>
                        </select>
                    </div>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}

export default Form
