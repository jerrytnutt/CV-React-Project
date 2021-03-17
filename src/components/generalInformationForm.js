import React, {Component} from 'react'
import GeneralDisplay from '../components/generalInformationDisplay'

class GeneralForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            isSubmitted: false,
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        }
        this.changeisSubmitted = this.changeisSubmitted.bind(this);
        
    }
    changeisSubmitted() {
      this.setState({
        isSubmitted: !this.state.isSubmitted
        })
 
    }
    handleSubmit = (event) => {
      event.preventDefault(event)
      this.changeisSubmitted()

   }
   handleInputChange = (event) => {
    event.preventDefault(event)
    this.setState({
        [event.target.name]: event.target.value
    })   
}
    render(){
        if (!this.state.isSubmitted){
        return(
            <div className='infoContainer'>
              <form onSubmit={this.handleSubmit}>
                <div className='outerBox'>
                  <div className='innerBox'>
                  <label>
                    <h2>First Name:</h2>
                    <input type='text' value={this.state.firstName} name='firstName' onChange={this.handleInputChange} required></input>
                  </label>
                  </div>

                  <div className='innerBox'>
                  <label>
                    <h2>Last Name:</h2>
                    <input type='text' value={this.state.lastName} name='lastName' onChange={this.handleInputChange} required></input>
                  </label>
                  </div>
                  
                </div>
                  <label>
                <h2>E-mail:</h2>
                <input type='text' value={this.state.email} name='email' onChange={this.handleInputChange} required></input>
                  </label>
                  
                  <label>
                <h2>Phone Number:</h2>
                <input type='text' value={this.state.phoneNumber} name='phoneNumber' onChange={this.handleInputChange} required></input>
                  </label>
                <div>
                <button className='submit'>Submit</button>
                </div> 
                </form>
            </div>
            )
        }else{
            return(
                <div className='infoContainer'>
                  <GeneralDisplay
                  firstName = {this.state.firstName} 
                  lastName = {this.state.lastName}
                  email = {this.state.email}  
                  phoneNumber = {this.state.phoneNumber}
                  changeisSubmitted={this.changeisSubmitted}/>
                  
            </div>
            )
        }
        
    }
}
export default GeneralForm