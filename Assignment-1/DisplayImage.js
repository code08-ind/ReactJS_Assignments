import React from 'react';

const DisplayImage = () => {
    let imgUrl = "https://images.unsplash.com/photo-1516298252535-cf2ac5147f9b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <img src={imgUrl} height={100} width={100} alt='Racing Car' />
    );
}

export default DisplayImage;
