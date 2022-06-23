function Create (){


    return(
        <>
        <form>
            <br></br>
            <div>
                <label>Title: </label>
                <input type="text" name="name"/>
            </div>
            <div>
                <label>Summary: </label>
                <input type="text" name="summary"/>
            </div>
            <div>
                <label>Health score: </label>
                <input type="text" name="score"/>
            </div>
            <div>
                <label>Steps: </label>
                <input type="text" name="steps"/>
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form>
        </>
    )
}
export default Create;