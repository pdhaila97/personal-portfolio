import React from 'react';

const block = (props) =>{
    return(
        <div className="col-lg-4 mb-4">
            <div className="bg-white shadow p-4" style={{borderRadius: "12px"}}>
                <h2 className="h5 font-weight-bold text-center">{props.text}</h2>
            </div>
        </div>

    );

}
export default block;