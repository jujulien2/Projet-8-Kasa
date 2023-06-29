import { useParams } from 'react-router-dom';
import ListCards from '../../../src/informationsCards.json'
import Caroussel from '../Caroussel';
import CardContain from '../CardContain';

const CardOpenned = () => {
    const { id } = useParams();
    const filteredCards = ListCards.filter((card) => card.id === id);
    // ci-dessus on fait correspondre l'id du fichier json a celui de la page 
    const pics = filteredCards[0].pictures;
    //  ci-dessus puisque filtercards est un tableau qui correspond toujours en fonction de la page ouverte alors il affichera les images de cette page en question
    return (
        <div>
            {filteredCards.map((item) => (
                <div key={item.id}>
                    <Caroussel>
                        {pics.map((pic, index) => (
                            <div key={index}>
                                {/* condition si le pics.lenght est supp à 1 alors les flêches sont là sinon non. */}
                                {pics.length > 1 ? (
                                    <>
                                        <i className="fa-solid fa-chevron-left fa-6x"></i>
                                        <i className="fa-solid fa-chevron-right fa-6x"></i>
                                    </>

                                ) : null}

                                <img key={index} src={pic} alt='images' />
                            </div>
                        ))}
                    </Caroussel>
                    <div>
                        <CardContain>
                            <div className='textLeftSide'>
                                <p>{item.title}</p>
                                <p>{item.location}</p>
                                <p>{item.tags}</p>
                                <div className='descriptionCollapse'></div>
                            </div>
                            <div className='textRightSide'>
                                <p>{item.host.name}</p>
                                <img src={item.host.picture}></img>
                                <div className='rate'></div>
                                <div className='equipementCollapse'></div>

                            </div>

                        </CardContain>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardOpenned;

