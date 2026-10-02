const Header = ({course}) => <h1>{course}</h1> 

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => (
  <div>
    <p>{part1} {exercises1}</p>
    <p>{part2} {exercises2}</p>
    <p>{part3} {exercises3}</p>
  </div>
)

const Total = ({ exercises1, exercises2, exercises3 }) => (
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
)

const App = () => {
  const course = 'Industry Elective 1'
  const part1 = 'Information Management 2'
  const exercises1 = 3
  const part2 = 'Project Management for IT'
  const exercises2 = 3
  const part3 = 'Application Development and Emerging Technologies'
  const exercises3 = 3

  return (
     <div>
      <Header course={course} />
      <Content 
        part1={part1} exercises1={exercises1}
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

export default App