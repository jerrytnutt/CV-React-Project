import React, {Component} from 'react'

class GeneralDisplay extends Component{
    render(){
      return(
            <div className='infoContainer'>
            <div className='outerBox'>
              <div className='innerBox'>
                <h3>First Name</h3>
                  <div className='description'>{this.props.firstName} </div>
              </div>
              <div className='innerBox'>
                <h3>Last Name</h3>
                <div className='description'>{this.props.lastName} </div>
              </div>
            </div>

            <h3>E-mail</h3>
            <div className='description'> {this.props.email} </div>
            <h3>Phone Number</h3>
            <div className='description'>{this.props.phoneNumber}</div>
            <button className='editButton' onClick={this.props.changeisSubmitted}>Edit</button>
             
        </div>
            )
        
    }
}
export default GeneralDisplay