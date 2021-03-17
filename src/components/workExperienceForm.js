import React, {Component} from 'react'
import WorkExperienceDisplay from '../components/workExperienceDisplay'

class Work extends Component{
    constructor(props){
        super(props)
        this.state = {
            appendingWork: false,
            id: 0,
            companyName: '',
            position: '',
            description: '',
            startDate: '',
            endDate: '',
            workArray: [],
        }
        
        this.changeAppendingWork = this.changeAppendingWork.bind(this);
        this.removeElement = this.removeElement.bind(this)
    }
    changeAppendingWork() {
      this.setState({
        appendingWork: !this.state.appendingWork
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(event)
        this.setState({
            appendingWork: false,
            id: this.state.id + 1,
            workArray:[...this.state.workArray, {id: this.state.id,companyName: this.state.companyName,
            position: this.state.position,description: this.state.description, startDate: this.state.startDate,endDate: this.state.endDate}]
        })
        
    }
    handleInputChange = (event) => {
        event.preventDefault(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    removeElement(event) {
        if (this.state.workArray.length === 1){
            this.state.workArray.pop()
        }
        let entryLocation = event.target.value
        entryLocation = this.state.workArray.findIndex(obj => obj.companyName === entryLocation)
        this.state.workArray.splice(entryLocation, 1)
        this.setState({
            workArray: this.state.workArray
        })
       
}
    render(){
        if (this.state.appendingWork){
        return(
          <div className='infoContainer'>
            <WorkExperienceDisplay
              workArray = {this.state.workArray}
              removeElement={this.removeElement} />
                
        <form onSubmit={this.handleSubmit}>
            <label>
         <h2>Company Name:</h2>
         <input type='text' value={this.state.companyName} name='companyName' onChange={this.handleInputChange} required></input>
            </label>
            <label>
         <h2>Position:</h2>
         <input type='text' value={this.state.position} name='position' onChange={this.handleInputChange} required></input>
            </label>
            <label>
         <h2>Description of Duties</h2>
         <textarea value={this.state.description} name='description' onChange={this.handleInputChange} className='duty' required></textarea>
            </label>
        <div className='outerBox'>

         <div className='innerBox'>
            <label>
           <h2>Start date:</h2>
           <input type="date" value={this.state.startDate} name='startDate' onChange={this.handleInputChange} 
         min="1950-01-01" max="2028-12-31" required></input>
           </label>
         </div>

          <div className='innerBox'>
             <label>
           <h2>End date:</h2>
           <input type="date" value={this.state.endDate} name='endDate' onChange={this.handleInputChange}  
           min="1950-01-01" max="2028-12-31" required></input>
             </label>
           </div>

        </div>
            <button className='submit'>Submit</button>
             </form>
        
    </div>
        )
        }else{
            return(
                <div className='infoContainer'>            

               <WorkExperienceDisplay
                workArray = {this.state.workArray} 
                removeElement={this.removeElement}/>

            <div className='addButtonContainer'>
                <button className='add' onClick={this.changeAppendingWork}>Add</button>
                <p>Add Experience</p>
                </div>

          </div>
            )
        }
    }
}
export default Work