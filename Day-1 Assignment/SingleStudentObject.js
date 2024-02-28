import React from 'react';

const SingleStudentObject = () => {
    let student = {
        sid: 101,
        sname: "Raghav Sood",
        course: "B.Tech",
        age: 23,
        total: 80
    }
    return (
        <>
            <h1>Student Details</h1>
            <table border={2}>
                <tr>
                    <th colSpan={2}>Student Details</th>
                </tr>
                <tr>
                    <td>sid</td>
                    <td>{student.sid}</td>
                </tr>
                <tr>
                    <td>sname</td>
                    <td>{student.sname}</td>
                </tr>
                <tr>
                    <td>course</td>
                    <td>{student.course}</td>
                </tr>
                <tr>
                    <td>age</td>
                    <td>{student.age}</td>
                </tr>
                <tr>
                    <td>total</td>
                    <td>{student.total}</td>
                </tr>
            </table>
        </>
    );
}

export default SingleStudentObject;
