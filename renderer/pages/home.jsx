import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'),{ssr:false});
const ApexCharts = dynamic(import('react-apexcharts'),{ssr:false});
import DayPicker from 'react-day-picker';
import styles from '../public/styles/dayPicker.module.scss';
import 'react-day-picker/lib/style.css';

const renderDay = (day) => {
  const date = day.getDate();
  return <div className={styles.day}></div>
}
const renderWeek = (week) => {
  return <div style={{margin:'0px'}}></div>
}

function Home(){
  const modifiers = {
    // thursdays: { daysOfWeek: [1] },
    // birthday: new Date(2021, 8, 7),
  };
  const modifiersStyles = {
  };
  
  const MONTHS = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
  const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];
  const [selectedDay,setSelectedDay] = useState("nice");

  function clicked(e){
    console.log(e)
    // location.href='/write/write_1'
    return <div>HELLO</div>

  }
  return(
    <React.Fragment>
      <Head>
        <title></title>
      </Head>
      <div className='column' style={{justifyContent:'center',alignItems:'center',height:'100vh'}} >
      {/* <aside style={{height:'100px',marginRight:10}}> */}
        {/* <div>작성중인 글</div> */}
        {/* <div>정화한 글</div> */}
      {/* </aside> */}
      {/* <Link href='/write/write_1'>CLICK</Link> */}
      {/* <ApexCharts style={{border:'1px solid'}} options={options} series={series} type="heatmap" height={200}/> */}

      <div style={{border:'1px solid',margin:'8px'}}>
        <DayPicker 
        // modifiers={modifiers} modifiersStyles={modifiersStyles}
        classNames={styles}
        // weekdaysShort={WEEKDAYS}
        // months={MONTHS}
        // renderDay={renderDay}
        // renderWeek={renderWeek}
        // onDayClick={clicked}
         />
      </div>
      <b> " 정화일지 "</b>
      {/* <div>꾸준한 마음으로 정화해 보아요!</div> */}
      {/* <div>{selectedDay}</div> */}
      {/* <div>판도라의 감정 학교 中</div><div>내가 어떤 사람이든 나는 나를 사랑합니다.</div> */}
      <button style={{backgroundColor:'white',margin:'10px',borderStyle:'dotted',paddingInline:'5px',border:'1px solid'}}> 작성하기 </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
