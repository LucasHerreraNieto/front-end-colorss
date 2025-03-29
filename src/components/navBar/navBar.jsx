import * as React from 'react';
import Btn_Mode from '../../assets/mode';
import Button from '../../assets/btn_app';


const NavBar = ({user}) => {
    
      
    return ( 
        <nav className=' border-r-2 border-black  md:w-2/12 md:h-full p-3 flex flex-col justify-between'>
            <p>{user}</p>
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