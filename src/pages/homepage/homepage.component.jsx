import React from 'react'
import CreateMedicalRecord from '../create-record/create-record.component'
import Records from '../records/records.component'




const HomePage = () => (
    <div>
        <CreateMedicalRecord/>
        <hr/>
        <h4 className="text-center pb-5">List of medical Records</h4>
        <Records/>
    </div>
)

export default HomePage