import { useState } from "react";
import "./App.css";

function App() {
  const listEmployee = [
    {
      empId: 1,
      name: "Hafiedz",
      salary: 4500,
    },
    {
      empId: 2,
      name: "Mada",
      salary: 6000,
    },
    {
      empId: 3,
      name: "Matsushita",
      salary: 10000,
    },
  ];

  const [employees, setEmployees] = useState(listEmployee);

  const penambahanGaji = (id) => {
    setEmployees([
      ...employees.map((emp) => {
        if (emp.empId === id) {
          emp.salary = emp.salary + 500;
          return emp;
        } else {
          return emp;
        }
      }),
    ]);
  };

  const penguranganGaji = (id) => {
    setEmployees([
      ...employees.map((emp) => {
        if (emp.empId === id) {
          emp.salary = emp.salary - 500;
          return emp;
        } else {
          return emp;
        }
      }),
    ]);
  };

  return (
    <div>
      <h1>Data Gaji Karyawan</h1>
      <ul>
        {employees.map((emp) => {
          return (
            <li key={emp.empId}>
              <p>ID: {emp.empId}</p>
              <p>Name: {emp.name}</p>
              <p>Salary: {emp.salary}</p>
              <button onClick={() => penguranganGaji(emp.empId)}>
                Pengurangan Gaji
              </button>
              <button onClick={() => penambahanGaji(emp.empId)}>
                Penambahan Gaji
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
