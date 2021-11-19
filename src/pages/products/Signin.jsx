import React from 'react'
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { auth } from '../../firebase/firebase.config';
import { useForm } from 'react-hook-form';
import { signin } from '../../api/authAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { authenticate } from '../../authenticate';


const Signin = () => {
    const provider = new GoogleAuthProvider();
    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();
    const googleSignin = async() =>{
        const {user} = await signInWithPopup(auth,provider);
        console.log(user);
    };
    const onSubmit = (data)=>{
        signin(data).then((response)=>{
            console.log(response.data.user);
            toast.success('Đăng nhập thành công');
            authenticate(response.data.user);

            if(response.data.user.id ===1 ){
                navigate('/admin');
            }else{
                navigate('/');
            }
        })
        .catch((error)=> toast.error(error.response.data))
    };
    return (
        <div>
                <h2>Đăng nhập</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div>
                    <input type="email" {...register('email')} placeholder="Email của bạn" />
                    </div>
                    <div>
                        <input type="password" {...register('password')} placeholder="Mật khẩu" />
                    </div>
                    <button>Đăng nhập</button>
                </form>
        </div>
    )
}

export default Signin;
