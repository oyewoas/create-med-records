import React from 'react';

import './result.styles.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCurrentComparison } from '../../redux/compare/compare.selector';

const ResultPage = ({ currentComparison: {plagarizm} }) => (
    <div className="result-page">
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center result">
                <h1 className="result-heading">Percentage similarity</h1>
                <hr/>
                <h1 className="result-percentage">{plagarizm}&#37;</h1>
                </div>
                <div className="col-md-3"></div>

            </div>
           
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentComparison: selectCurrentComparison,
})

export default connect(mapStateToProps)(ResultPage)