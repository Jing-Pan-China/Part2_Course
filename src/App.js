<<<<<<< Updated upstream
const Header=(props)=>{
  const{name}=props
  return(
  <h1>{name}</h1>
  )
}

const Parts=(props)=>{
  const{parts}=props
  return(
      <div>
        <ul>
          {parts.map(part=>
              <li key={part.id}>
                {part.name} {part.exercises}
              </li>)
          }
      
        </ul>
      </div>
  )



}

const Sum=(props)=>{
  const{parts}=props
  return(
    <div>
     <h3>total of {parts.reduce((sum,part)=>{return sum+part.exercises},0)} excercises</h3> 
   
    </div>
  )

}

const Content=(props)=>{
       const{parts}=props
       
        return(
          <div>
            <Parts parts={parts}/>
            <Sum parts={parts}/>

          </div>
        )
  
   }



const Course=(props)=>{
  const{course}=props
  return(
  <div>
  <Header name={course.name}/>
  <Content parts={course.parts}/>
  </div>
  )
}


const App = () => {
  const courses = [
=======
import { useEffect, useState } from "react"
import Course from "./components/course/course"

const apiClient = { 
  getCoursesAsync: async () => Promise.resolve([
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  ]

  return (
  <div>

     {courses.map(course=><Course course={course}/>)}

  
  </div>
  
=======
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
>>>>>>> Stashed changes
  )
}

export default App


