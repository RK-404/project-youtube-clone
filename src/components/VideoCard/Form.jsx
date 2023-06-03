import { useState } from 'react';
import './form.css'


function Form() {
    const [input, setInput] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.comment.value);
        setInput([...input, {name: e.target.name.value, comment: e.target.comment.value}])
        e.target.name.value = ""
        e.target.comment.value = ""
    }


    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' placeholder='Name...' required/>
            <label htmlFor="comment">Comment</label>
            <input type="text" name='comment' placeholder='...' />
            <button>Submit</button>
            <hr />
            {input.map(el => 
            <div className='comment-box'>
                <h4>{el.name}</h4> 
                <p>{el.comment}</p>
                <hr />
            </div>
            )}
          </form>
    )
}

export default Form;
