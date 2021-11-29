import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(http://www.goodmorningimagesdownload.com/wp-content/uploads/2020/06/Alone-Boys-Girls-Images-6.jpg)'
            }}>

            </div>
            <div className="journal__entry-body">
                <p className= "journal_entry-tittle">
                    Un nuevo dia
                </p>
                <p className= "journal_entry-content">
                   Officia fugiat aliqua culpa est aute anim.
                </p>

            </div>
            <div className="journal__entry-date-box">
                <span> Lunes</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
