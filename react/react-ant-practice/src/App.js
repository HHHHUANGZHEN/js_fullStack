import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Icon } from 'antd'
import './App.css';
import 'antd/dist/antd.css'
import TouchableOpacite from './TouchableOpacity.jsx'

const size = 'large'
class App extends Components {
  constructor(props) {
    super(props)
    this.functionRef = null
    this.objectRef = React.createRef()
  }
  state = {
    value: ''
  }
  componentDidMount() {
    // 组件挂载在页面上
    // 通过原生js操作 dom
    this.refs.strRef.innerHTML = 'String Ref'
    this.refs.functionRef.innerHTML = 'Function Ref'
    this.objectRef.current.innerHTML = 'Object ref'       // 最推荐
    this.functionRef.addEventListener('click', () => {  // 不推荐使用
      console.log('function ref clicked')
    })
  }
  handlePrint1 = () => {
    console.log(this.inputRef.current.value)
  }
  handleInputChange = (e) => {
    let value = e.target.value
    value = value.slice(0, 10)
    this.setState({
      value
    })
  }
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button type="link">Link</Button>
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
        <TouchableOpacite>确定</TouchableOpacite>
        <TouchableOpacite>取消</TouchableOpacite>
        <h1 ref="strRef"></h1>
        <h1 ref={(node) =>{this.functionRef = node}}></h1>
        <h1 ref={this.objectRef}></h1>
        {/* 非受控 */}
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.handlePrint1}>btn1</button>
        {/* 受控 
          value state
          来源应该单一  value 应该来自于 state
        */}
        <input type="text" value={this.state.value} onChange={this.handleInputChange}></input>
        <button onClick={this.handlePrint2}>btn2</button>
      </div>
    )
  }
}

export default App;
