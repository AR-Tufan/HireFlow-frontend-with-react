import Sidebar from "../components/Sidebar";

export default function EmployerInterviewsPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="employer" active="/employer-interviews" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box ![display:flex] ![justify-content:space-between] ![align-items:center] ![margin-bottom:20px] rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2>Scheduled Interviews</h2>
                    <button className="btn btn-primary inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">+ Schedule Interview</button>
                </div>

                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <table className="![width:100%] ![text-align:left] ![border-collapse:collapse] w-full border-collapse text-left">
                        <thead>
                            <tr className="![border-bottom:2px_solid_#E2E8F0]">
                                <th className="![padding:10px_0] border-b-2 border-[#E2E8F0] py-[10px]">Candidate</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Job Position</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Date & Time</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Platform</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:500] border-b border-[#E2E8F0] py-[15px]">Rahim Ahmed</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Senior React Developer</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">20 Oct 2026, 10:00 AM</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Google Meet</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![background:#dcfce7] ![color:#166534] ![padding:4px_8px] ![border-radius:4px] ![font-size:12px]">Upcoming</span></td>
                            </tr>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:500] border-b border-[#E2E8F0] py-[15px]">Sadia Islam</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">UI/UX Designer</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">18 Oct 2026, 02:00 PM</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Zoom</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![background:#F8FAFC] ![color:#374151] ![padding:4px_8px] ![border-radius:4px] ![font-size:12px]">Completed</span></td>
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
