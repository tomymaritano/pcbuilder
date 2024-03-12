import React from 'react';
import { Box } from '@chakra-ui/react';
import './SpinningText.css'; // Asegurándote de que tu CSS está aquí


const SpinningTextAroundImage = ({ text, children }) => {
    const length = text.length;
    const deg = 360 / length;

    return (
        <div className="spinning-text-wrapper">
            <div className="spinning-text">
                {text.split("").map((letra, i) => (
                    <span
                        key={i}
                        style={{
                            transform: `rotate(${deg * i}deg)`,
                            transformOrigin: "0 40px", // Ajusta este valor para cambiar el radio del círculo
                        }}
                    >
                        {letra}
                    </span>
                ))}
            </div>
            {children}
        </div>
    );
};

export default SpinningTextAroundImage;

