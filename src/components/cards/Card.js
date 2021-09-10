import React, { useState } from 'react';
import './card.css';
/* import { infos } from '../../helpers/data';
 */
const Card = (props) => {

    const [showOption, setShowOption] = useState(false);

    return (
        <section className="card-container" onClick={() => setShowOption(!showOption)}>
            {showOption ? (
                <ul className="card-list">
                    {props.info.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })}

                </ul>
            ) : (
                <>
                    <section className="top-card">
                        <img className="card-img" src={props.info.img} alt={props.info.name}></img>
                    </section>
                    <section className="bottom-card">{props.info.name}</section>
                </>
            )}
        </section>
            
    );
}

export default Card;

