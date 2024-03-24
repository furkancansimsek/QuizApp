import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import classNames from 'classnames';
import useApp from '../../store/app/hooks';
import { useNavigate } from 'react-router-dom';
import { questions } from '../../utils/questions';

export const ResultPage = () => {

    const { answers } = useApp();
    const navigate = useNavigate();

    useEffect(() => {
        answers.length != questions.length ? navigate("/") : null;
    }, [answers]);

    return (
        <>
            <div className="flex min-h-screen justify-center items-center bg-[#EEEDEB] p-4">
                <div className='flex gap-4 flex-col items-center shadow-lg p-8 bg-white rounded-xl'>
                    <h2 className='text-xl font-bold'>Sonuçlar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {answers?.map((answer, index) =>
                            <React.Fragment key={index}>
                                <div className="flex justify-between items-center bg-[#EEEDEB] w-[200px] rounded p-4">
                                    <span className='text-lg font-semibold'>{index + 1}. Soru</span>
                                    <div className="flex gap-2">
                                        <span className={classNames({
                                            'flex justify-center items-center p-2 rounded text-white': true,
                                            'bg-green-700': answer,
                                            'bg-gray-300': !answer,
                                        })}>
                                            <FaCheck />
                                        </span>
                                        <span className={classNames({
                                            'flex justify-center items-center p-2 rounded text-white': true,
                                            'bg-red-700': !answer,
                                            'bg-gray-300': answer,
                                        })}>
                                            <IoClose />
                                        </span>
                                    </div>
                                </div>
                            </React.Fragment>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}
