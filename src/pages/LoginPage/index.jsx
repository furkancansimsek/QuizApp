import React, { useEffect, useState } from 'react'
import useUser from '../../store/app/hooks';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const { user, setUser, removeUser } = useUser();

    const navigate = useNavigate();

    useEffect(() => {
        removeUser();
    }, []);

    const loginHandle = (e) => {
        e.preventDefault();
        if (!user?.class || !user?.name) {
            alert("Kullanıcı bilgileri eksik");
        } else {
            navigate('/quiz');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-[#EEEDEB]">
                <div className='flex gap-4 flex-col items-center shadow-lg p-8 bg-white rounded-xl w-[400px]'>
                    <h1 className='text-xl font-bold'>Giriş Bilgileri</h1>
                    <form onSubmit={loginHandle} className='flex flex-col gap-4 w-full'>
                        <input name="class" onChange={handleChange} className='border rounded p-2 outline-none' type="text" placeholder="Sınıf" />
                        <input name="name" onChange={handleChange} className='border rounded p-2 outline-none' type="text" placeholder="İsim Soyisim" />
                        <button className='bg-[#40A2E3] rounded py-2 text-white hover:bg-[#40A2E3]/90 transition' type="submit">Giriş Yap</button>
                    </form>
                </div>
            </div>
        </>
    )
}
