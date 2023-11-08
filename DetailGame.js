import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import './detail.css'; 

function DetailGame() {
    const { state } = useLocation();
    const gameData = state && state.gameData;

    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    if (!gameData) {
        return <div className="container">No datas available.</div>;
    }

    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < gameData.rate) {
            stars.push(<AiFillStar key={i} color={STAR_COLOR} size={STAR_SIZE} />);
        } else {
            stars.push(<AiFillStar key={i} color="#ccc" size={STAR_SIZE} />);
        }
    }

    return (
        <div className="container">
            <h1>{gameData.title}</h1>
            <img src={gameData.img} alt={gameData.title} className="detail-img" />
            <p className="detail-stars">{stars}</p>
            <p className="detail-detail">Genre: {gameData.genre}</p>
            <p className="detail-detail">Description: {gameData.desc}</p>
        </div>
    );
}

export default DetailGame;