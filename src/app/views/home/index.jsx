import React from 'react'

// dependencys
import PropTypes from 'prop-types'

// Style
import '../../assets/scss/Home.scss'

// Components Childs
import Card from '../../components/Card'

export default class Home extends React.Component
{
    constructor (props)
    {
        super(props)
        this.state = {
			title: props.data.title,
			subtitle: props.data.subtitle,
		}
    }

    cardHeader = () =>
    {
        return (
            <React.Fragment>
                <h1>{ this.props.data.title }</h1>
            </React.Fragment>
        )
    }

    cardBody = () =>
    {
        return (
			<React.Fragment>
				<h3>{this.props.data.subtitle}</h3>
				<div className="btn-group">
					<button
						className="primary"
						onClick={() => this.changeProps()}
					>
						DataFlow test
					</button>
					<button
						className="secondary"
						onClick={() => this.changeProps()}
					>
						Reset
					</button>
				</div>
			</React.Fragment>
		)
    }

    changeProps = () =>
    { 
        debugger
        const title = this.state.title === this.props.data.title ? 'Title changed with sucess' : this.state.title
        const subtitle = this.state.subtitle === this.props.data.subtitle ? 'changed with sucess by dataFlow method' : this.state.subtitle
        const arrData = [
			['title', title],
			['subtitle', subtitle],
		]
        arrData.map(data => this.props.dataFlow(data))
    }

    render = () =>
    {
        return (
            <div className="container-fluid">
                <Card header={ this.cardHeader() } >
                    { this.cardBody() }
                </Card>
            </div>
        )
    }
}

Home.propTypes = {
	dataFlow: PropTypes.func.isRequired,
	data: PropTypes.object.isRequired,
}
