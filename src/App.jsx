const Header = ({course}) => <h1>{course}</h1> 

const Part = ({ name, exercises }) => (
  <p>{name} {exercises}</p>
)

const Content = ({ parts }) => (
  <div>
    <Part name={parts[0].name} exercises={parts[0].exercises} />
    <Part name={parts[1].name} exercises={parts[1].exercises} />
    <Part name={parts[2].name} exercises={parts[2].exercises} />
  </div>
)

const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = 'Industry Elective 1'
  const parts = [
    {
      name: 'Information Management 2',
      exercises: 3
  },
  {
    name: 'Project Management for IT',
    exercises: 3
  },
 {
    name: 'Application Development and Emerging Technologies',
    exercises: 3
  }
]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App