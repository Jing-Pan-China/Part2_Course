import { useMemo } from "react"

const CoursePartsSum = (props) => {
  const { parts } = props
  const sum = useMemo(() => parts.reduce((sum, part) => sum + part.exercises, 0), [parts])

  return (
    <div>
      <h3>total of {sum} excercises</h3>
    </div>
  )
}

export default CoursePartsSum