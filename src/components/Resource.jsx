import React, { Component } from 'react'
import reactMixin from 'react-mixin'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import * as actionCreators from '../action_creators'

export class Resource extends Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <div className="resource">Resource</div>
    )
  }
}

reactMixin(Resource.prototype, PureRenderMixin)

function mapStateToProps(state) {
  return {

  }
}

export const ResourceContainer = connect(mapStateToProps, actionCreators)(Resource)