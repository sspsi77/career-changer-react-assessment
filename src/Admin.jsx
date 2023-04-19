import React from 'react';
import Layout from "./Layout"
import './Style.css';
const Admin = (props) => {
    return(
        <div>
            <div className="admin">
                <h1>Generation Thailand Home- Admin Section</h1>
                <div>
                <button onClick={() => props.onClick("user")}>User Home Sector</button>
                <button onClick={() => props.onClick("admin")}>Admin Home Sector</button>
                </div>
            </div>
            <InputData newEmployee={props.newEmployee} onChange={props.onChange} onSubmit={props.onSubmit} />
            <TableAdmin employees={props.employees} onDelete={props.onDelete} />
        </div>
    );
 
 }
 
 const InputData = (props) => {
    return (
        <div>
            <h2 className="admin_h2">Creat User Here</h2>
            <form className="admin_input" onSubmit={props.onSubmit} >
                <input 
                    type="text" 
                    placeholder='Name'
                    name="name"
                    value={props.newEmployee.name || ""}
                    onChange={props.onChange} 
                />
                <input 
                    type="text" 
                    placeholder='Last Name'
                    name='lastname'
                    value={props.newEmployee.lastname || ""}
                    onChange={props.onChange}  
                />
                <input 
                    type="text" 
                    placeholder='Position'
                    name='position'
                    value={props.newEmployee.position || ""}
                    onChange={props.onChange}  
                />
                <button type='submit'>Save</button>
            </form>
        </div>
    );
 }

 const TableAdmin = (props) => {
    return(
        <div className="admin_table">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee, index) => {
                    return (
                        <tr>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.position}</td>
                            <td><button onClick={() => props.onDelete(index)}>Delete</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );
 }
 export default Admin