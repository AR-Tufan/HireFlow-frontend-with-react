import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function EmployerRankingPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="employer" active="/employer-ranking" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box ![margin-bottom:20px] rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2>Smart Candidate Ranking</h2>
                    <p className="![color:#64748B] ![font-size:14px] ![margin-bottom:15px]">Select a job to see the best-matched candidates automatically ranked by AI.</p>
                    
                    <select className="form-group ![max-width:300px] ![padding:10px] ![border-radius:8px] ![border:1px_solid_#E2E8F0] mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                        <option>Senior React Developer</option>
                        <option>UI/UX Designer</option>
                    </select>
                </div>

                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <table className="![width:100%] ![text-align:left] ![border-collapse:collapse] w-full border-collapse text-left">
                        <thead>
                            <tr className="![border-bottom:2px_solid_#E2E8F0]">
                                <th className="![padding:10px_0] border-b-2 border-[#E2E8F0] py-[10px]">Rank</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Candidate Name</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Match Score</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:bold] ![font-size:18px] ![color:#4F46E5] border-b border-[#E2E8F0] py-[15px]">1</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <strong>Rahim Ahmed</strong><br />
                                    <span className="![font-size:12px] ![color:#64748B]">3 Years Exp</span>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <div className="![display:flex] ![align-items:center] ![gap:10px]">
                                        <div className="![flex:1] ![background:#E2E8F0] ![height:8px] ![border-radius:4px] ![width:100px]">
                                            <div className="![width:85%] ![background:#10B981] ![height:8px] ![border-radius:4px]"></div>
                                        </div>
                                        <strong>85%</strong>
                                    </div>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><Link to="/employer-applicant-detail" className="btn btn-outline ![padding:5px_10px] ![font-size:12px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">View Profile</Link></td>
                            </tr>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:bold] ![font-size:18px] ![color:#64748B] border-b border-[#E2E8F0] py-[15px]">2</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <strong>Karim Khan</strong><br />
                                    <span className="![font-size:12px] ![color:#64748B]">2 Years Exp</span>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <div className="![display:flex] ![align-items:center] ![gap:10px]">
                                        <div className="![flex:1] ![background:#E2E8F0] ![height:8px] ![border-radius:4px] ![width:100px]">
                                            <div className="![width:60%] ![background:#f59e0b] ![height:8px] ![border-radius:4px]"></div>
                                        </div>
                                        <strong>60%</strong>
                                    </div>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><Link to="/employer-applicant-detail" className="btn btn-outline ![padding:5px_10px] ![font-size:12px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">View Profile</Link></td>
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
