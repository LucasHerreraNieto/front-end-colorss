import { useState, useEffect } from "react";
import Palette from "../palette/palette";

const SearchPage = () => {
    const palettesColors = Array(26).fill({ colors: ["#AAA", "#BBB", "#111", "#000", "#555"] });
    

    return ( 
        <div className="dark:bg-gray-900 flex flex-wrap justify-center gap-3 m-3 items-start h-fit ">
            {palettesColors.map((palette, index) => {
                const randomNum = Math.floor(Math.random() * palettesColors.length);
                return <Palette key={index} palette={palette} num={index} randomNum={randomNum} />
            })}
        </div>
    );
};

export default SearchPage;
