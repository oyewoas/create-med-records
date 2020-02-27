import React from 'react'
import './records-item.styles.scss'

const RecordsItem = ({item: { id, first_name, last_name, gender, age, city, country, living_with_diabetes}, index}) => (
        <tr className="table-row">
            <th scope="row">{index++}</th>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{gender}</td>
            <td>{age}</td>
            <td>{city}</td>
            <td>{country}</td>
            <td>{living_with_diabetes}</td>
        </tr>
)

export default RecordsItem