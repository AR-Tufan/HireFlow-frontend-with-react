import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function SeekerSavedJobsPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="seeker" active="/seeker-saved-jobs" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2 className="![margin-bottom:20px]">Saved Jobs</h2>
                    <div className="job-grid ![grid-template-columns:repeat(auto-fit,_minmax(300px,_1fr))] mb-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        
                        <div className="job-card rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                            <div className="job-card-header mb-[15px] flex gap-[15px]">
                                <div className="company-logo flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-xl font-bold text-[#4F46E5]">G</div>
                                <div>
                                    <h3 className="job-title mb-[5px] text-lg text-[#0F172A]">Frontend Developer</h3>
                                    <p className="company-name text-sm text-[#64748B]">Google</p>
                                </div>
                            </div>
                            <div className="job-details mb-5 flex flex-wrap gap-[10px]">
                                <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Dhaka, BD</span>
                                <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Full Time</span>
                            </div>
                            <div className="job-card-footer flex items-center justify-between border-t border-[#E2E8F0] pt-[15px]">
                                <Link to="/job-details" className="btn btn-outline ![width:48%] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">View</Link>
                                <button className="btn btn-primary ![width:48%] ![background:red] ![border-color:red] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Remove</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    </div>





    </>
  );
}
