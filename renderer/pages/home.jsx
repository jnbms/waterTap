import React, {useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(import('react-quill'),{ssr:false});
import styles from '../public/styles/second.module.scss';

function Home(){
  
  return(
    <React.Fragment>
      <Head>
        <title></title>
      </Head>
      <div className='row'>
      <aside style={{height:'100vh',marginRight:10}}>
        <div>작성중인 글</div>
        <div>정화한 글</div>
      </aside>
      <Link href='/write/write_1'>CLICK</Link>

      </div>
    </React.Fragment>
  );
};

export default Home;
