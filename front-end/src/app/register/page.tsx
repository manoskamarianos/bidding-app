import { RegisterForm } from '@/components/register-form'  

export default function Register() {
  return (
      <div className="flex-1 flex w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-[800px]">
          <RegisterForm />
        </div>
      </div>
  )
}
