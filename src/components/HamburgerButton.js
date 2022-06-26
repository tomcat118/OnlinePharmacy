import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
          <div>
                <div onClick = {this.handleClick}> 
                    <form className = {this.state.isToggleOn ? ' ' : 'hamburger_top'}> </form>
                    <form className = {this.state.isToggleOn ? ' ' : 'middle_top'}> </form>
                    <form className = {this.state.isToggleOn ? ' ' : 'hamburger_middle'}> </form>
                    <form className = {this.state.isToggleOn ? ' ' : 'middle_bottom'}> </form>
                    <form className = {this.state.isToggleOn ? ' ' : 'hamburger_bottom'}> </form>
                    <form className = {this.state.isToggleOn ? 'xmark_left' : ' '}> </form>
                        <form className = {this.state.isToggleOn ? 'xmark_right' : ' '}> </form>
                </div>
                
                <div className = {this.state.isToggleOn ? 'signout' : ''}> </div>
                <div className = {this.state.isToggleOn ? 'signout_text' : ''}>
                        Sign Out
                </div>
          </div>
      );
    }
}

const HamburgerButton = () => {
  return (
    <div>
        <Toggle/> 
    </div>
  )
}

export default HamburgerButton