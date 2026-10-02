const Header = ({course}) => (<header className="mb-8">
    <h1 className="text-3xl font-bold text-purple-900">{course}</h1>
  </header>
)

const Part = ({ name, exercises }) => (
  <div className="flex justify-between text-purple-800">
    <span>{name}</span>
    <span className="font-medium text-purple-900">{exercises}</span>
  </div>
)

const Content = ({parts}) => (
  <section className="space-y-2">
    <Part name={parts[0].name} exercises={parts[0].exercises} />
    <Part name={parts[1].name} exercises={parts[1].exercises} />
    <Part name={parts[2].name} exercises={parts[2].exercises} />
  </section>
)

const Total = ({ parts }) => {
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div className="flex justify-between mt-6 text-purple-900 font-semibold">
      <span>Number of exercises</span>
      <span>{total}</span>
    </div>
  )
}

const Footer = ({fullName,courseCode,section}) => (
   <footer className="mt-12 bg-purple-50 text-purple-900 py-6 text-center border-t border-purple-200 rounded-b-lg">
    <p className="text-sm md:text-base font-medium">
      {fullName} - {courseCode} - {section}
    </p>
  </footer>
)

const fullName = "Kheila Karis C. Alido"
const courseCode = "CSIT340"
const section = "G7"

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
     <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-purple-100">
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App