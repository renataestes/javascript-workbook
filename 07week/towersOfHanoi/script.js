'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block: null
     };
  }

clickStack=(stackid)=>{
  const state = {...this.state};
  //state['block'] = this.state.block;
  //const attribute = element.getAttribute('data-block').value;
  //const children = this.state.['block'];
  const currentStack = document.getElementById(stackid);
  const children = currentStack.children;
  const lastChild = children.item(children.length-1);

    if (state['block'] == null) {
      state['block'] = currentStack.removeChild(lastChild);
    } else {
      if ( (lastChild != null) && (parseInt(lastChild.dataset['block']) < parseInt(state['block'].dataset['block']))) {
        alert("Invalid Move");
      } else {
        currentStack.appendChild(state['block']);
        state['block'] = null;
      }
    }

   if (document.getElementById('stack2').children.length >= 4 || document.getElementById('stack2').children.length >= 4 ){
    state.win = (`You win!`);
   }

this.setState(state)
};

  render() {
    return (
      <div>
        <div id="stack1" data-stack="1" onClick={() => this.clickStack('stack1')}>{this.state.stack1}
          <div data-block="100"></div>
          <div data-block="75"></div>
          <div data-block="50"></div>
          <div data-block="25"></div>
        </div>
        <div id="stack2" data-stack="2" onClick={() => this.clickStack('stack2')}>{this.state.stack2}</div>
        <div id="stack3" data-stack="3" onClick={() => this.clickStack('stack3')}>{this.state.stack3}</div>
      <div id="announce-game-won">{this.state.win}</div>
    </div>
    );
  }
}
//<div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
