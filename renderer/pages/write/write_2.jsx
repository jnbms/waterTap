<div style={{margin:5}}>자신의 감정을 솔직하게 적어보기</div>
import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'),{ssr:false});
import styles from '../../public/styles/second.module.scss';

function Home(){
    const [text,setText] = useState("");
    const [textNum,setTextNum] = useState();
    const [blankNum,setBlankNum] = useState();
    const extractTextPattern = /(<([^>]+)>)/gi;
    const blankRegExpression = / /g;
    
    const handleText = (text) => {
      setText(text)
      const allSize = text.replace(extractTextPattern,"").toString().length;
      const textSize = text.replace(extractTextPattern,"").replace(blankRegExpression,"").toString().length;
      const blankSize = allSize - textSize;
      setTextNum(textSize);
      setBlankNum(blankSize);
    }
  return(
    <React.Fragment>
      <Head>
        <title></title>
      </Head>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center',width:'100%'}}>
      {/* <h1>수도꼭지</h1> */}
      <h1 style={{}}>사건의 기록</h1>
      {/* <div spellCheck={false} style={{display:'flex',justifyContent:"center",width:"100%"}}> */}
        <ReactQuill style={{border:"1px",margin:'0px',width:'80%'}} theme="snow" value={text} onChange={handleText}/>
      {/* </div> */}
      {/* <ReactQuill theme="bubble" value={text} onChange={setText}  style={{width:'80%',border:'1px solid'}}/> */}
      {/* <div><Link href='/next'>클릭</Link></div> */}
      
      <div style={{display:'flex', width:'80%',justifyContent:'space-between'}}>
      <div className={styles.button}> ← 이전으로 </div>
      <div className={styles.button}> 다음으로 → </div>
      </div>

      <div style={{marginTop:'50px',display:'flex', flexDirection:'column', alignItems:'center',width:'80%'}}>
      <div style={{display:'flex',justifyContent:'space-evenly',width:'80%'}}>
        <div>해당 페이지 -</div>
        <div> 글자 수 : {textNum} 자,</div>
        <div> 공백 수 : {blankNum} 자</div>
      </div>

{/*  {text.replace(extractTextPattern,"").replace(blankRegExpression,"").toString().length} */}

      <div style={{display:'flex',justifyContent:'space-evenly',width:'80%'}}>
        <div>전체 페이지 -</div>
        <div> 글자 수 : 495 자,</div>
        <div> 공백 수 : 225 자</div>
      </div>
      </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
