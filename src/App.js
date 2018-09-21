import './index.css'
import React, { Component } from 'react'
import FaPlay from 'react-icons/lib/fa/play'
import FaPause from 'react-icons/lib/fa/pause'
import FaForward from 'react-icons/lib/fa/forward'
import FaBackward from 'react-icons/lib/fa/backward'

class RadioGroup extends Component {
  constructor() {
    super();
    this.state= {
      selected : false,
      isActive : false
    }
  }

  selectItem = (selected) => {this.setState({ selected })
};

  render() {
  const fn = child => React.cloneElement(child, {
    isActive: this.state.isActive,
    onClick: this.selectItem
  });
  const  items = React.Children.map(this.props.children, fn);
    return (
      <fieldset className="radio-group">
        <legend>{this.props.legend}</legend>
        {items}
      </fieldset>
    )
  }
}

class RadioButton extends Component {
  
  render() {
    const isActive = this.props.isActive;
    const className = 'radio-button ' + (isActive ? 'active' : '')
    return (
      <button className={className}>
        {this.props.children}
      </button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <RadioGroup
         legend="Radio Group">
          <RadioButton value="back"><FaBackward/></RadioButton>
          <RadioButton value="play"><FaPlay/></RadioButton>
          <RadioButton value="pause"><FaPause/></RadioButton>
          <RadioButton value="forward"><FaForward/></RadioButton>
        </RadioGroup>
      </div>
    )
  }
}

export default App
