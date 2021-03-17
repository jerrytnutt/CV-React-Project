import React, {Component} from 'react'

class WorkExperienceDisplay extends Component{
   render(){
        return(
            <div>
            {this.props.workArray.map((n) =>  
              <div key={n.id} >
                <button className='remove' value={n.companyName} onClick={this.props.removeElement}>X</button> 

                <h3>Company Name</h3>
                <div className='description'>{n.companyName}</div>
                <h3>Position</h3>
                <div className='description' >{n.position}</div>
                <h3>Description of Duty</h3>
                <div className='descriptionOfDuty' >{n.description}</div>

                 <div className='outerBox'>
                  <div className='innerBox'>
                    <h3>Start date</h3>
                    <div className='description'>{n.startDate}</div>
                  </div>
                  <div className='innerBox'>
                    <h3>End date</h3>
                    <div className='description'>{n.endDate}</div>
                  </div>
                 </div>

              </div>)}
  </div>
            )
        
    }
}
export default WorkExperienceDisplay