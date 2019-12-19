import React from 'react'

// Tools
import PropTypes from 'prop-types'

// Style
import '../assets/scss/_Modal.scss'

// Components Childs
import Logo from './Brand'

export default function Modal (props)
{
    return (
        <div className={ props.display ? 'modal' : 'd-none' }>
            <div className='modal-content'>
                <div className='modal-head'>
                    <Logo />
                    <span>campos marcados com * são obrigatórios</span>
                </div>
                { props.children }
            </div>
        </div>
    )
}

Modal.propTypes = {
    display: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
