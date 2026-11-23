import Sidebar from "../components/Sidebar";

export default function AdminReportsPage() {
  return (
    <>

    
    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="admin" active="/admin-reports" />
            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2>Platform Analytics</h2>
                    <p className="![color:#64748B] ![margin-top:10px]">Charts and graphical reports will be displayed here in the final version.</p>
                    <div className="![height:300px] ![background:#F8FAFC] ![border:2px_dashed_#E2E8F0] ![border-radius:8px] ![display:flex] ![align-items:center] ![justify-content:center] ![margin-top:20px]">
                        <span className="![color:#64748B]">Graph Placeholder</span>
                    </div>
                </div>
            </main>
        </div>
    </div>





    </>
  );
}
