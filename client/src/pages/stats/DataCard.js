import React from 'react';

function PieChartData({ stat, index, trigger }) {

    const backgroundColor = [
        '#FFC0CB',
        '#ADD8E6',
        '#90EE90',
        '#FFFFE0',
        '#454545'
    ]

    return (
        <>
            <tr key={index}>
                <td style={{ backgroundColor: backgroundColor[index], width: "20px", height: "10px", border: "5px solid black" }} ></td>
                <td><b>Date:</b> {stat["date"]}</td>
                {trigger ? <td><b>Prep-time:</b> {stat["total"]}</td> : <td><b>Calories:</b> {stat["total"]}</td>}
            </tr>
        </>
    )
}

export default PieChartData;