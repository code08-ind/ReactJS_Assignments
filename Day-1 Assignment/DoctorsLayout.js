import React from 'react';
import pic1 from '../images/pic1.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';
import '../Layout.css';
import { IoStar } from "react-icons/io5";

const DoctorsLayout = () => {
    let doctors = [
        {
            doctorid: 101,
            doctorName: "Sheryln Sharma",
            designation: "Gastologist",
            rating: 5,
            avatar: pic1
        },
        {
            doctorid: 102,
            doctorName: "Dipti Verma",
            designation: "Dermatologist",
            rating: 4,
            avatar: pic2
        },
        {
            doctorid: 103,
            doctorName: "Pooja Gupta",
            designation: "Orthologist",
            rating: 4,
            avatar: pic3
        },
        {
            doctorid: 104,
            doctorName: "Mridusmita",
            designation: "Neurologist",
            rating: 5,
            avatar: pic4
        },
        {
            doctorid: 101,
            doctorName: "Sheryln Sharma",
            designation: "Gastologist",
            rating: 5,
            avatar: pic1
        },
        {
            doctorid: 102,
            doctorName: "Dipti Verma",
            designation: "Dermatologist",
            rating: 4,
            avatar: pic2
        },
        {
            doctorid: 103,
            doctorName: "Pooja Gupta",
            designation: "Orthologist",
            rating: 4,
            avatar: pic3
        },
        {
            doctorid: 104,
            doctorName: "Mridusmita",
            designation: "Neurologist",
            rating: 5,
            avatar: pic4
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i} style={{color:"green"}}><IoStar/></span>);
        }
        return stars;
    };

    return (
        <>
            {doctors.map((doctor, index) => {
                return (
                    <div key={index} className='card'>
                        <img src={doctor.avatar} alt={doctor.doctorName} />
                        <h5>{doctor.doctorName}</h5>
                        <p><span>{doctor.doctorid}</span> | <span>{doctor.designation}</span></p>
                        <p>{renderStars(doctor.rating)}</p>
                        <button>Book Appointment</button>
                    </div>
                );
            })}
        </>
    );
}

export default DoctorsLayout;
