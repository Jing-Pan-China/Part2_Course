import CourseParts from "./parts/courseParts"
import CoursePartsSum from "./parts/coursePartsSum"

const CourseContent = (props) => {
  const { parts } = props

  return (
    <div>
      <CourseParts parts={parts} />
      <CoursePartsSum parts={parts} />
    </div>
  )
}

export default CourseContent