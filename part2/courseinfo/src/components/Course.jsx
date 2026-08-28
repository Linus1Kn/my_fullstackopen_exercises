const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <p>
        {part} {exercises}
    </p>
  )
}

const Content = ({ course }) => {
  const parts = course.parts
  return (
    <>
        {parts.map((part, i) => 
            <Part key={i} part={part.name} exercises={part.exercises} />
        )}
    </>
  )
}

const Total = ({ course }) => {
  const parts = course.parts
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <p>Number of exercises {total}</p>
  )
}

const Course = ({ course }) => {

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default Course