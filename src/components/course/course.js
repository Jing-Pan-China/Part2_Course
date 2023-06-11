import CourseHeader from "./contents/courseHeader"
import CourseContent from "./contents/courseContent"

const Course = (props) => {
  const { course } = props
  return (
    <div>
      <CourseHeader name={course.name} />
      <CourseContent parts={course.parts} />
    </div>
  )
}

export default Course