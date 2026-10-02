const Header = ({course}) => <h1>{course}</h1> 

const Part = ({ part }) => (
  <p>{part.name} {part.exercises}</p>
)

const Content = ({ part1, part2, part3 }) => (
  <div>
    <Part part={part1} />
    <Part part={part2} />
    <Part part={part3} />
  </div>
)

const Total = ({ part1, part2, part3 }) => {
  const total = part1.exercises + part2.exercises + part3.exercises
  return <p>Number of exercises {total}</p>
}


const App = () => {
  const course = 'Industry Elective 1'
  const part1 = {
    name: 'Information Management 2',
    exercises: 3
  }
  const part2 = {
    name: 'Project Management for IT',
    exercises: 3
  }
  const part3 = {
    name: 'Application Development and Emerging Technologies',
    exercises: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App