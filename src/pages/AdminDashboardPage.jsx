import Sidebar from "../components/Sidebar";

export default function AdminDashboardPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            
            <Sidebar role="admin" active="/admin-dashboard" />

            
            <main className="dashboard-content flex flex-col gap-6">
                <h2>Platform Overview</h2>
                
                <div className="stat-grid grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[15px]">
                    <div className="stat-card border border-[#E2E8F0] border-l-4 border-l-[#4F46E5] rounded-2xl bg-white p-6 [&_h4]:mb-[5px] [&_h4]:text-sm [&_h4]:text-[#64748B] [&_h2]:text-[28px] [&_h2]:text-[#0F172A] shadow-sm">
                        <h4>Total Users</h4>
                        <h2>1,250</h2>
                    </div>
                    <div className="stat-card ![border-left-color:#10B981] border border-[#E2E8F0] border-l-4 border-l-[#4F46E5] rounded-2xl bg-white p-6 [&_h4]:mb-[5px] [&_h4]:text-sm [&_h4]:text-[#64748B] [&_h2]:text-[28px] [&_h2]:text-[#0F172A] shadow-sm">
                        <h4>Job Seekers</h4>
                        <h2>1,100</h2>
                    </div>
                    <div className="stat-card ![border-left-color:#f59e0b] border border-[#E2E8F0] border-l-4 border-l-[#4F46E5] rounded-2xl bg-white p-6 [&_h4]:mb-[5px] [&_h4]:text-sm [&_h4]:text-[#64748B] [&_h2]:text-[28px] [&_h2]:text-[#0F172A] shadow-sm">
                        <h4>Employers</h4>
                        <h2>150</h2>
                    </div>
                    <div className="stat-card ![border-left-color:#8b5cf6] border border-[#E2E8F0] border-l-4 border-l-[#4F46E5] rounded-2xl bg-white p-6 [&_h4]:mb-[5px] [&_h4]:text-sm [&_h4]:text-[#64748B] [&_h2]:text-[28px] [&_h2]:text-[#0F172A] shadow-sm">
                        <h4>Active Jobs</h4>
                        <h2>320</h2>
                    </div>
                </div>

                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h3 className="![margin-bottom:15px]">Recent Registrations</h3>
                    <table className="![width:100%] ![text-align:left] ![border-collapse:collapse] w-full border-collapse text-left"><tbody>
                        <tr className="![border-bottom:1px_solid_#E2E8F0]">
                            <th className="![padding:10px_0] border-b-2 border-[#E2E8F0] py-[10px]">Name</th>
                            <th className="border-b-2 border-[#E2E8F0] py-[10px]">Role</th>
                            <th className="border-b-2 border-[#E2E8F0] py-[10px]">Date</th>
                            <th className="border-b-2 border-[#E2E8F0] py-[10px]">Status</th>
                        </tr>
                        <tr>
                            <td className="![padding:10px_0] border-b border-[#E2E8F0] py-[15px]">Tanvir Hasan</td>
                            <td className="border-b border-[#E2E8F0] py-[15px]">Job Seeker</td>
                            <td className="border-b border-[#E2E8F0] py-[15px]">Today</td>
                            <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![background:#dcfce7] ![color:#166534] ![padding:3px_8px] ![border-radius:4px] ![font-size:12px]">Active</span></td>
                        </tr>
                        <tr>
                            <td className="![padding:10px_0] border-b border-[#E2E8F0] py-[15px]">Tech BD Ltd.</td>
                            <td className="border-b border-[#E2E8F0] py-[15px]">Employer</td>
                            <td className="border-b border-[#E2E8F0] py-[15px]">Today</td>
                            <td className="border-b border-[#E2E8F0] py-[15px]"><span className="![background:#fef3c7] ![color:#92400e] ![padding:3px_8px] ![border-radius:4px] ![font-size:12px]">Pending Verification</span></td>
                        </tr>
                    </tbody></table>
                </div>
            </main>
        </div>
    </div>





    </>
  );
}
