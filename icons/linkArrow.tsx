import React from 'react';

interface IProps {
    color: 'black' | 'yellow',
}

const LinkArrow = ({color}:IProps) => {
    return <svg width="12" height="11" viewBox="0 0 12 11" stroke={color === 'yellow'? "#FBFF53": "#000000"}  xmlns="http://www.w3.org/2000/svg">
        <line y1="-0.75" x2="12.8463" y2="-0.75" transform="matrix(-0.713564 -0.70059 0.713564 -0.70059 11.1665 9)" strokeWidth="1.5"/>
        <line x1="10.4165" y1="10" x2="10.4165" y2="1"  strokeWidth="1.5"/>
        <line x1="11.1665" y1="9.75" x2="1.99987" y2="9.75" strokeWidth="1.5"/>
    </svg>
}

export default LinkArrow;