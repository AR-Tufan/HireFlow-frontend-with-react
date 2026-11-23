import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function EmployerCreateJobPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="employer" active="/employer-create-job" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2 className="![margin-bottom:20px]">Create a New Job Post</h2>
                    
                    <form action="employer-jobs.html">
                        <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                            <label>Job Title</label>
                            <input type="text" placeholder="e.g. Senior Frontend Developer" required />
                        </div>
                        
                        <div className="![display:grid] ![grid-template-columns:1fr_1fr] ![gap:20px]">
                            <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                                <label>Category</label>
                                <select>
                                    <option>IT & Software</option>
                                    <option>Marketing</option>
                                    <option>Engineering</option>
                                </select>
                            </div>
                            <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                                <label>Job Type</label>
                                <select>
                                    <option>Full Time</option>
                                    <option>Part Time</option>
                                    <option>Remote</option>
                                </select>
                            </div>
                            <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                                <label>Location</label>
                                <input type="text" placeholder="e.g. Dhaka, Bangladesh" />
                            </div>
                            <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                                <label>Salary Range (Optional)</label>
                                <input type="text" placeholder="e.g. ৳ 50,000 - 80,000" />
                            </div>
                        </div>

                        <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                            <label>Required Skills (Comma separated)</label>
                            <input type="text" placeholder="e.g. React.js, Node.js, MongoDB" />
                        </div>

                        <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                            <label>Job Description & Requirements</label>
                            <textarea rows="6" placeholder="Write job details here..." className="![width:100%] ![padding:12px] ![border:1px_solid_#E2E8F0] ![border-radius:8px] ![font-family:Manrope,_sans-serif]"></textarea>
                        </div>

                        <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                            <label>Application Deadline</label>
                            <input type="date" />
                        </div>

                        <button type="submit" className="btn btn-primary ![padding:12px_30px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Publish Job</button>
                        <Link to="/employer-jobs" className="btn btn-outline ![padding:12px_30px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Cancel</Link>
                    </form>
                </div>
            </main>
        </div>
    </div>





    </>
  );
}
