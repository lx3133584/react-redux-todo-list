import React, { Component, PropTypes } from 'react'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) return <span className="button">{name}</span>
    return (
      <button className="button" onClick={e => {this.props.setFilter(filter)}}>{name}</button>
    )
  }

  render() {
    return (
      <div>Filter:
        {this.renderFilter('SHOW_ALL', 'All')}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
      </div>
    )
  }
}