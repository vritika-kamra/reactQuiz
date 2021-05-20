import { waitForElementToBeRemoved } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';
import './index.css';

import {Quest} from './components';
const api = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
function App(){
    const[questions,setQuestions] = useState([]);
    const [currentIndex , setCurrentIndex] = useState(0);
    const [score,setScore] = useState(0);
    const [end , setEnd] = useState(false);
    const [showAns,setShowAns] = useState(false)    


    useEffect(()=>{
        fetch(api)
        .then((res)=>res.json())
        .then((data)=>{
            setQuestions(data.results);
           
        });
    }, []);
    
const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1
    setCurrentIndex(currentIndex+1);
   if(answer === questions[currentIndex].correct_answer){
       setScore(score + 1);
   }
   if(newIndex >= questions.length){
       setEnd(true);
   }
}
    return end ? (
        
        
        <div>
            
           <h1 className=" text-3xl font-bold text-white">
               Game ended! <br/>
               your score is {score}</h1>
        </div>
    ):(
     questions.length > 0 ? (
          
        

        <div className="container">
         <div>   
         <div className="gap-12">
                <h1 className="text-3xl w-full">Question : {currentIndex + 1}/10</h1>
                <h1 className="text-3xl w-full">Time: 60 s</h1>
            </div>
            <br/>
           
        </div>
        <Quest data={questions[currentIndex]} 
        handleAnswer = 
            {handleAnswer}
         />
        
        </div>
        ) :(
            <h1 className="text-2xl text-white font-bold">hey we are loadingg..</h1>
        )

    
    )}  
    
        
        

export default App;


