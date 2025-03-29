import * as React from 'react';
import Btn_Mode from '../../assets/mode';
import Button from '../../assets/btn_app';


const NavBar = ({user ="guest"}) => {
    
      
    return ( 
        <nav className='border-r-2 border-black  md:w-auto md:h-full p-3 flex flex-col justify-between items-center bg-white dark:bg-gray-900 fixed '>
            <p className='dark:text-white text-4xl'>{user}</p>
            <div className='flex flex-col items-center justify-center gap-5'>
                <Button text={"search"}/>
                <Button text={"home"}/>
                <Button text={"user"}/>
            </div>
            <Btn_Mode/>
        </nav>
        );
}
 
export default NavBar;