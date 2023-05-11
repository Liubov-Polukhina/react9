import  React, { useState } from 'react';
import "./Dropdown.styles.js";

function Dropdown(props) {
const [isActive, setIsActive] = useState(false)
    return (
        <div className = "dropdown">
            <div className='dropdown-btn' onClick={(e) => 
                setIsActive(!isActive)}> 
                 Department
            </div>
           
            {/* <span className='fas fa-caret-down'></span> */}
            

            {(isActive & props.departments.length>0)  && (
                <div className='dropdown-content'> 
                {props.departments.map((data)=> {
                return(
                    <button className='dropdown-content' onClick={console.log(data.departmentId)}>  
                    {data.displayName} 
                    </button>
                    )
                    })}
                </div>
                )}
            </div>
       
    );
}



export default Dropdown;