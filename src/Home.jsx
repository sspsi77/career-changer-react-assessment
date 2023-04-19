import React from 'react';
import Layout from "./Layout";
import './Style.css';
import { useState } from "react";
import Admin from './Admin';
import User from './User';

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  
  const [sector, setSector] = useState("")
  
  const handleClick = (value) => {
    setSector(value)
  };

  const [newEmployee, setNewEmployee] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const [employees, setEmployees] = useState(mockEmployees);

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmployees((prev) => {
      return [...prev, newEmployee];
    });
    setNewEmployee({});
  };

  const handleDelete = (removeIndex) => {
    setEmployees((prev) => {
      return prev.filter((employee, index) => index !== removeIndex);
    });
  };

  if(sector === "admin") {
    return (
      <Layout>
        <Admin 
          onClick={handleClick} 
          newEmployee={newEmployee}
          employees={employees} 
          onChange={handleChange}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
        />
      </Layout>
    );
  } else if(sector === "user") {
    return (
      <Layout>
        <User 
          onClick={handleClick} 
          employees={employees}
        />
      </Layout>
    );
  } else {
    return (
      <Layout>
        <div className="home"> 
          <h1>Generation Thailand React - Assessment</h1>
          <div>
              <button onClick={() => handleClick("user")}>User Home Sector</button>
              <button onClick={() => handleClick("admin")}>Admin Home Sector</button>
          </div>
        </div>
      </Layout>
    )
  } 
}

export default Home
