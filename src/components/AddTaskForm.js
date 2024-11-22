import React from "react";


function AddTaskForm() {

    return(
        <div className="Form">
            <form>

            <label>Name</label>
            <input type="text" value="Bisma" /> 

            <label>Description</label>
            <input type="text"  /> 

            <label>Due Date:</label>
          <input
            type="date"
            name="dueDate" />

            <label>Assigned To</label>
            <select>
                <option value= "Sadaf">Sadaf</option>
                <option value= "Thai">Thai</option>
                <option value= "Pallavi">Pallavi</option>
                <option value= "Bisma">Bisma</option>
             </select>    

            <label>Status</label>
                <select>
                <option value= "Not Started">Not Started</option>
                <option value= "In-Progress">In Progress</option>
                <option value= "Review">Review</option>
                <option value= "Complete">Complete</option>
                </select>    

            <button type="submit"> Add Task </button>
            </form>

        </div>
    );
}

export default AddTaskForm;
