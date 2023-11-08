import {React, Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import CardBig from '../component/CardBig';
import CardSmall from '../component/CardSmall';
import './game.css';

const Game = () => {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;

    const navigate = useNavigate();

    const navigateToDetailGame = (item) => {
        navigate('/game/detail/${item.id}', { state: { gameData: item } });
    };

    const data = [
        {
            title: "TABS", id: 1,
            rate: 4,
            genre: "Action,simulation",
             img:"https://th.bing.com/th/id/OIP.OdwUkVHI50TQy3sdRO2Q6QHaEP?pid=ImgDet&rs=1",
             desc:"Be the leader of red and blue wobblers from ancient lands, spooky places, and fantasy worlds. Watch them fight in simulations made with the wobbliest physics system ever created."

        },
        {
            title: "HoM", id: 2,
            rate: 4,
            genre: "Adventure,myth", img:
                "https://th.bing.com/th/id/OIP.9TC_CufYbHgmhqGBFvFPbAHaKk?pid=ImgDet&rs=1",
            desc:"Heroes of Myth is a 560,000-word interactive novel by Abigail C. Trevor, where your choices control the story. It's entirely text-based, without graphics or sound effects, and fueled by the vast, unstoppable power of your imagination."
        },{
            title: "DOOM", id: 3,
            rate: 3,
            genre: "Action,Shooting", img:
                "https://th.bing.com/th/id/OIP.k_OObx0r_GmsXN4-g3gKNgHaLG?pid=ImgDet&rs=1",
            desc:"Developed by id software, the studio that pioneered the first-person shooter genre and created multiplayer Deathmatch, DOOM returns as a brutally fun and challenging modern-day shooter experience. Relentless demons, impossibly destructive guns, and fast, fluid movement provide the foundation for intense, first-person combat – whether you’re obliterating demon hordes through the depths of Hell in the single-player campaign, or competing against your friends in numerous multiplayer modes. Expand your gameplay experience using DOOM SnapMap game editor to easily create, play, and share your content with the world."
        },
        {
            title: "Call of Duty II", id: 4,
            rate: 4,
            genre: "shooting, history", img:
                "https://th.bing.com/th/id/OIP.RBUek2kA7RuiI5gKu76OugHaK0?w=202&h=296&c=7&r=0&o=5&pid=1.7",
            desc:"Call of Duty® 2 redefines the cinematic intensity and chaos of battle as seen through the eyes of ordinary soldiers fighting together in epic WWII conflicts. The sequel to 2003's Call of Duty, winner of over 80 Game of the Year awards, Call of Duty 2 offers more immense, more intense, more realistic battles than ever before, thanks to the stunning visuals of the new COD™2 engine."
        },
        {
            title: "Bomberman", id: 5,
            rate: 4,
            genre: "Strategy", img:
                "https://i0.wp.com/nicerom.com/images/2017/11/64775_front.jpg?ssl=1",
            desc:"Play alone or with a friend in a Story Mode jam-packed with different levels. Re-experience classic Battle Mode"
        },
        {
            title: "rune factory 4", id: 6,
            rate: 4,
            genre: "Simulation, Farming, Adventure", img:
                "https://th.bing.com/th/id/OIP.tPbs6xxfGEK-8mhdbf-NIgHaIH?pid=ImgDet&rs=1",
            desc:"Welcome to Selphia, a region ruled by the Native Dragon Ventuswill...and you!"
        },

    ];

    return (
        <>
            <p id="games">Top Games</p>
            <div className="containerTop">
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                        <CardBig
                            title={item.title}
                            img={item.img}
                            genre={item.genre}
                            size={STAR_SIZE}
                            color={STAR_COLOR}
                            rate={item.rate}
                            onClick={() => navigateToDetailGame(item)} 
                        />
                        {data.length === index + 1 ? (
                            <div style={{ marginRight: 40 }} />
                        ) : null}
                    </Fragment>
                ))}
            </div>
            <div className="rowcoba">
                <div className="column">
                    <p id="movies">All Movies</p>
                    {data.map((item, index) => (
                        <Fragment key={item.id}>
                            <CardSmall
                                title={item.title}
                                img={item.img}
                                genre={item.genre}
                                size={STAR_SIZE}
                                color={STAR_COLOR}
                                rate={item.rate}
                                onClick={() => navigateToDetailGame(item)} 
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Game;
