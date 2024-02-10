const { default: CompleteTodoTask } = require("@/components/todos/CompleteTodo")


const CompeleteTodosPage =()=>{
    return(
        <div>
            <h1>completed</h1>
            <CompleteTodoTask />
        </div>
    )
}

export default CompeleteTodosPage