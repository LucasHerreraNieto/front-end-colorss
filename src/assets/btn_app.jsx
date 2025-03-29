import { useState } from "react";

const Button = ({ text }) => {
    const [isActive, setIsActive] = useState(false);

    return ( 
        <button 
            id="btn-app" 
            className={`${isActive ? "btn-app-active" : "btn-app "} dark:bg-gray-700 dark:text-white` }
            onMouseDown={() => setIsActive(true)}  // Se activa al presionar
            onMouseUp={() => setIsActive(false)}   // Se desactiva al soltar
        >
            {text}
        </button>
    );
};

export default Button;
