

export default function RegisterPage() {
  return (
    <>

    

    <div className="auth-wrapper flex min-h-[80vh] items-center justify-center px-5 py-16 relative isolate before:absolute before:inset-x-0 before:top-0 before:h-64 before:bg-gradient-to-b before:from-indigo-50 before:to-transparent">
        <div className="auth-card w-full max-w-[450px] rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm [&_h2]:mb-[10px] [&_h2]:text-center relative z-10 shadow-[0_24px_70px_rgba(15,23,42,0.12)] sm:p-10">
            <h2>Create an Account</h2>
            <p className="subtitle mb-[25px] text-center text-sm text-[#64748B]">Join HireFlow today</p>
            <form action="login.html">
                <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                    <label>Full Name / Company Name</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                    <label>Register As</label>
                    <select>
                        <option value="seeker">Job Seeker</option>
                        <option value="employer">Employer</option>
                    </select>
                </div>
                <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                    <label>Password</label>
                    <input type="password" placeholder="Create a password" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] w-full p-3 text-base items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Register</button>
            </form>
        </div>
    </div>




    </>
  );
}
