import { Inputs } from './components/Inputs'
import { Result } from './components/Result'
import { FormContextProvider } from './context/FormContext'

function App() {

  return (
    <FormContextProvider>
      <div className="container">
        <div className="form">
          <Inputs/>
        </div>
          <Result/>
      </div>

    </FormContextProvider>
  )
}

export default App
