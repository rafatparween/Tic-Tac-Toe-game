import './App.css'
import Board from './board.jsx';

function App() {

  return (
    <>
		<h1 className="bg-purple-300 h-36 flex items-center justify-center ext-blue-600 text-blue-600 text-4xl leading-relaxed line-height-[3rem]">Welcome to Tic-Tac-Toe Game</h1>
		<div className="bg-blue-900 min-h-screen flex items-center justify-center">
      		<Board />
    	</div>
    </>	
  )
}

export default App;
