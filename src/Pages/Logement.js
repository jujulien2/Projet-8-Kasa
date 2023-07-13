import { useParams } from 'react-router-dom';
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

    if (filteredCards.length === 0) {
        return <Error />;
    }
    const pics = filteredCards[0].pictures;


    return (
        <div>
            <div className='wrapperCaroussel'>
                <Caroussel key={pics.index} arrayPictures={pics} image={pics.items} />
            </div>


            <div className='textOfCardWrapper'>
                {filteredCards.map((items) => (

                    < div key={items.id} >
                        <DescriptionCard key={items.id} items={items} />



                        <div className='collapseCardWrapper'>
                            <div className='wrapperCollapse'> <Collapse items={items} cssCollapse={'CollapseLogement'} title={'Description'} text={items.description} /></div>
                            <div className='wrapperCollapse'> <Collapse items={items} cssCollapse={'CollapseLogement'} title={'Équipements'} text={items.equipments.map((contain, index) => (
                                <p key={index}>{contain}</p>
                            ))} /></div>

                        </div>
                    </div>

                ))}
            </div>

        </div >
    );
};

export default CardOpenned;





