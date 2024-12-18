import './formRegister.css';

const FormRegister = ({ onSwitchToLogin }) => {
    return ( 
        <form className="flex flex-col items-center formRegister justify-evenly">
            <label className="flex flex-col">
                <span className='text-2xl text-white text-shadow'>userName</span>
                <input type="text" name="username" className='input'/>
            </label>
            <label className="flex flex-col">
                <span className='text-2xl text-white text-shadow'>email</span>
                <input type="email" name="email" className='input'/>
            </label>
            <label className="flex flex-col">
                <span className='text-2xl text-white text-shadow'>password</span>
                <input type="password" name="password" className='input'/>
            </label>
            <button type="submit" className='btn text-shadow'>Register</button>
            <p className='text-white text-shadow'>Already have an account? <span onClick={onSwitchToLogin} className='text-cyan-700 text-shadow cursor-pointer'>Login</span></p>
        </form>
    );
}

export default FormRegister;
