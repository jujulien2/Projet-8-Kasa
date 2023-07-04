import { Link, useParams } from 'react-router-dom';
import ListCards from '../informationsCards.json'
import Caroussel from '../Componnent/caroussel/Caroussel';
import DescriptionCard from '../Componnent/descriptionLogements/DescriptionLogement';
import Collapse from '../Componnent/Collapse/Collapse';
import '../Styles/logementContain/logementContain.css'
import '../Styles/Collapse/collapse.css'
import Error from '../Pages/Error';





const CardOpenned = () => {
    const { id } = useParams();
    const filteredCards = ListCards.filter((card) => card.id === id);
    // ci-dessus on fait correspondre l'id du fichier json a celui de la page 
    if (filteredCards.length === 0) {
        return <Error />; // Utilisez ici votre composant Error
    }
    const pics = filteredCards[0].pictures;

    // Si l'id n'est pas valide, affiche le composant Error à la place


    //  ci-dessus puisque filtercards est un tableau qui correspond toujours en fonction de la page ouverte alors il affichera les images de cette page en question
    return (
        <div>
            <div className='wrapperCaroussel'>
                {pics.map((items, index) => (
                    <Caroussel key={index} arrayPictures={pics} image={items} />

                ))}

            </div>


            <div className='textOfCardWrapper'>
                {filteredCards.map((items) => (

                    <div key={items.id}>
                        <DescriptionCard key={items.id} items={items} />



                        <div className='collapseCardWrapper'>
                            <div className='wrapperCollapse'> <Collapse items={items} cssCollapse={'CollapseLogement'} title={'Description'} text={items.description} /></div>
                            <div className='wrapperCollapse'> <Collapse items={items} cssCollapse={'CollapseLogement'} title={'Équipements'} text={items.equipments.map((contain) => (
                                <p>{contain}</p>
                            ))} /></div>

                        </div>
                    </div>

                ))}
            </div>

        </div>
    );
};

export default CardOpenned;





