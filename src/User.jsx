import React from 'react';
import Layout from "./Layout"
import './Style.css';
const User = (props) => {
    return(
        <div>
            <div className="user">
                <h1>Generation Thailand Home - User Section</h1>
                <div>
                    <button onClick={() => props.onClick("user")}>User Home Sector</button>
                    <button onClick={() => props.onClick("admin")}>Admin Home Sector</button>
                </div>
            </div>
            <TableUser employees={props.employees} />
        </div>
    );
 }
 
 const TableUser = (props) => {
    return(
        <div className="user_table">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map((employee) => {
                    return (
                        <tr>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.position}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );
 }
 export default User