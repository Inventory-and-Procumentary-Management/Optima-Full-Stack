import React from 'react'
import "./NewSiteStyle.css"

const SiteInternalPage = (props) => {
  return (
    <div>
        <div className='output-box'>
        <div className='header-date-details'>
            <div> {/* Header name address location start */}
            <div className='site-name-title'> {props.name} Project </div> 
    
        <div className='address-div'> Address : {props.address}</div>
        <div>Location : <a>{props.location}</a></div>
        </div> {/* Header name address location End */}
    <br></br>

        <div>{/* start date/endDate  start */}
        <div> Start Date : {props.startdate}</div>
        <div> End Date : {props.enddate}</div>
        </div> {/* start date/endDate  end */}
        <br></br>
        <div className='assign-a-manager-div'>Assign a Manager To this Project</div>

            <div>
                <select name="siteManager" id="siteManager" className='selectMenuStyle'>
                <option value= "1" >Suwasana Dammithu</option>
                <option value="2">Uthsuka Nayanamadhu</option>
                <option value="3">Yohan Nayanajith</option>
                <option value="4">Minura Rathnayake</option>
                <option value="5">Thilini thara pieris</option>
                <option value="6">punsisi subani</option>
                </select>
                </div>

                <button className='add-inventory-div' onClick={()=>{alert("Suwasana")}}>Add Inventory Item Details</button>

                

        </div>
        </div>
        
  
    </div>
  )
}

export default SiteInternalPage