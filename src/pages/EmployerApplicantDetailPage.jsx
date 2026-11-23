import Sidebar from "../components/Sidebar";

export default function EmployerApplicantDetailPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="employer" active="/employer-applicant-detail" />

            <main className="dashboard-content flex flex-col gap-6">
                
                <div className="dashboard-box ![display:flex] ![justify-content:space-between] ![align-items:center] rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <div>
                        <h2>Rahim Ahmed</h2>
                        <p className="![color:#64748B]">rahim@email.com | +880 1700-000000</p>
                    </div>
                    <div>
                        <button className="btn btn-primary inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Shortlist</button>
                        <button className="btn btn-outline ![color:red] ![border-color:red] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Reject</button>
                    </div>
                </div>

                
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h3>Job Match Analysis</h3>
                    <p className="![font-size:14px] ![color:#64748B] ![margin-bottom:15px]">Comparing candidate profile with: <strong>Senior React Developer</strong></p>
                    
                    <div className="match-container mb-5 flex items-center gap-6 rounded-lg border border-[#C7D2FE] bg-[#EEF2FF] p-5">
                        <div className="match-circle flex h-20 w-20 items-center justify-center rounded-full bg-[conic-gradient(#10B981_85%,#E2E8F0_0)] text-xl font-bold text-[#0F172A]">
                            <div className="match-circle-inner flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#EEF2FF]">85%</div>
                        </div>
                        <div>
                            <h3 className="![color:#10B981]">Excellent Match</h3>
                            <p className="![font-size:14px]">The candidate has most of the required skills for this position.</p>
                        </div>
                    </div>

                    <div className="![display:grid] ![grid-template-columns:1fr_1fr] ![gap:20px]">
                        <div>
                            <strong className="![color:#166534]">✅ Matched Skills</strong>
                            <div className="skill-list mt-[10px] flex flex-wrap gap-2">
                                <span className="skill-tag skill-match rounded-full px-3 py-[5px] text-[13px] font-medium border border-[#bbf7d0] bg-[#dcfce7] text-[#166534]">React.js</span>
                                <span className="skill-tag skill-match rounded-full px-3 py-[5px] text-[13px] font-medium border border-[#bbf7d0] bg-[#dcfce7] text-[#166534]">JavaScript</span>
                                <span className="skill-tag skill-match rounded-full px-3 py-[5px] text-[13px] font-medium border border-[#bbf7d0] bg-[#dcfce7] text-[#166534]">HTML/CSS</span>
                                <span className="skill-tag skill-match rounded-full px-3 py-[5px] text-[13px] font-medium border border-[#bbf7d0] bg-[#dcfce7] text-[#166534]">Git</span>
                            </div>
                        </div>
                        <div>
                            <strong className="![color:#991b1b]">❌ Missing Skills</strong>
                            <div className="skill-list mt-[10px] flex flex-wrap gap-2">
                                <span className="skill-tag skill-missing rounded-full px-3 py-[5px] text-[13px] font-medium border border-[#fecaca] bg-[#fee2e2] text-[#991b1b]">Node.js</span>
                                <span className="skill-tag skill-missing rounded-full px-3 py-[5px] text-[13px] font-medium border border-[#fecaca] bg-[#fee2e2] text-[#991b1b]">MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h3>Candidate Profile</h3>
                    <p className="![margin-top:10px]"><strong>Experience:</strong> 3 Years in Frontend Development</p>
                    <p className="![margin-top:5px]"><strong>Education:</strong> B.Sc in CSE, University of Dhaka</p>
                    <div className="![margin-top:15px]">
                        <a href="#" className="btn btn-outline inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Download CV (PDF)</a>
                    </div>
                </div>
            </main>
        </div>
    </div>





    </>
  );
}
