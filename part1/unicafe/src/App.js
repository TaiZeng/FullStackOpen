import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={() => handleClick(prevState => prevState + 1)}>
    {text}
  </button>
)

const StatisticsLine= ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ values }) => {
  const all = values.reduce((x, y) => x + y, 0);
  const average = all > 0 ? (values[0] - values[2]) / all : 0
  const positive = all > 0 ? values[0] / all * 100 : 0
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text={"good"} value={values[0]} />
          <StatisticsLine text={"neutral"} value={values[1]} />
          <StatisticsLine text={"bad"} value={values[2]} />
          <StatisticsLine text={"all"} value={all} />
          <StatisticsLine text={"average"} value={average} />
          <StatisticsLine text={"positive"} value={positive + "%"} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setGood} text="good" />
      <Button handleClick={setNeutral} text="neutral" />
      <Button handleClick={setBad} text="bad" />
      <Statistics values={[good, neutral, bad]} />
    </div>
  )
}

export default App
