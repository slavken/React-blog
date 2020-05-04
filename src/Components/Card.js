import React from 'react';
import PropTypes from 'prop-types';
import img from '../assets/ava.png';

export const Card = props => {
    return (
        <div className="media mb-5">
            <img 
                src={img}
                width={150}
                height={150}
                className="mr-3"
                alt="..."
            />
            <div className="media-body">
                <a href={'/posts/' + props.id}>
                    <h5>{props.title}</h5>
                </a>
                <p>{props.body}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    img: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
};