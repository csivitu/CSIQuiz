'use client'
import React, {useState, useEffect} from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Countdown from "@/components/uncommon/countdown";
import axios from 'axios';
import { useRouter } from 'next/router'
import postHandler from "@/handlers/postHandler";
import { BACKEND_URL } from "@/constants";
import { toast } from "react-toastify";

const round  = "firstRoundScore";

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  category: string;
  id: string;
}

export default function Question() {
  const [isDone, setIsDone] = useState(false);
  const router = useRouter()
  const [questionNum, setQuestionNum] = useState(1);
  const [question, setQuestion] = useState({} as Question);
  const [score, setScore] = useState(0);

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
  };
  const getQuestion = async () => {
    const response = await axios.get(`${BACKEND_URL}/question/find`)
    setQuestion(response.data.response)
  }

  useEffect(() => {
    if(isDone){
      const Done = async () => {
        const response = await postHandler(`${BACKEND_URL}/leaderboard/add`, {score: score, round: round}, true)
        router.push('/results')
      }
      Done();
    }
  }, [isDone, router,score])


  const skipQuestion = async () => {
    setSelectedOption('')
    if(questionNum == 10){
      const response = await postHandler(`${BACKEND_URL}/result`, {score: score}, true)
      router.push('/results')
    }
    setQuestionNum(questionNum+1)
    getQuestion();
  }

  const checkAns = async () => {
    if(selectedOption == ''){
      toast.error('Please select an option')
      return;
    }
    setSelectedOption('')
    const payload = {
      id: question.id,
      answer: selectedOption
    }
    const response = await axios.post(`${BACKEND_URL}/question/verify `, payload)
    if(response.data.answer){
      setScore(score+1)
    }
    if(questionNum == 10){
      const response = await postHandler(`${BACKEND_URL}/leaderboard/add`, {score: score, round: round}, true)
      console.log(score)
      router.push('/results')
    } 
    setQuestionNum(questionNum+1)
    getQuestion();

  }


  useEffect(() => {
    getQuestion();
  }, [])
  return (
    <>
      <div className="bg-paleyellow flex flex-shrink-0 items-center justify-center  min-h-screen">
        <div className="bg-white w-[80%] h-fit flex flex-col justify-evenly items-center p-4">
          <div className="status text-blueish mt-4 mb-4">Question {questionNum}/10</div>
          <div>
            <Countdown setIsDone = {setIsDone}/>
          </div>

          <div className="select-none question break-keep  font-inter mobileStart:text-sm tabStart:text-2xl  mt-4 mb-4">
            {question.question}
          </div>
          <div className="select-none options m flex flex-col justify-between items-center w-9/12 mobileStart:text-xs mobileStart:text-md ">
            <div className="select-none option rounded-3xl w-11/12 m-4  p-4 bg-greyish border-2" onClick = {() => handleOptionClick("option1")}>
              <input type="radio" checked= {selectedOption=="option1"} readOnly className="mr-2" />
              {question.option1}
            </div>
            <div className="select-none option rounded-3xl w-11/12 m-4 p-4  bg-greyish border-2" onClick = {() => handleOptionClick("option2")}>
              <input type="radio" className="mr-2" readOnly checked={selectedOption=="option2"} />
              {question.option2}
            </div>
            <div className="select-none option rounded-3xl w-11/12 m-4 p-4  bg-greyish border-2" onClick = {() => handleOptionClick("option3")}>
              <input type="radio" className="mr-2" readOnly checked = {selectedOption == "option3"}/>
              {question.option3}
            </div>
            <div className="select-none option rounded-3xl w-11/12 m-4  p-4 bg-greyish border-2"onClick = {() => handleOptionClick("option4")}>
              <input type="radio" className="mr-2" readOnly checked = {selectedOption == "option4"}/>
              {question.option4}
            </div>
          </div>
          <div className="buttons flex flex-row justify-center">
            <div className="skip p-2 m-2">
              <button onClick = {skipQuestion}className="flex justify-center">
                <Image
                  src="/skip.svg"
                  width={1}
                  height={1}
                  alt="skip"
                  className="w-5/6 h-5/6"
                />
              </button>
            </div>
            <div className="next p-2 m-2">
              <button onClick = {checkAns} className="flex justify-center">
                <Image
                  src="/nextq.svg"
                  width={1}
                  height={1}
                  alt="next"
                  className="w-5/6 h-5/6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}