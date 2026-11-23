import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function EmployerApplicantsPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="employer" active="/employer-applicants" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box ![margin-bottom:20px] rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2>Applicants for: <span className="![color:#4F46E5]">Senior React Developer</span></h2>
                </div>

                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <table className="![width:100%] ![text-align:left] ![border-collapse:collapse] w-full border-collapse text-left">
                        <thead>
                            <tr className="![border-bottom:2px_solid_#E2E8F0]">
                                <th className="![padding:10px_0] border-b-2 border-[#E2E8F0] py-[10px]">Candidate Name</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Applied Date</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Match Score</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Status</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] border-b border-[#E2E8F0] py-[15px]">
                                    <strong>Rahim Ahmed</strong><br />
                                    <span className="![font-size:12px] ![color:#64748B]">rahim@email.com</span>
                                </td>
                                <td className="![font-size:14px] border-b border-[#E2E8F0] py-[15px]">14 Oct 2026</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <span className="![background:#dcfce7] ![color:#166534] ![padding:4px_10px] ![border-radius:4px] ![font-weight:bold]">85% Match</span>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Pending</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <Link to="/employer-applicant-detail" className="btn btn-primary ![padding:5px_10px] ![font-size:12px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">View Profile</Link>
                                </td>
                            </tr>
                            
                            
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] border-b border-[#E2E8F0] py-[15px]">
                                    <strong>Karim Khan</strong><br />
                                    <span className="![font-size:12px] ![color:#64748B]">karim@email.com</span>
                                </td>
                                <td className="![font-size:14px] border-b border-[#E2E8F0] py-[15px]">13 Oct 2026</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <span className="![background:#fef3c7] ![color:#92400e] ![padding:4px_10px] ![border-radius:4px] ![font-weight:bold]">60% Match</span>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Pending</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <Link to="/employer-applicant-detail" className="btn btn-outline ![padding:5px_10px] ![font-size:12px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">View Profile</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>





    </>
  );
}
