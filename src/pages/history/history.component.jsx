/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import HistoryItem from '../../component/history-item/history-item.component'
import './history.styles.scss'
import { connect } from 'react-redux'
import { getCurrentHistory } from '../../redux/history/history.actions'
import { getHistory } from '../../services/history.services'
import { selectCurrentHistory } from '../../redux/history/history.selector';
import { createStructuredSelector } from 'reselect'


const HistoryPage = ({ getCurrentHistory, currentHistory }) => {
    useEffect(() => {
        getHistory(getCurrentHistory)
    }, [])
    return(
        <div className="history-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-1 col-lg-1 col-sm-12"></div>
                    <div className="col-md-10 col-lg-10 col-sm-12">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Comparison Name</th>
                            <th scope="col">Percentage</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            currentHistory.length ? (
                            currentHistory.filter((historyItem, index) => index < 5)
                            .map((historyItem, index) => (  
                                <HistoryItem index={index} key={historyItem.id} item={historyItem} />))
                            ):(
                            <tr className="empty-message">No Comparison History</tr>
                            )
                        }
                        </tbody>
                    </table>
                    </div>
                    <div className="col-md-1 col-lg-1 col-sm-12"></div>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentHistory: selectCurrentHistory
})

const mapDispatchToProps = dispatch => ({
    getCurrentHistory: data => dispatch(getCurrentHistory(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)