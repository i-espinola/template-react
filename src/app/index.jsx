import React from 'react'

// Tools
import { BrowserRouter } from "react-router-dom"

// Components Childs
import Header from './components/Header'
import Routes from './Routes'

const initState = {
	title: 'Welcome Geek',
	subtitle: 'Is the React boilerplate template',
}

export default class App extends React.Component 
{

    constructor (props)
    {
        super(props)
        this.state = {
            ...initState
        }
        this.dataFlow = this.dataFlow.bind(this)
    }

    dataFlow = (arrData) =>
    {
        this.setState({ [arrData[0]]: arrData[1] })
    }

    render = () =>
    {
        return (
            <BrowserRouter>
                <div className="main">
                    <Header />
                    <Routes data={ this.state } dataFlow={ this.dataFlow } />
                </div>
            </BrowserRouter>
        )
    }
}

