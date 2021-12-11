import React from 'react';

/* Header component */
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

// Old Content component from ex 1.1
const OldContent = (props) => {
  return (
    <>
      <p>
        {props.name} {props.number}
      </p>
    </>
  )
}

/* Part component */
const Part = (props) => {
  return (
    <>
      <p>
        {props.name} {props.number}
      </p>
    </>
  )
}

/* Content component which consists of Part components */
const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} number={props.parts[0].exercises} />
      <Part name={props.parts[1].name} number={props.parts[1].exercises} />
      <Part name={props.parts[2].name} number={props.parts[2].exercises} />
    </>
  )
}

/* Total component */
const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App;
