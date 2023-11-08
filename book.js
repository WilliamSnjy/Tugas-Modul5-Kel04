import {React, Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import CardBig from '../component/CardBig';
import CardSmall from '../component/CardSmall';
import './book.css';

const Book = () => {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    
    const navigate = useNavigate();

    const data = [
        {
            title: "Narnia", id: 1,
            rate: 4,
            genre: "Adventure", img:
                "https://th.bing.com/th/id/OIP.vFX50yOmv1qNHBv-eaBrwQAAAA?pid=ImgDet&rs=1",
            desc:"Four kids travel through a wardrobe to the land of Narnia and learn of their destiny to free it with the guidance of a mystical lion."
        },
        {
            title: "Harry Potter :deadly Hallows  ", id: 2,
            rate: 4,
            genre: "Mystery,supernatural", img:
                "https://dryuc24b85zbr.cloudfront.net/tes/resources/6441170/image?width=500&height=500&version=1474643904786",
            desc:"As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows."
        },{
            title: "Unleashed", id: 3,
            rate: 3,
            genre: "Romance", img:
                "https://images.squarespace-cdn.com/content/v1/59e235dcd7bdcec81eb68962/1575860872067-04EH3B6LX0ZNNXH26H88/ke17ZwdGBToddI8pDm48kD755XqWqn8HkRX8WSTt5GJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URwn7vetbNoOrjGqAVoZN5bz1XPY0_Ev1nDpBBPOnwUda4oDI66FEaoPF3aKRzQZjg/Romance+Unleashed+by+Diana+Plamer.jpg",
            desc:"A man enslaved by the mob since childhood and raised into behaving like a human attack dog escapes his captors and attempts to start a new life."
        },
        {
            title: "Twilight", id: 4,
            rate: 4,
            genre: "romance, mystery", img:
                "https://th.bing.com/th/id/OIP.E9TgvacMS87W-wi6oZnWZQHaJl?pid=ImgDet&rs=1",
            desc:"When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire."
        },
        {
            title: "Mirror", id: 5,
            rate: 4,
            genre: "Mystery", img:
                "https://th.bing.com/th/id/OIP.P9bW-BW9o-wpsFow4hEL3gHaLH?pid=ImgDet&rs=1",
            desc:"An ex-cop and his family are the target of an evil force that is using mirrors as a gateway into their home."
        },
        {
            title: "The Ghost finder", id: 6,
            rate: 4,
            genre: "mistery,Thriller", img:
                "https://i.pinimg.com/originals/a4/e5/51/a4e5515f2c0a619ac317681e1ff87c60.jpg",
            desc:"Spirit Medium Rob Thompson, Witch Megan Deputy and paranormal investigator Daniel Klaes. Traveling the country coast to coast they investigate and video document claims of paranormal activity, elemental entities, aliens and ancient beings."
        },
    ];

    const navigateToDetailBook = (item) => {
        navigate('/book/detail/${item.id}', { state: { bookData: item } });
    };

    return (
        <>
            <p id="books">Top Books</p>
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
                            onClick={() => navigateToDetailBook(item)} 
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
                                onClick={() => navigateToDetailBook(item)} 
                            />
                            {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Book;
