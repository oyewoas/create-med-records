import React from 'react'
import './history-item.styles.scss'
import { Link } from 'react-router-dom'


const HistoryItem = ({item: { id, name, plagarizm}, index}) => (
        <tr className="table-row">
            <th scope="row">{index++}</th>
            <td>{name}</td>
            <td>{plagarizm}&#37;</td>
            <td><Link to={`/history/${id}`} className="btn-details">Details</Link> </td>
        </tr>
)

export default HistoryItem