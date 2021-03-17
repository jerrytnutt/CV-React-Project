import React, {Component} from 'react'
import EducationDisplay from '../components/educationDisplay'

class EducationForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            appendingEducation: false,
            id: 0,
            schoolName: '',
            degree: '',
            startDate: '',
            graduationDate: '',
            educationArray: [],
        }
        
        this.changeAppendingEducation = this.changeAppendingEducation.bind(this);
        this.removeElement = this.removeElement.bind(this);
 
    }
    changeAppendingEducation() {
        this.setState({
            appendingEducation: !this.state.appendingEducation
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault(event)
        this.setState({
            appendingEducation: false,
            id: this.state.id + 1,
            educationArray:[...this.state.educationArray, {id: this.state.id,schoolName: this.state.schoolName,
            degree: this.state.degree, graduationDate: this.state.graduationDate,startDate: this.state.startDate}]
        })
        
    }
    handleInputChange = (event) => {
        event.preventDefault(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    removeElement(event) {
        if (this.state.educationArray.length === 1){
            this.state.educationArray.pop()
        }
        let entryLocation = event.target.value
        entryLocation = this.state.educationArray.findIndex(obj => obj.schoolName === entryLocation)
        this.state.educationArray.splice(entryLocation, 1)
        this.setState({
            educationArray: this.state.educationArray
        })
       
}
    
    render(){
        if (this.state.appendingEducation){
        return(
            <div className='infoContainer'>
                <EducationDisplay
                educationArray = {this.state.educationArray}
                removeElement={this.removeElement} />
                
        <form onSubmit={this.handleSubmit}>
            <label>
          <h2>School Name:</h2>
          <input type='text'  value={this.state.schoolName} name='schoolName' onChange={this.handleInputChange} required></input>
            </label>
            <label>
        <h2>Degree:</h2>
        <input type='text' value={this.state.degree} name='degree' onChange={this.handleInputChange} required></input>
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
              <h2>Graduation date:</h2>
              <input type="date" value={this.state.graduationDate} name='graduationDate' onChange={this.handleInputChange} id="grad" 
              min="1950-01-01" max="2028-12-31" required></input>
               </label>
            </div>
            </div>

            <button className='submit' >Submit</button>
             </form>
    </div>
        )
        }else{
            return(
             <div className='infoContainer'> 
              <EducationDisplay
                educationArray = {this.state.educationArray} 
                removeElement={this.removeElement}/>

              <div className='addButtonContainer'>
              <button className='add' onClick={this.changeAppendingEducation}>Add</button>
              <p>Append New Education</p></div>

                </div>
            )
        }
    }
}
export default EducationForm