import React, { useState } from 'react'

const AddTodo = () => {
    const [ title, setTitle ] = useState('')
    return (
        <div>
            <form>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="todo..."/>
                <button type="submit">Add Todo</button>
            </form>
            
        </div>
    )
}

export default AddTodo
