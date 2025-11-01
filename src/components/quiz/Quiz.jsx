import { useState } from 'react';
import { data } from '../../assets/data';
import './Quiz.css';

const Quiz = () => {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.answer === ans) {
                e.target.classList.add("correct");
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
            }
            setLock(true);
        }
    }

    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            // Remove previous highlighting
            const options = document.querySelectorAll('.container ul li');
            options.forEach(option => {
                option.classList.remove('correct', 'wrong');
            });
            setIndex(prev => prev + 1);
            setQuestion(data[index + 1]);
            setLock(false);
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            {result ? <></> : <>
                <h2>{index + 1}. {question.question}</h2>
                <ul>
                    {question.options.map((option, i) => (
                        <li key={i} onClick={(e) => { checkAns(e, option) }}>{option}</li>
                    ))}
                </ul>
                <button onClick={next}>Next</button>
                <div className="index">{index + 1} of {data.length} questions</div>
            </>}
            {result ? <>
                <h2>You Scored {score} out of {data.length}</h2>
                <button onClick={reset}>Reset</button>
            </> : <></>}
        </div>
    )
}

export default Quiz
