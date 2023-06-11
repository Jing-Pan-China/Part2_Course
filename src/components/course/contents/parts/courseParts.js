const CourseParts = (props) => {
  const { parts } = props
  return (
    <div>
      <ul>
        {parts.map(part =>
          <li key={part.id}>
            {part.name} ({part.exercises} parts)
          </li>)
        }
      </ul>
    </div>
  )
}

export default CourseParts