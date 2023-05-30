import './form.css'

function Form() {
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.comment.value);
    }


    return (
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='Name...' />
            <label htmlFor="">Comment</label>
            <input type="text" name='comment' placeholder='...' />
            <button>Submit</button>
          </form>
    )
}

export default Form;
