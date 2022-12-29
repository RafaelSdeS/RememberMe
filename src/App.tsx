import { ToRemember } from './components/ToRemember'
import { Remembered } from './components/Remembered'

function App() {

  let remembered:object[] = [
     ['text1', 'date1', 'red', 1],
     ['text2', 'date2', 'green', 2],
     ['text3', 'date3', 'yellow', 3]

  ]

  return (
    <div className="App">
      <h1 className='bg-blue-400 self-center text-center p-4 text-2xl'>RememberMe</h1>
      <ToRemember />
      {remembered.map(array => 
        <Remembered text={array[0]} date={array[1]} importance={array[2]} index={array[3]} />      
      )}
    </div>
  )
}

export default App
