import Head from "next/head";
import { useState } from "react";
import s from "../styles/app.module.css";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [timeValue, setTimeValue] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTimeValue(time);
  }
  setInterval(updateTime, 1000)

  return (
    <>
      <Head>
        <title>Clock</title>
      </Head>
      <main className={s.main}>
        <div className={s.block}>
        </div>
        <div className={s.time}>
          {timeValue}
        </div>
      </main>
    </>
  )
}

export default App;