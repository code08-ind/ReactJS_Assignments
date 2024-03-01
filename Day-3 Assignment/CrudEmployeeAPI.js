import React, { useState } from 'react';
import { empServiceObj } from '../services/empservice';

const CrudEmployeeAPI = () => {
    document.title = "Employee Crud System";

    let [empno, setEmpNo] = useState("");
    let [empname, setEmpName] = useState("");
    let [empjob, setEmpJob] = useState("");
    let [empsal, setEmpSal] = useState("");
    let [deptno, setDeptNo] = useState("");

    let [emps, setEmps] = useState([]);

    const getAllEmps = () => {
        empServiceObj.getAllEmployees().then(resData => {
            setEmps(resData.data);
        });
    }

    const addEmp = () => {
        let addedEmp = {
            empno,
            empname,
            empjob,
            empsal,
            deptno
        }
        empServiceObj.addEmployee(addedEmp).then(resData => {
            alert("Emp Added");
            getAllEmps();
            clearInputFields();
        });
    }

    const clearInputFields = () => {
        setEmpNo("");
        setEmpName("");
        setEmpJob("");
        setEmpSal("");
        setDeptNo("");
    }

    const deleteEmp = (eno) => {
        empServiceObj.deleteEmployee(eno).then(resData => {
            alert("Emp Deleted");
            getAllEmps();
        });
    }

    const selectEmp = (eno) => {
        empServiceObj.getEmployeeById(eno).then(getEmp => {
            setEmpNo(getEmp.data.empno);
            setEmpName(getEmp.data.empname);
            setEmpJob(getEmp.data.empjob);
            setEmpSal(getEmp.data.empsal);
            setDeptNo(getEmp.data.deptno);
        });
    }

    const updateEmp = () => {
        let updatedEmpData = {
            empno,
            empname,
            empjob,
            empsal,
            deptno
        }
        empServiceObj.updateEmployee(updatedEmpData).then(fetchedDept=>{
            getAllEmps();
            clearInputFields(); 
        });
    }

    return (
        <>
            <h2>Employees List</h2>
            <br />
            <input type="text" placeholder='Emp No' value={empno} onChange={(e) => { setEmpNo(e.target.value) }} />
            <br />
            <input type="text" placeholder='Emp Name' value={empname} onChange={(e) => { setEmpName(e.target.value) }} />
            <br />
            <input type="text" placeholder='Emp Job' value={empjob} onChange={(e) => { setEmpJob(e.target.value) }} />
            <br />
            <input type="text" placeholder='Emp Sal' value={empsal} onChange={(e) => { setEmpSal(e.target.value) }} />
            <br />
            <input type="text" placeholder='Dept No' value={deptno} onChange={(e) => { setDeptNo(e.target.value) }} />
            <br />
            <br />
            <br />
            <div>
                <button onClick={getAllEmps}>Get All Emps</button>
                <button onClick={addEmp}>Add Emp</button>
                <button onClick={updateEmp}>Update Emp</button>
            </div>
            <br />
            <hr />
            <br />
            <table border={1}>
                <tr>
                    <th>Emp No</th>
                    <th>Emp Name</th>
                    <th>Emp Job</th>
                    <th>Emp Sal</th>
                    <th>Dept No</th>
                    <th>Operation</th>
                </tr>
                {emps.map((emp, index) => {
                    return (
                        <tr>
                            <td>{emp.empno}</td>
                            <td>{emp.empname}</td>
                            <td>{emp.empjob}</td>
                            <td>{emp.empsal}</td>
                            <td>{emp.deptno}</td>
                            <td align='center'>
                                <a href="javascript:void(0);" style={{ textDecoration: "none", color: "red" }} onClick={() => { deleteEmp(emp.empno) }}>
                                    Delete
                                </a>
                                &nbsp;|&nbsp;
                                <a href="javascript:void(0);" style={{ textDecoration: "none", color: "green" }} onClick={() => { selectEmp(emp.empno) }}>
                                    Select
                                </a>
                            </td>
                        </tr>
                    );
                })}
            </table >
        </>
    );
}

export default CrudEmployeeAPI;