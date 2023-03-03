import React from 'react';

import DataCard from './DataCard'

function PieChartData( { trigger, stats } ) {
    
    return (
        <>
            <table className='chartStats'>
                <thead>
                    <tr>
                        {trigger ? <th>Cooking Time Last 5-Days</th> : <th>Calories Last 5-Days</th>}
                    </tr>
                </thead>
                <tbody className='colors'>
                    {stats.map((stat, index) => {
                        return <DataCard key={index} stat={stat} index={index} trigger={trigger}/>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default PieChartData;