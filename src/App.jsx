
import './App.css'
import FormHeading from './components/FormHeading/FormHeading'
import MCQ from './components/MCQ/MCQ'

function App() {


  return (
    <div className='bg-[#f0ebf8]'>
      <div className='w-1/3 mx-auto pt-5 pb-5'>
        <FormHeading></FormHeading>
      </div>
      <div className='w-1/3 mx-auto pt-5 pb-5'>
          <MCQ></MCQ>
      </div>
    </div>
  )
}

export default App
