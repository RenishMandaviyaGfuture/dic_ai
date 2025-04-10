import React, { useEffect, useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import { CiSearch } from "react-icons/ci";
import { GoogleGenAI } from "@google/genai";
import ClipLoader from "react-spinners/ClipLoader";
import { FadeLoader } from 'react-spinners';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math'


const App = () => {

  const [word,setWord] = useState("");
  const [result,setResult] = useState("");
  const [loading,setLoading] = useState(false);
  const [darkMode,setDarkMode] = useState(false);

  const changeBgColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#9333ea";
  };

  const resetColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#374151";
  }

  const ai = new GoogleGenAI({ apiKey: "AIzaSyC1rfIu-SqTP7D6InXUV9wik8cPWccl1jM" });
  
  async function getResult() {
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents:  `Considered you are a dictionary AI. we will give to a word and you need to Give all the dictionary details in good including example also, Meanings ,Definations , Synonyms , Phonetics etx the Word is ${word}`,
    });
    setResult(response.text);
    setLoading(false);
    console.log(response.text);
  }

  useEffect(()=>{
    const savedTheme = localStorage.getItem("darkMode");
    if(savedTheme !== null){
      setDarkMode(savedTheme === 'true');
    }
  },[]);

    useEffect(()=>{
      document.body.classList.toggle("light",!darkMode);
      localStorage.setItem("darkMode",darkMode);
    },[darkMode]);
  return (
    <>
    <Navbar clear={()=>setResult("")} darkMode={darkMode} toggleTheme={() => setDarkMode(prev => !prev)} />

    <div className='searchContainer mt-5 px-[250px]'>
      <div className='inputBox'>
       <CiSearch color='gray' className='ml-3 cursor-pointer'/>
        <input onKeyUp={(e)=>{
          if(e.key === "Enter"){
            getResult();
          }
        }} onChange={(e)=>{setWord(e.target.value)}} value={word} type="text" onBlur={resetColor} onFocus={changeBgColor} placeholder='Search a word...' />
      </div>
    </div>

    <div className='resultContainer py-[20px]  mt-5  min-h-[40vh] mx-[250px]' style={{borderTop:"1px solid #374151", borderBottom:"1px solid #ccc"}}>
     <Markdown remarkPlugins={[remarkMath]}>{result}</Markdown>
     {loading && <FadeLoader color='#9333ea' className='mt-5'/>}
    </div>

    <div className='fotter flex items-center justify-center h-[80px] bg-[#1F2937]'>
        <p className='text-white'>Made with by  <span className='text-purple-500 cursor-pointer'>Renish Mandaviya</span>  All rights reserved</p>
    </div>
    </>
  )
}

export default App