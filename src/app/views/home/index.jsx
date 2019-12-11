// import PropTypes from 'prop-types';
import React from 'react';

// Components imports
// // import NameComponent from '../../components/NameComponent';

// Images imports
// import NameImage from '../../assets/img';


const initState = {
    empply: "",
}

export default class Home extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = { ...initState }
    }

    render ()
    {
        return (
            <div className='container'>
                <h1>Hello Geek</h1>
            </div>
        );
    }
}

// Home.propTypes = {
//     name: PropTypes.array,
// }
