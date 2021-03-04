import Head from 'next/head'
import styles from '../styles/Home.module.css'
import styled from '@emotion/styled';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button>
        Test
      </Button>
    </div>
  )
}


const Button = styled.button`
  background-color: #2562FF;
  color: #fff;
  border: none;
  width: 250px;
  height: 50px;
  border-radius: 12px;
`