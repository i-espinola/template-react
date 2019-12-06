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
            <React.Fragment>
                <section>
                    <h1>Hello world</h1>
                </section>
            </React.Fragment>
        );
    }
}

// Home.propTypes = {
//     name: PropTypes.array,
// }
