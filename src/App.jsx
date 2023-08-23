
import './App.css'
import CheckBox from './components/CheckBox/CheckBox'
import Dropdown from './components/Dropdown/Dropdown'
import FileUpload from './components/FileUpload/FileUpload'
import FormHeading from './components/FormHeading/FormHeading'
import LinearScale from './components/LinearScale/LinearScale'
import MCQ from './components/MCQ/MCQ'
import MultiChoiceGrid from './components/MultiChoiceGrid/MultiChoiceGrid'
import Paragraph from './components/Paragraph/Paragraph'
import ShortAnswer from './components/ShortAnswer/ShortAnswer'
import TickBoxGrid from './components/TickBoxGrid/TickBoxGrid'

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
      <div className='w-1/3 mx-auto pb-5'>
          <Dropdown></Dropdown>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
          <FileUpload></FileUpload>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
          <LinearScale></LinearScale>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
          <MultiChoiceGrid></MultiChoiceGrid>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
          <TickBoxGrid></TickBoxGrid>
      </div>
      <div className='w-1/3 mx-auto pb-5'>
        <button className='bg-[#663bb7] hover:bg-[#5225a7] ease-in-out duration-200 text-white font-semibold px-6 py-2 rounded'>Submit</button>
      </div>
    </div>
  )
}

export default App
