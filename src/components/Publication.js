import React, { useState } from 'react'
import Detail from './Detail'

const Publication = ({publication}) => {
    const [showDetailInfo, setShowDetailInfo] = useState (false)
    
    return (
        <div className='card m-2'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h5 className="card-title">{publication.attributes.titles[0].title}</h5>
                        <p className="card-text">ID: {publication.id}</p>
                    </div>
                    <div className='col-sm-6 text-right'>
                        <button className="btn btn-sm btn-outline-primary mb-3"
                        onClick={() => setShowDetailInfo(!showDetailInfo)}>See More</button>
                    </div>
                </div>
                {showDetailInfo && <Detail publication={publication} />}
            </div>
        </div>
    )
}

export default Publication
