import { useParams } from 'react-router-dom';
import ListCards from '../../informationsCards.json'
import Caroussel from '../Logements/Caroussel';
import DescriptionCard from '../Logements/DescriptionLogement';


const CardOpenned = () => {
    const { id } = useParams();
    const filteredCards = ListCards.filter((card) => card.id === id);
    // ci-dessus on fait correspondre l'id du fichier json a celui de la page 
    const pics = filteredCards[0].pictures;
    //  ci-dessus puisque filtercards est un tableau qui correspond toujours en fonction de la page ouverte alors il affichera les images de cette page en question
    return (
        <div>

            <div className='wrapperCaroussel'>
                {pics.map((pic, index) => (
                    <Caroussel key={index} itemData={pic} arrayPictures={pics} index={index} />
                ))}

            </div>
            <div className='descriptionLogement'>
                {filteredCards.map((items) => (
                    <DescriptionCard key={items.id} items={items} />
                ))}
            </div>

        </div>
    );
};

export default CardOpenned;





