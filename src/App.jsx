import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const scores = [ 
  {  이름: "John", 국어: 90, 영어: 90,  수학: 80, 과학: 90 },
  {  이름: "Peter", 국어: 90, 영어: 90,  수학: 80, 과학: 90 },
  {  이름: "Susan", 국어: 90, 영어: 90,  수학: 80, 과학: 90 },
  {  이름: "Sue", 국어: 90, 영어: 90,  수학: 80, 과학: 90 },
]


function App() {
 
  return (


    <table>

      <tr>
        {
          Object.keys(scores[0]).map(key=>(
            <th>{key}</th>
          ))
        }
          </tr>
        {scores.map(item =>
            (
            <tr>
              {
                Object.values(item).map(
                  (value) => (<td>{value}</td>)
                )
              }
              </tr>
          )
        )
        }

    </table>  
  )
}

export default App