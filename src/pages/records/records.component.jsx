/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import RecordsItem from '../../component/records-item/records-item.component'
import './records.styles.scss'
import { connect } from 'react-redux'
import { getCurrentRecords, filterMinorsInRecords } from '../../redux/allrecords/allrecords.actions'
import { getRecords } from '../../services/allrecords.services'
import { selectCurrentRecords } from '../../redux/allrecords/allrecords.selector';
import { createStructuredSelector } from 'reselect'


const Records = ({ getCurrentRecords, filterMinorsInRecords, currentRecords }) => {
    const [filter, setFilter] = useState({ value: true })
    useEffect(() => {
        getRecords(getCurrentRecords)
    }, [])

    const handleClick = () => {
        if(filter.value === false){
            getRecords(getCurrentRecords)
            setFilter({value : true})
        }

        if(filter.value === true){
            filterMinorsInRecords()
            setFilter({value : false})
        }
        
    }
    return(
        <div className="history-page">
            <div className="container">
                <form className="text-center pb-5">
                    <div className="form-check">
                        <input value={filter.value}  type="checkbox" onClick={() => handleClick()} className="form-check-input"/>
                        <label className="form-check-label" htmlFor="minors">Only Minors</label>
                    </div>
                </form>
                <div className="row">
                
                    <div className="col-md-1 col-lg-1 col-sm-12"></div>
                    <div className="col-md-10 col-lg-10 col-sm-12">
                    <div className="table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">City</th>
                            <th scope="col">Country</th>
                            <th scope="col">Diabetes</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            currentRecords.length ? (
                            currentRecords.filter((recordsItem, index) => index < 5)
                            .map((recordsItem, index) => (  
                                <RecordsItem index={index+1} key={recordsItem.id} item={recordsItem} />))
                            ):(
                            <tr className="empty-message">No Medical Records</tr>
                            )
                        }
                        </tbody>
                    </table>
                    </div>
                    </div>
                    <div className="col-md-1 col-lg-1 col-sm-12"></div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentRecords: selectCurrentRecords
})

const mapDispatchToProps = dispatch => ({
    getCurrentRecords: data => dispatch(getCurrentRecords(data)),
    filterMinorsInRecords: () => dispatch(filterMinorsInRecords())

})

export default connect(mapStateToProps, mapDispatchToProps)(Records)