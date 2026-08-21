import { useState } from 'react'

const Button = ({text, onClick}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value, percentage}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}{percentage ? " %" : ""}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0){
    return (
      <p>
        No feedback given
      </p>
    )
  }
  return(
    <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />

          <StatisticLine 
            text="all" 
            value={all}
          />
          <StatisticLine 
            text="average" 
            value={(good*1 + neutral*0 + bad*-1) / all}
          />
          <StatisticLine 
            text="positive" 
            value={(good / all)*100} percentage
          />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <Button
        text="good"
        onClick={() => {setGood(good + 1)}}
      />
      <Button
        text="neutral"
        onClick={() => {setNeutral(neutral + 1)}}
      />
      <Button
        text="bad"
        onClick={() => {setBad(bad + 1)}}
      />

      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App