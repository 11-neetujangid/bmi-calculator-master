import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router';
import { userData, user } from '../../Actions/Action';

const Users = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const data = useSelector((state) => state.data)
    console.log(data);
    const users = useSelector((state) => state.user)
    console.log(users);

    const handleChange = (val) => {
        console.log({ [val.target.name]: val.target.value });
        dispatch(userData(val.target.value))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(user({ data, id: new Date().getTime() }));
    }
    const handleSelect = (id) => {
        console.log("dat", id)
        history.push(`./App/${id}`);
    }
    return (
        <>
            <div className='container'>
                <div className='row center'>
                    <h1 className='white-text'>User Form</h1>
                    <div style={{ display: "inline-flex" }}>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            onChange={handleChange}
                        />
                        <button
                            id="form-btn"
                            className="submit-btn"
                            type="button"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                    <table className="card">
                        <tbody className="white-text">
                            {
                                users.map((record) => (
                                    <tr key={record.id}>
                                        {/* <h6>{record.id}</h6> */}
                                        <h6>{record.data}</h6>
                                        <td><button className="btn btn-outline-primary" onClick={() => handleSelect(record.id)} >select</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Users;