import { useEffect, useState } from "react";
import Button from "./Button";
import styles from './App.module.css'

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const chagneCount = () => setCounter((prev) => prev+1)
  const firstOnce = () => {
    console.log('only one')
  }
  const onChange = (event) => {
    setKeyword(event.target.value)
  }
  useEffect(firstOnce, []);
  console.log("always");

  useEffect(()=>{
    if(keyword!=='' && keyword.length>5){
      console.log(keyword);
    }
  }, [keyword])

  return (
    <div className="App">
      <input
        value={keyword}
        placeholder="good"
        onChange={onChange}/>
      <h1>{counter}</h1>
      <h1 className={styles.title}>hi</h1>
      <Button text={'DRAGON'} chagneCount={chagneCount}/>

    </div>
  );
}

export default App;
