import React, { useState } from 'react';
import '../../Styles/Caroussel/caroussel.css'


const Caroussel = ({ arrayPictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0)



    const prevPicture = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? arrayPictures.length - 1 : prevIndex - 1));
    };

    const nextPicture = () => {
        setCurrentIndex((prevIndex) => (prevIndex === arrayPictures.length - 1 ? 0 : prevIndex + 1));

    };
    return (
        <div className='caroussel'>
            {arrayPictures.length > 1 ? (
                <>
                    <i className="fa-solid fa-chevron-left fa-6x" onClick={prevPicture}></i>
                    <i className="fa-solid fa-chevron-right fa-6x" onClick={nextPicture}></i>
                    <div className='paginationCaroussel'>{`${currentIndex + 1} / ${arrayPictures.length}`}</div>

                </>

            ) : null}
            {arrayPictures.map((picture, index) => (
                <img
                    key={index}
                    src={picture}
                    alt={`image-${index}`}
                    className={index === currentIndex ? 'active' : 'inactive'}
                />
            ))}

        </div>

    );
};

export default Caroussel;

// export default Caroussel;

// import React, { useState } from 'react';
// import '../../Styles/logementContain/caroussel.css';

// const Caroussel = ({ itemData, arrayPictures }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const prevPicture = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? arrayPictures.length - 1 : prevIndex - 1));
//     };

//     const nextPicture = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === arrayPictures.length - 1 ? 0 : prevIndex + 1));
//     };

//     return (
//         <div className='caroussel'>
//             {arrayPictures.length > 1 ? (
//                 <>
//                     <i className="fa-solid fa-chevron-left fa-6x" onClick={prevPicture}></i>
//                     <i className="fa-solid fa-chevron-right fa-6x" onClick={nextPicture}></i>
//                 </>
//             ) : null}
//             {arrayPictures.map((picture, index) => (
//                 <img
//                     key={index}
//                     src={picture}
//                     alt={`image-${index}`}
//                     className={index === currentIndex ? 'active' : 'inactive'}
//                 />
//             ))}
//         </div>
//     );
// };

// export default Caroussel;