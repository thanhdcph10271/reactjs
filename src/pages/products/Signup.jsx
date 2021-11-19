import React from 'react'
import { signup } from '../../api/authAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { authenticate } from '../../authenticate';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        console.log(data)
        signup(data).then((response)=>{
            console.log("Đăng ký",response.data);
            authenticate(response.data.user);
            toast.success('Đăng ký thành công');
            navigate("/signin");
        })
        .catch((error) => toast.error(error.response.data));
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h2>Đăng ký</h2>
                <input type="email"  {...register('email')} placeholder="Email của bạn" />
            </div>
            <div>
                <input type="password" {...register('password')} placeholder="Mật khẩu" />
            </div>
            <button>Đăng ký</button>
        </form>
    )
}

export default Signup;
