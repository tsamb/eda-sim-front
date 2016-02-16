import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class JoshDialogueBox extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="JoshDialogueBox">
        <div className="JoshImage">
          <img className="josh" src="../img/josh.jpg"></img>
        </div>
        <div className="JoshDialogue">
          <p className="JoshWords">"Hello welcome to EDA! My name is Josh. Please choose your first challenge."</p>
          <button onClick={this.startGame}>Continue</button>
        </div>
      </div>
    )
  }
}

reactMixin(JoshDialogueBox.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const JoshDialogueContainer = connect(mapStateToProps)(JoshDialogueBox)