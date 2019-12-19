import React from 'react'

// Tools
import PropTypes from 'prop-types'

// Style
import '../assets/scss/_Card.scss'

export default function Card (props)
{
    return (
        <div className='card'>
            <div className='card-head'>
                { props.header }
            </div>
            <div className='card-body'>
                { props.children }
            </div>
        </div>
    )
}

Card.propTypes = {
    header: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node
    ]).isRequired
}

