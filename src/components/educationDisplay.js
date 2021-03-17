import React, {Component} from 'react'

class EducationDisplay extends Component{
    render(){
        return(
            
            <div>
            {this.props.educationArray.map((n) =>  
              <div key={n.id}>
                <button className='remove' value={n.schoolName} onClick={this.props.removeElement}>X</button> 

                <h3>School Name</h3>
                <div className='description'>{n.schoolName}</div>
                <h3>Degree</h3>
                <div className='description' >{n.degree}</div>
            
                <div className='outerBox'>

                 <div className='innerBox'>
                   <h3>Start date</h3>
                   <div className='description'>{n.startDate}</div>
                </div>
                 <div className='innerBox'>
                   <h3>Graduation Date</h3>
                  <div className='description'>{n.graduationDate}</div>
               </div>
            
            </div>
            <div className='buttonContainer'>
            </div>
            </div>)}
  </div>
            )
        
    }
}
export default EducationDisplay