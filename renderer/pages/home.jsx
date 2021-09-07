import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(import('react-quill'),{ssr:false,loading:()=><p>loading..</p>})
import styles from '../public/styles/second.module.scss'

function Home(){
    const [text,setText] = useState("");
  return(
    <React.Fragment>
      <Head>
        <title></title>
      </Head>
      <div style={{display:'grid',placeItems:'center'}}>
      <h1>수도꼭지</h1>
      <div style={{margin:5}}>사건의 기록</div>
      <div spellCheck={false} style={{width:'80%',border:'1px solid'}}>
        <ReactQuill theme="snow" value={text} onChange={setText}/>
      </div>
      <div style={{margin:5}}>자신의 감정을 솔직하게 적어보기</div>
      {/* <ReactQuill theme="bubble" value={text} onChange={setText}  style={{width:'80%',border:'1px solid'}}/> */}
      <div><Link href='/next'>클릭</Link></div>
      <div>감정을 인정하고 다독여주기</div>
      <div><u>"왜"</u> 라고 질문 던져보기</div>
      
      <div style={{display:'flex', width:'80%',justifyContent:'space-between'}}>
      <div className={styles.button}> ← 이전으로 </div>
      <div className={styles.button}> 다음으로 → </div>
      </div>

      <div style={{marginTop:'50px',display:'flex', flexDirection:'column', alignItems:'center',width:'80%'}}>
      <div style={{display:'flex',justifyContent:'space-evenly',width:'80%'}}>
        <div>해당 페이지 -</div>
        <div> 글자 수 : 300 자,</div>
        <div> 공백 수 : 25 자</div>
      </div>

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
