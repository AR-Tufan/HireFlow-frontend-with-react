import Sidebar from "../components/Sidebar";

export default function EmployerNotificationsPage() {
  return (
    <>

    
    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="employer" active="/employer-notifications" />
            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2 className="![margin-bottom:20px]">Notifications</h2>
                    <div className="![padding:15px] ![border-bottom:1px_solid_#E2E8F0] ![background:#EEF2FF]">
                        <p><strong>New Applicant:</strong> Rahim Ahmed applied for Senior React Developer. <span className="![font-size:12px] ![color:#64748B]">(10 mins ago)</span></p>
                    </div>
                    <div className="![padding:15px] ![border-bottom:1px_solid_#E2E8F0]">
                        <p><strong>New Applicant:</strong> Karim Khan applied for Senior React Developer. <span className="![font-size:12px] ![color:#64748B]">(1 hour ago)</span></p>
                    </div>
                </div>
            </main>
        </div>
    </div>





    </>
  );
}
