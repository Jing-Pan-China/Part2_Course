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
  ]

  return (
  <div>

     {courses.map(course=><Course course={course}/>)}

  
  </div>
  
  )
}

export default App


