import './loginForm.css'
import { useState } from "react";


export default function LoginForm(){
    const [inputValue, setInputValue] = useState('');
    return(

        <div className='container'>
        {/* 로그인 폼같은 input ui */}
            <div className="input-gropu">
                <input type='text' name='text' className='input' value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}/>
                <label className={`label ${inputValue ? 'shrink' : ''}`}>First Name</label>
            </div>
        </div>
    )
}