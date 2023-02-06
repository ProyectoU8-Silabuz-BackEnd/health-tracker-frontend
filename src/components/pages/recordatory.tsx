const Recordatory = () => {
	return (
        <form>
        <label>Start Date:</label>
        <input type="date" id="start-date" name="start-date"/>
        
        <label>End Date:</label>
        <input type="date" id="end-date" name="end-date"/>
        
        <label>Float Field:</label>
        <input type="float" id="float-field" name="float-field"/>
        
        <label>Select Field:</label>
        <select id="select-field" name="select-field">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
        </select>
        
        <label>Text Field:</label>
        <input type="text" id="text-field" name="text-field"/>
        
        <input type="submit" value="Submit"/>
        </form>
	)
}

export default Recordatory;