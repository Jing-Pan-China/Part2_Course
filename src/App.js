import { useEffect, useState } from "react"
import Course from "./components/course/course"

const apiClient = { 
  getCoursesAsync: async () => Promise.resolve([
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ])
}

const App = () => {
  const [courses, setCourses] = useState([])
  
  useEffect(() => {
    let isMounted = true
    apiClient.getCoursesAsync().then((courses) => {
      if (isMounted) {
        setCourses(courses)
      }
    })
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div>
      <h1>Courses</h1>
      {courses.map(course => <Course course={course} />)}
    </div>
  )
}

export default App


