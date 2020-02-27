/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import './details.styles.scss'
import DetailsView from '../../component/details-view/details-view.component'
import { withRouter } from 'react-router-dom'
import { getComparisonDetails, reRunComparison } from '../../redux/compare/compare.actions'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getSpecificComparisonDetails, reRunSpecificComparison } from '../../services/compare.services'
import { selectCurrentComparison } from '../../redux/compare/compare.selector'
import CustomButton from '../../component/custom-button/custom-button.component'

const ComparisonDetails = ({ history, match, currentComparison, getComparisonDetails, reRunComparison }) => {
    const { params: { historyId }} = match
    useEffect(() => {
        getSpecificComparisonDetails(getComparisonDetails, historyId)
    }, [])
    const handleReRunComparison = () => {

        reRunSpecificComparison(reRunComparison, historyId, history)
        
    }
    return(
        <div className="comparison-details">
            <div className="container">
                {
                    currentComparison ? (<DetailsView details={currentComparison}/>) : (<span>Cannot retreive details</span>)
                }
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <CustomButton onClick={() => handleReRunComparison()}>Rerun</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    
    )
}
const mapStateToProps = createStructuredSelector({
    currentComparison: selectCurrentComparison
})

const mapDispatchToProps = dispatch => ({
    getComparisonDetails: data => dispatch(getComparisonDetails(data)),
    reRunComparison: data => dispatch(reRunComparison(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ComparisonDetails))