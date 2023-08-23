
import './App.css'
import CheckBox from './components/CheckBox/CheckBox'
import FormHeading from './components/FormHeading/FormHeading'
import MCQ from './components/MCQ/MCQ'
import Paragraph from './components/Paragraph/Paragraph'
import ShortAnswer from './components/ShortAnswer/ShortAnswer'

function App() {


  return (
    <div className='bg-[#f0ebf8]'>
      <div className='w-1/3 mx-auto pt-5 pb-5'>
        <FormHeading></FormHeading>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
          <MCQ></MCQ>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
          <CheckBox></CheckBox>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
          <ShortAnswer></ShortAnswer>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
          <Paragraph></Paragraph>
      </div>
    </div>
  )
}

export default App
