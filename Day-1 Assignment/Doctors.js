import React from 'react';

const Doctors = () => {
    let doctors = [
        {
            doctorid: 101,
            doctorName: "Raghav Sood",
            designation: "Sr. Gastologist",
            experience: 25,
            contactNumber: 7897789786
        },
        {
            doctorid: 102,
            doctorName: "Ravi Kumar",
            designation: "Dermatologist",
            experience: 12,
            contactNumber: 7897789788
        },
        {
            doctorid: 103,
            doctorName: "Shivik Chaturvedi",
            designation: "Orthologist",
            experience: 10,
            contactNumber: 7897789783
        },
        {
            doctorid: 104,
            doctorName: "Raman Kumar",
            designation: "Neurologist",
            experience: 5,
            contactNumber: 7897789782
        }
    ];

    return (
        <>
            <h1>Doctor's Details</h1>
            <table border={1}>
                <tr>
                    <th>Doctor Id</th>
                    <th>Doctor Name</th>
                    <th>Designation</th>
                    <th>Experience</th>
                    <th>Total</th>
                </tr>
                {doctors.map((doctor, index) => {
                    return (
                        <tr key={index}>
                            <td>{doctor.doctorid}</td>
                            <td>{doctor.doctorName}</td>
                            <td>{doctor.designation}</td>
                            <td>{doctor.experience}</td>
                            <td>{doctor.contactNumber}</td>
                        </tr>
                    );
                })}
            </table>
        </>
    );
}

export default Doctors;
