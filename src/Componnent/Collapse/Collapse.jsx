import React, { useState } from 'react';

const Collapse = ({ title, text, index, cssCollapse }) => {
    const [clicked, setClicked] = useState(false)


    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <div>
            <div className={cssCollapse}> <h2>{title}</h2>
                <i className={`${clicked === index ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-up"}`} onClick={() => toggle(index)}></i>


            </div>

            <div className={`${clicked === index ? 'content' : 'hide'}`}>

                <p>{text}</p>

            </div>

        </div>
    );
};

export default Collapse;