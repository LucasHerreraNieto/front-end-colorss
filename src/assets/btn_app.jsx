import { useState } from "react";

const Button = ({text}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
    
    };

    return ( 
        <button 
            id="btn-app" 
            className={isActive ? "btn-app-active" : "btn-app"} 
            onMouseDown={() => setIsActive(true)}  // Se activa al presionar
            onMouseUp={() => setIsActive(false)}
        >
        {text}
        </button>
    );
};

export default Button;
