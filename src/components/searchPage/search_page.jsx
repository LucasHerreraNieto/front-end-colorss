import { useState, useEffect } from "react";
import Palette from "../palette/palette";

const SearchPage = () => {
    const palettesColors = Array(80).fill({ colors: ["#AAA", "#BBB", "#111", "#000", "#555"] });
    
    // Estado para manejar el número aleatorio
    const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * palettesColors.length));

    // Actualizar randomNum en intervalos regulares
    useEffect(() => {
        const interval = setInterval(() => {
            setRandomNum(Math.floor(Math.random() * palettesColors.length));
        }, 1000); // Cambia el tamaño cada 1000ms (1 segundo)

        return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
    }, [palettesColors.length]);

    return ( 
        <div className="dark:bg-gray-900 flex flex-wrap justify-center gap-3 m-3 items-start h-fit">
            {palettesColors.map((palette, index) => {
                return <Palette key={index} palette={palette} num={index} randomNum={randomNum} />
            })}
        </div>
    );
};

export default SearchPage;
