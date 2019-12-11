// import PropTypes from 'prop-types';
import React from 'react';

// Components imports
// // import NameComponent from '../../components/NameComponent';
import Routes from '../routes'

// Images imports
// import NameImage from '../../assets/img';


const initState = {
    empply: "",
}

export default class Main extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = { ...initState }
    }

    render ()
    {
        return (
            <div className='container-fluid'>
                <Routes />
            </div>
        );
    }
}

// Home.propTypes = {
//     name: PropTypes.array,
// }
