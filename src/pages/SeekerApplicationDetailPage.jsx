import Sidebar from "../components/Sidebar";

export default function SeekerApplicationDetailPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="seeker" active="/seeker-application-detail" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2>Senior React Developer</h2>
                    <p className="![color:#64748B] ![font-size:14px]">Google &bull; Applied on 10 Oct 2026</p>
                    
                    <div className="timeline relative mt-5 pl-[30px] [&::before]:absolute [&::before]:bottom-0 [&::before]:left-2 [&::before]:top-0 [&::before]:w-0.5 [&::before]:bg-[#E2E8F0] [&::before]:content-['']">
                        <div className="timeline-item success relative mb-[25px] [&.active_.timeline-dot]:bg-[#4F46E5] [&.success_.timeline-dot]:bg-[#10B981]">
                            <div className="timeline-dot absolute left-[-30px] top-[2px] h-[18px] w-[18px] rounded-full border-[3px] border-white bg-[#E2E8F0]"></div>
                            <div className="timeline-content">
                                <h4>Application Submitted</h4>
                                <p>Your application was successfully submitted.</p>
                            </div>
                        </div>
                        <div className="timeline-item success relative mb-[25px] [&.active_.timeline-dot]:bg-[#4F46E5] [&.success_.timeline-dot]:bg-[#10B981]">
                            <div className="timeline-dot absolute left-[-30px] top-[2px] h-[18px] w-[18px] rounded-full border-[3px] border-white bg-[#E2E8F0]"></div>
                            <div className="timeline-content">
                                <h4>Under Review</h4>
                                <p>Employer is reviewing your profile.</p>
                            </div>
                        </div>
                        <div className="timeline-item active relative mb-[25px] [&.active_.timeline-dot]:bg-[#4F46E5] [&.success_.timeline-dot]:bg-[#10B981]">
                            <div className="timeline-dot absolute left-[-30px] top-[2px] h-[18px] w-[18px] rounded-full border-[3px] border-white bg-[#E2E8F0]"></div>
                            <div className="timeline-content">
                                <h4>Shortlisted (Current Stage)</h4>
                                <p>Congratulations! You have been shortlisted for an interview.</p>
                            </div>
                        </div>
                        <div className="timeline-item relative mb-[25px] [&.active_.timeline-dot]:bg-[#4F46E5] [&.success_.timeline-dot]:bg-[#10B981]">
                            <div className="timeline-dot absolute left-[-30px] top-[2px] h-[18px] w-[18px] rounded-full border-[3px] border-white bg-[#E2E8F0]"></div>
                            <div className="timeline-content">
                                <h4>Interview</h4>
                                <p>Pending scheduling...</p>
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
