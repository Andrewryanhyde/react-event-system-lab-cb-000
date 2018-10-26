import React from 'react'

class Keypad extends React.component{

  entering = () => {
    console.log('Entering password...')
  }

  render() {
    return 
      <input type='password' onKeyUp={this.entering}/>
  }
}