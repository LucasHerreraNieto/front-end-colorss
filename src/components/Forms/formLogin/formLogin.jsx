import './formLogin.css'; 
const FormLogin = ({ onSwitchToRegister }) => { 
    return ( 
        <form className="flex flex-col items-center formLogin justify-evenly"> 
            <label className="flex flex-col"> 
                <span className='text-2xl text-white text-shadow'>userName</span> 
                <input type="text" name="username" className='input'/> 
            </label> 
            <label className="flex flex-col"> 
                <span className='text-2xl text-white text-shadow'>password</span> 
                <input type="password" name="password" className='input'/>
            </label> 
            <button type="submit" className='btn-login text-shadow'>Login</button>
            <p className='text-white text-shadow'>You don't have an account? <span onClick={onSwitchToRegister} className='text-cyan-700 text-shadow cursor-pointer'>Register</span></p> 
        </form> 
    );
} 
export default FormLogin