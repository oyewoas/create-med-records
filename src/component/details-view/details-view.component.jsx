import React from 'react'
import './details-view.styles.scss'


const DetailsView = ({details}) => {
    const { first_student, second_student, plagarizm } = details
    return(
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 details-content">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="details-heading text-center">First Student</h1>
                        <p className="text-center pt-3">{first_student}</p>

                    </div>
                    <div className="col-md-6">
                        <h1 className="details-heading text-center">Second Student</h1>
                        <p className="text-center pt-3">{second_student}</p>
                    </div>
                    
                    <div className="col-md-12 mt-5 text-center">
                        <hr/>
                        <h1 className="details-percentage">{plagarizm}&#37;</h1>
                       
                    </div>

                </div>
            </div>
            <div className="col-md-3"></div>

        </div>
    )
}


export default DetailsView