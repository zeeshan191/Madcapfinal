
import React from 'react';
import './Breadcrumb.css';
function Breadcrumb(props) {
    return (<>
        <div className="breadcrumb-area shadow dark bg-fixed text-light" style={{backgroundImage: "url(bc.jpg)", padding: "150px"  }}>
        
        <div className="container">
            <div className="row align-center">
                <div className="col-lg-6">
                    <h1>{props.title}</h1>
                    <h3  style={{fontStyle:"italic"}}>{props.tagline}</h3>
                </div>
               
            </div>
        </div>
    </div>
</>
 
    )
}

export default Breadcrumb;