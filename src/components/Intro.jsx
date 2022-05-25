import React, {useEffect,useState,useRef} from 'react'
import './Intro.scss'
import {ArrowDownOutlined, DownOutlined} from '@ant-design/icons'
import {init} from 'ityped'
function Intro() {
  const textRef = useRef(null)
  console.log('yeah')
  useEffect(()=>{
    // console.log
    if(!textRef.current ){
      return;
    }
    console.log('useEffect')
    init(textRef.current, { showCursor: true, strings: ['a student', 'an engineer' ,'a coding-enthusiast'] })
    

  },[textRef])
  // const textRef = useRef(null)

  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="wrapper">
         <div className="text-holder"> <h2 >Hello, my name is</h2>
          <h1>Szymon Walczak</h1>
          <div style={{'display':'flex','alignItems':'center','width':100+'%'}}> <h2>I am</h2><span ref={textRef} style={{'fontWeight':500}}></span></div>
          </div>
        </div>
        <div className="arrow"><div className="arrow-holder"><DownOutlined /><DownOutlined /></div></div>
      </div>
      <div className="right">
        <div className="img-container"><img src="assets/undraw_code_thinking_re_gka2.svg" alt="" /></div>
      </div>


    </div>
  )
}

export default Intro