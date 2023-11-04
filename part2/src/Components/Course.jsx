import Part from "./Part"

const Course = ({ course }) => {
    const total = course.parts.reduce((accumulator, currentVal) => {
        return accumulator + currentVal.exercises
    }, 0)
    console.log(total);
    return (
        <>
            <h1>{course.name}</h1>
            {
                course.parts.map(part =>
                    <Part key={part.id} name={part.name} exercises={part.exercises}/>
                )
            }
            <strong>total of {total} exercises</strong>
        </>
    )
}

export default Course