import Sidebar from "../components/Sidebar";

export default function AdminEmployersPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="admin" active="/admin-employers" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2 className="![margin-bottom:20px]">Pending Employer Verifications</h2>
                    
                    <table className="![width:100%] ![text-align:left] ![border-collapse:collapse] w-full border-collapse text-left">
                        <thead>
                            <tr className="![border-bottom:2px_solid_#E2E8F0]">
                                <th className="![padding:10px_0] border-b-2 border-[#E2E8F0] py-[10px]">Company Name</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Contact Person</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Status</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:500] border-b border-[#E2E8F0] py-[15px]">ABC Technologies</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Karim Khan<br /><span className="![font-size:12px] ![color:#64748B]">karim@abc.com</span></td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![color:#92400e] ![font-weight:500]">Pending</span></td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <button className="btn btn-primary ![padding:5px_10px] ![font-size:12px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Verify</button>
                                    <button className="btn btn-outline ![padding:5px_10px] ![font-size:12px] ![color:red] ![border-color:red] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Reject</button>
                                </td>
                            </tr>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:500] border-b border-[#E2E8F0] py-[15px]">XYZ Solutions</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Sadia Islam<br /><span className="![font-size:12px] ![color:#64748B]">sadia@xyz.com</span></td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![color:#166534] ![font-weight:500]">Verified</span></td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">
                                    <span className="![font-size:12px] ![color:#64748B]">No actions needed</span>
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
