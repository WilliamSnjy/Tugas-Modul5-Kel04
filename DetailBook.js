import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import './detail.css'; 

function DetailBook() {
    const { state } = useLocation();
    const bookData = state && state.bookData;

    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    if (!bookData) {
        return <div className="container">No datas available.</div>;
    }

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < bookData.rate) {
            stars.push(<AiFillStar key={i} color={STAR_COLOR} size={STAR_SIZE} />);
        } else {
            stars.push(<AiFillStar key={i} color="#ccc" size={STAR_SIZE} />);
        }
    }

    return (
        <div className="container">
            <h1>{bookData.title}</h1>
            <img src={bookData.img} alt={bookData.title} className="detail-img" />
            <p className="detail-stars">{stars}</p>
            <p className="detail-detail">Genre: {bookData.genre}</p>
            <p className="detail-detail">Description: {bookData.desc}</p>
        </div>
    );
}

export default DetailBook;