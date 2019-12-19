import React from 'react'

// Tools
import { Link } from 'react-router-dom'

// Style
import '../assets/scss/_Brand.scss'

export default props =>
(
    <aside className='brand'>
        <Link to='/'>
            <b>Boilerplate</b>React<i>.</i>app
        </Link>
    </aside>
)

