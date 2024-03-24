import React, { useEffect, useState } from 'react';
import useApp from '../../store/app/hooks';
import { useNavigate } from 'react-router-dom';
import { questions } from '../../utils/questions';

export const QuizPage = () => {
    const [question, setQuestion] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const { user, setAnswers, removeAnswers } = useApp();

    const navigate = useNavigate();

    useEffect(() => {
        if (user.name == "" || user.class == "") {
            navigate("/");
        }
    }, [user, navigate]);

    useEffect(() => {
        removeAnswers();
    }, []);

    const handleAnswer = (event, answer) => {
        setDisabled(true);
        if (answer == questions[question].cevap) {
            event.target.style.backgroundColor = "green";
            setAnswers(true);
        } else {
            event.target.style.backgroundColor = "red";
            setAnswers(false);
        }
        if (question < questions.length - 1) {
            setTimeout(() => {
                setQuestion(question + 1);
                event.target.style.backgroundColor = "#40A2E3";
                setDisabled(false);
            }, 1000);

        } else {
            setTimeout(() => {
                navigate("/result");
            }, 1000);
        }
    };

    return (
        <div className="flex min-h-screen justify-center items-center bg-[#EEEDEB] p-4">
            <div className='flex gap-4 flex-col items-center shadow-lg p-8 bg-white rounded-xl w-[700px]'>
                <h2 className='text-xl font-bold text-center'>{user?.name + " - " + user?.class}</h2>
                <p className="flex flex-col bg-[#EEEDEB] w-full rounded p-4">
                    <span className='font-bold'>{questions[question].id + 1}. Soru</span>
                    {questions[question].soru}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                    {questions[question].secenekler.map((secenek, index) =>
                        <button disabled={disabled} key={index} onClick={(event) => handleAnswer(event, secenek)} className='bg-[#40A2E3] rounded py-2 text-white hover:bg-[#40A2E3]/90 transition'>{secenek}</button>
                    )}
                </div>
            </div>
        </div>
    );
};
