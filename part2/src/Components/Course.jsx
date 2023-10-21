
const Course = ({ course }) => {
    return (
        <>
            <h1>{course.name}</h1>
            {
                course.parts.map(part => {
                    return <p key={part.id}>{part.name} {part.exercises}</p>
                })
            }
        </>
    )
}

export default Course