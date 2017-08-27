'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
   super(props);
     this.state = {
         turn: 'X',
         //board: ['','','','','','','','',''];
         win:''
     };
 }
 handleClick=(cell)=>{
 const state = {...this.state};
 const lines = [
     ['0', '1', '2'],
     ['3', '4', '5'],
     ['6', '7', '8'],
     ['0', '3', '6'],
     ['1', '4', '7'],
     ['2', '5', '8'],
     ['0', '4', '8'],
     ['2', '4', '6']]
 // state['board'][cell] = this.state.turn;
 state[cell] = this.state.turn;
 state['turn'] = this.state.turn === 'X' ? 'O' : 'X'

//class emptyBoard

 // function testForWin(arr){
 const testForWin=(arr)=>{
   let counter = 0;
   for (var i = 0;i <arr.length;i++)
   {
     if (arr[i] === 'X') {
     counter+=1;
   }else if(arr[i]==='O'){
     counter-=1;
     }
     else {
       return -1;
     }
   }
   if(counter==3)
     return 0;
   if(counter==-3)
    return 0;
   return -1;
 }

for(var i=0 ;i < lines.length; i++)
{
  if(testForWin([state['cell'+lines[i][0]],
                state['cell'+lines[i][1]],
                state['cell'+lines[i][2]]])==0)
                state.win = `Congratulations Player ${this.state.turn}!`;
                //state.reset = '';

}

// for(var i=0 ;i < lines.length; i++)
// {
//   if(reset([state['cell'+lines[i][0]],
//             state['cell'+lines[i][1]],
//             state['cell'+lines[i][2]]])==0)
//             return this.state.reset = '';
// }

this.setState(state)
 };

  render() {
    const status = `Player ${this.state.turn} turn`
    return (
      <div>
        <div id="announce-winner">{status}</div>
        <div className="row">
          <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
          <div data-cell="1" onClick={() => this.handleClick('cell1')}>{this.state.cell1}</div>
          <div data-cell="2" onClick={() => this.handleClick('cell2')}>{this.state.cell2}</div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={() => this.handleClick('cell3')}>{this.state.cell3}</div>
          <div data-cell="4" onClick={() => this.handleClick('cell4')}>{this.state.cell4}</div>
          <div data-cell="5" onClick={() => this.handleClick('cell5')}>{this.state.cell5}</div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={() => this.handleClick('cell6')}>{this.state.cell6}</div>
          <div data-cell="7" onClick={() => this.handleClick('cell7')}>{this.state.cell7}</div>
          <div data-cell="8" onClick={() => this.handleClick('cell8')}>{this.state.cell8}</div>
        </div>
        <div id="announce-winner">{this.state.win}</div>
        <button type="reset" value="Reset">{this.state.reset}</button>
      </div>
    );
  }
}
ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
