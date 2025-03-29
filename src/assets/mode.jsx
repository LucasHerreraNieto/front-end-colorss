import { useState, useEffect } from 'react'
import './mode.css';
import SunnyIcon from '@mui/icons-material/Sunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';

const Btn_Mode = () => {
    const [mode, setMode] = useState(() => {
        return localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });

    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", mode === "dark");
        localStorage.setItem("theme", mode);
    }, [mode]);

    const handleChangeTheme = () => {
        setMode(prevMode => prevMode === "light" ? "dark" : "light");
    };

    return ( 
        <div className="flex items-center gap-2">
            {mode === "light" ? (
                <SunnyIcon className='text-yellow-500 text-2xl'/>
            ) : (
                <BedtimeIcon className='text-white text-2xl'/>
            )}

            <label className='switch'>
                <input type="checkbox" checked={mode === "dark"} onChange={handleChangeTheme}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Btn_Mode;
