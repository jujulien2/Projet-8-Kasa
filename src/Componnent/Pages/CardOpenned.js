import { useParams } from 'react-router-dom';
import ListCards from '../../InformationsCards.json';
import Caroussel from '../Caroussel';

const CardOpenned = () => {
    const { id } = useParams();
    const filteredCards = ListCards.filter((cards) => cards.id === id);
    return (
        <div>
            {filteredCards.map((item) => (
                <div key={item.id}>
                    <Caroussel>
                        <img src={item.pictures} />
                    </Caroussel>

                </div>
            ))}
        </div>
    );
};

export default CardOpenned;

