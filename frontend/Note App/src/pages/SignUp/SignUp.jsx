import { NavLink } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignUp() {
      const [showPassword, setShowPassword] = useState(false)

    return (
    <>
      <div className="min-h-[calc(100vh-100px)]  flex items-center justify-center">
        <div className=" w-full max-w-sm bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-2xl text-mainColor font-semibold mb-6">SignUp</h1>
          <form onSubmit={() => { }} className="flex flex-col w-full gap-1">
            <input type="text" className="input" placeholder="name" /> 
            <input type="email" className="input" placeholder="email" />
            <div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} className="input" placeholder="password" />
                <button onClick={() => {
                  setShowPassword(!showPassword)
                }}
                  type="button"
                  className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button className="w-full btn-filled mt-3" type='submit'>Creata an account</button>



          </form>
          <div className="mt-5 w-fit m-auto">
            <span className="font-medium ">Already Have An Account?</span>
            <NavLink to='/login' className="text-mainColor">Log In</NavLink>

          </div>
        </div>
      </div>
    </>
  )
}
