import { TestFormProvider } from '../TestFormProvider'
import AnotherComponent from './AnotherComponent'
import { FormComponent } from './Form'

export const TestPage = () => {
  return (
    <TestFormProvider>
      <h1>Test Page</h1>
      <FormComponent />
      <AnotherComponent />
    </TestFormProvider>
  )
}
