import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import HeaderFunc from '../components/Header'
import FormExample from '../components/reactformexample'
import actions from '../actions/formAction'
import { SubmissionError } from 'redux-form'

class App extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    let inlineStyle = {color:'blue'}
    return (
        <div className="_app">
          <h1 style={inlineStyle}> Redux Form Submission</h1>
          <HeaderFunc />
          <FormExample />
        </div>

      )
  }

}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
