import React, { useState, useEffect } from 'react';

interface HireMeRgbButtonProps {
    onClick: () => void;
}

const HireMeRgbButton: React.FC<HireMeRgbButtonProps> = ({ onClick }) => {
    const [color, setColor] = useState<string>('rgb(0, 0, 0)');
    const [textColor, setTextColor] = useState<string>('black');
    const [, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomColor = `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
            setColor(randomColor);
            setTextColor(String(getTextColor(randomColor))); // Convert the return value of getTextColor to a string
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const getRandomValue = () => {
        return Math.floor(Math.random() * 256);
    };

    const getTextColor = (bgColor: string) => {
        // Calculate the luminance of the background color
        var rgb = bgColor.match(/\d+/g);
        // if rgb null give it 0.1
        if (!rgb) {
            return 0.1;
        }
        const luminance = (0.299 * parseInt(rgb[0]) + 0.587 * parseInt(rgb[1]) + 0.114 * parseInt(rgb[2])) / 255;

        // Return black or white based on the luminance
        return luminance > 0.5 ? 'black' : 'white';
    };

    const handleClick = () => {
        onClick(); // Call the onClick function passed as a prop
    };

    return (
        <>
            <a href="mailto:ibnunaufal5758@gmail.com">
            <button style={{ backgroundColor: color, color: textColor, borderRadius: '50px' }} className=' p-2 ' onClick={handleClick}>
                Hire Me
            </button>
            </a>
        </>
    );
};

export default HireMeRgbButton;
