import React from 'react'
import { Day } from './Day';

export const Days = ({ days,  handleDaySelection }) => {
    
    return (
        <section className='flex dias'>
            {
                Object.values(days).map((day, i) => (
                    <Day key={day.date} i={i}  handleDaySelection={handleDaySelection}  {...day} />
                )

                )
            }
        </section>
    )
}
