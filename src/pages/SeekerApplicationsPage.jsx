import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function SeekerApplicationsPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="seeker" active="/seeker-applications" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2 className="![margin-bottom:20px]">My Applications</h2>
                    
                    <table className="![width:100%] ![text-align:left] ![border-collapse:collapse] w-full border-collapse text-left">
                        <thead>
                            <tr className="![border-bottom:2px_solid_#E2E8F0]">
                                <th className="![padding:10px_0] border-b-2 border-[#E2E8F0] py-[10px]">Job Title</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Company</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Applied Date</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] border-b border-[#E2E8F0] py-[15px]">
                                    <Link to="/job-details" className="![font-weight:500] text-[#4F46E5] no-underline">Senior React Developer</Link>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Google</td>
                                <td className="![color:#64748B] ![font-size:14px] border-b border-[#E2E8F0] py-[15px]">10 Oct 2026</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![background:#dcfce7] ![color:#166534] ![padding:5px_10px] ![border-radius:4px] ![font-size:12px]">Shortlisted</span></td>
                            </tr>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] border-b border-[#E2E8F0] py-[15px]">
                                    <Link to="/job-details" className="![font-weight:500] text-[#4F46E5] no-underline">Node.js Developer</Link>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Brain Station 23</td>
                                <td className="![color:#64748B] ![font-size:14px] border-b border-[#E2E8F0] py-[15px]">08 Oct 2026</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![background:#fef3c7] ![color:#92400e] ![padding:5px_10px] ![border-radius:4px] ![font-size:12px]">Under Review</span></td>
                            </tr>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] border-b border-[#E2E8F0] py-[15px]">
                                    <Link to="/job-details" className="![font-weight:500] text-[#4F46E5] no-underline">Frontend Engineer</Link>
                                </td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Fiverr</td>
                                <td className="![color:#64748B] ![font-size:14px] border-b border-[#E2E8F0] py-[15px]">01 Oct 2026</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![background:#fee2e2] ![color:#991b1b] ![padding:5px_10px] ![border-radius:4px] ![font-size:12px]">Rejected</span></td>
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
