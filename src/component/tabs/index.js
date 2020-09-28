import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TabData: [
        { title: '首页', id: 'home' },
        { title: '分类', id: 'category' },
        { title: '识物', id: 'topic' },
        { title: '购物车', id: 'cart' },
        { title: '我的', id: 'mine' }
      ]
    }
  }
  render () {
    let tabList = this.state.TabData.map(item => {
      return (
        <NavLink key={item.id}
          to={`/${item.id}`}
          className='tab border-top'>{item.title}</NavLink>
      )
    })

    return (
      <div className="tabs">
        {tabList}
      </div>
    )
  }
}