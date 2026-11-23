import Sidebar from "../components/Sidebar";

export default function AdminUsersPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="admin" active="/admin-users" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2 className="![margin-bottom:20px]">All Registered Users</h2>
                    
                    <table className="![width:100%] ![text-align:left] ![border-collapse:collapse] w-full border-collapse text-left">
                        <thead>
                            <tr className="![border-bottom:2px_solid_#E2E8F0]">
                                <th className="![padding:10px_0] border-b-2 border-[#E2E8F0] py-[10px]">User Name</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Email</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Role</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Status</th>
                                <th className="border-b-2 border-[#E2E8F0] py-[10px]">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:500] border-b border-[#E2E8F0] py-[15px]">Rahim Ahmed</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">rahim@email.com</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Job Seeker</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![color:#166534] ![font-weight:500]">Active</span></td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><button className="btn btn-outline ![padding:5px_10px] ![font-size:12px] ![color:red] ![border-color:red] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Suspend</button></td>
                            </tr>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:500] border-b border-[#E2E8F0] py-[15px]">Tech BD Ltd.</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">hr@techbd.com</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Employer</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![color:#166534] ![font-weight:500]">Active</span></td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><button className="btn btn-outline ![padding:5px_10px] ![font-size:12px] ![color:red] ![border-color:red] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Suspend</button></td>
                            </tr>
                            <tr className="![border-bottom:1px_solid_#E2E8F0]">
                                <td className="![padding:15px_0] ![font-weight:500] border-b border-[#E2E8F0] py-[15px]">Spam User</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">spam@email.com</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]">Job Seeker</td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![color:red] ![font-weight:500]">Suspended</span></td>
                                <td className="border-b border-[#E2E8F0] py-[15px]"><button className="btn btn-primary ![padding:5px_10px] ![font-size:12px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Activate</button></td>
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
