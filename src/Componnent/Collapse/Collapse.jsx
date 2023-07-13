import React, { useState } from 'react';

const Collapse = ({ title, text, index, cssCollapse }) => {
    // met la valeur à null de base, donc quand on arrive sur la page le contenu n'est pas actif
    const [clicked, setClicked] = useState(null)


    const toggle = index => {
        // si il y a index (contenu affiché) alors on le ferme (remet à null)
        if (clicked === index) {
            return setClicked(null)
        }
        // ci-dessous le setclicked(index) veut dire : à l'appel de la fonction toggle au clic, alors le setclicked est égale à l'index du tableau, donc il affiche le contenu
        setClicked(index)

    }
    return (
        <div>
            <div className={cssCollapse}> <h2>{title}</h2>
                <i className={`${clicked === index ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"}`} onClick={() => toggle(index)}></i>


            </div>

            <div className={`${clicked === index ? 'content' : 'hide'}`}>

                <div>{text}</div>

            </div>

        </div>
    );
};

export default Collapse;