import FormLogin from "../formLogin/formLogin";
import FormRegister from "../formRegister/formRegister";
import { useState } from "react";
import './formsPage.css';

const FormPages = () => {
    const [firstView, setFirstView] = useState(true);

    return ( 
        <div className="flex flex-col justify-evenly items-center h-full formsPage p-24"> 
            <h1 className="text-6xl tittle text-white">Colorss</h1>
            {firstView ? (
                <FormLogin onSwitchToRegister={() => setFirstView(false)} />
            ) : (
                <FormRegister onSwitchToLogin={() => setFirstView(true)} />
            )}
        </div>
    );
}

export default FormPages;
