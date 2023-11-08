import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig"; 
import CardSmall from "../component/CardSmall"; 
import "./Movie.css";

export default function Movie() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const poster = [
        {
            title: "John Wick 4", id: 1,
            rate: 4,
            genre: "action, crime",
            img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
            desc:"Condemned by the tyrannical High Table to be on the run for the rest of his life, deadly assassin maestro John Wick (2014) embarks on a Sisyphean mission of suicidal fury to decide his fate after the merciless carnage in John Wick: Chapter 3 - Parabellum (2019). At last, John's violent journey, fuelled by vengeance and grief, ultimately leads him to a fateful confrontation with his former employers, the crime masters that forced him into exile. And as the blood-stained vendetta to destroy those who pull the strings continues, old companions face the brutal consequences of friendship, and all-powerful, well-connected adversaries emerge to bring Wick's head on a platter. But talk is cheap--now guns have the final say. Can Baba Yaga, the grim messiah of death, make every bullet count in this bloody, once-and-for-all struggle for freedom?",
        },
        {
            title: "Doraemon", id: 2,
            rate: 4,
            genre: "Fantasy",
            img: "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/07/19/19-DORAEMON-2014139072.jpg",
            desc:"Doraemon, Nobita and his friends go to find Utopia, a perfect land in the sky where everyone lives with happiness, using an airship having a time warp function",
        },
        {
            title: "Twinkling Watermelon", id: 3,
            rate: 5,
            genre: "Romance, Comedy, Drama",
            img: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/09/B900512-Cover-Twinkling-Watermelon.jpg",
            desc:"High school student Eun Gyeol (Ryeo Un) has hearing-impaired parents, but he has a gift for music. He is a model student by day and plays the guitar in a band at night. One day, he visits a mysterious musical instruments store and travels to a strange place. There, Eun Gyeol meets Ha Yi-Chan (Choi Hyun-Wook), Choi Se-Kyung (Seol In-A) and Yoon Chung-A (Shin Eun-Soo). They form a band called Watermelon Sugar. Meanwhile,Ha Yi-Chann has a crush on Choi Se-Kyung, who is known as the Cello Goddess of Seowon Arts High School, and tries to win her heart. Yoon Chung-A is hearing-impaired. She is cold and aloof to others."
        },
        
    ];

    const navigateToDetailMovie = (item) => {
        navigate('/movie/detail/${item.id}', { state: { movieData: item } });
    };

    return (
        <>
            <p id="movies">Top Movies</p>
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetailMovie(item)} 
                        />
                        {poster.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {poster.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
                                onClick={() => navigateToDetailMovie(item)} 
                            />
                            {poster.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}
