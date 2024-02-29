import React, { useState } from 'react';
import { MdDelete, MdTouchApp } from "react-icons/md";

const CrudEmployee = () => {
    document.title = "Employee Crud System";

    let emps = [
        { empno: 101, empname: "James", empjob: "Analyst", empsal: "50000", deptno: 13 },
        { empno: 102, empname: "Smith", empjob: "Consultant", empsal: "100000", deptno: 12 },
        { empno: 103, empname: "Travis", empjob: "Analyst", empsal: "50000", deptno: 16 },
        { empno: 104, empname: "Stuart", empjob: "Sr. Consultant", empsal: "150000", deptno: 11 },
        { empno: 105, empname: "Joe", empjob: "Manager", empsal: "200000", deptno: 18 },
    ];

    let [empno, setEmpNo] = useState("");
    let [empname, setEmpName] = useState("");
    let [empjob, setEmpJob] = useState("");
    let [empsal, setEmpSal] = useState("");
    let [deptno, setDeptNo] = useState("");

    let [operatedEmps, setOperatedEmps] = useState([]);

    const getAllEmps = () => {
        setOperatedEmps(emps);
    }

    const addEmp = () => {
        let tempArr = [...emps];
        tempArr.push({
            empno,
            empname,
            empjob,
            empsal,
            deptno
        });
        setOperatedEmps(tempArr);
        clearInputFields();
    }

    const clearInputFields = () => {
        setEmpNo("");
        setEmpName("");
        setEmpJob("");
        setEmpSal("");
        setDeptNo("");
    }

    const deleteEmp = (eno) => {
        const result = window.confirm("Are you sure you want to delete Employee?");
        if (result) {
            let tempArr = [...operatedEmps];
            let index = tempArr.findIndex(item => item.empno == eno);
            tempArr.splice(index, 1);
            setOperatedEmps(tempArr);
        }else{
            window.alert("Employee Not Deleted!!");
        }
    }

    const selectEmp = (eno) => {
        let getEmp = emps.find(item => item.empno == eno);
        setEmpNo(getEmp.empno);
        setEmpName(getEmp.empname);
        setEmpJob(getEmp.empjob);
        setEmpSal(getEmp.empsal);
        setDeptNo(getEmp.deptno);
    }

    const updateEmp = () => {
        let tempArr = [...operatedEmps];
        let index = tempArr.findIndex(item => item.empno == empno);
        tempArr[index].empname = empname;
        tempArr[index].empjob = empjob;
        tempArr[index].empsal = empsal;
        tempArr[index].deptno = deptno;
        setOperatedEmps(tempArr);
        clearInputFields();
    }

    let resultEmpArr = operatedEmps.map((emp) => {
        return (
            <tr>
                <td>{emp.empno}</td>
                <td>{emp.empname}</td>
                <td>{emp.empjob}</td>
                <td>{emp.empsal}</td>
                <td>{emp.deptno}</td>
                <td align='center'>
                    <a href="javascript:void(0);" style={{ textDecoration: "none", color: "red" }} onClick={() => { deleteEmp(emp.empno) }}>
                        <MdDelete size={25} />
                    </a>
                    &nbsp;|&nbsp;
                    <a href="javascript:void(0);" style={{ textDecoration: "none", color: "green" }} onClick={() => { selectEmp(emp.empno) }}>
                        <MdTouchApp size={25} />
                    </a>
                </td>
            </tr>
        );
    });
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
                {resultEmpArr}
            </table>
        </>
    );
}

export default CrudEmployee;
