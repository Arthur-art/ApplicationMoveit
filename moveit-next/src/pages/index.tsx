import {ExpirienceBar} from '../components/ExperienceBar'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">

    <Head>

    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Nunito:ital,wght@0,400;0,600;1,800&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>

    </Head>

    <ExpirienceBar />
    
  </div>
  )
}
