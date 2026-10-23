import NavBar from '../components/NavBar/NavBar'
import StepperForm from '../components/StepperForm/StepperForm'
export default function page() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <div className="w-full flex justify-center items-center min-h-[calc(100vh-99px)]">
        <StepperForm />
      </div>
    </div>
  )
}
