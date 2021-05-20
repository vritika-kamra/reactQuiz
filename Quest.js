import React from 'react';

const Quest = ({
    handleAnswer, data :{ question , correct_answer,incorrect_answers},
}) => {
const shuffleedAns= [correct_answer,... 
    incorrect_answers].sort(()=>Math.random()-0.5);
 return (
      
    <div className="container">
            
       
    <div className="bg-white text-blue-800 p-10 rounded-md shadow-md ">
       <h2 className="text-2xl w-full " dangerouslySetInnerHTML={
           {__html:question}}>
           
           </h2> 
    </div>
    <div className ="grid grid-cols-2 gap-6 mt-6">
    {shuffleedAns.map(answer =>(
        <button
        className={`${correct_answer === answer ? 'bg-white':'bg-white'}
        p-4 text-black font-bold rounded shadow `}
        onClick={() => handleAnswer(answer)}
        >
            {answer}
        </button>


    ))}
        </div>
    </div>
    ) ; 
}




export default Quest;