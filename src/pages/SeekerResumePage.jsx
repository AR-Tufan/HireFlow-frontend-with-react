import Sidebar from "../components/Sidebar";

export default function SeekerResumePage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="seeker" active="/seeker-resume" />

            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2 className="![margin-bottom:20px]">Upload Your CV</h2>
                    
                    <div className="upload-area">
                        <div className="![font-size:40px] ![color:#4F46E5] ![margin-bottom:10px]">📄</div>
                        <h3>Drag & Drop your PDF here</h3>
                        <p className="![color:#64748B] ![font-size:14px] ![margin-bottom:15px]">or click to browse from your computer</p>
                        <button className="btn btn-primary inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Select File</button>
                        <p className="![font-size:12px] ![margin-top:10px] ![color:#64748B]">Supported format: PDF only (Max 5MB)</p>
                    </div>
                </div>

                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h3 className="![margin-bottom:15px]">Extracted Information</h3>
                    <p className="![font-size:14px] ![color:#64748B] ![margin-bottom:15px]">Our AI has extracted the following data from your CV. Please review.</p>
                    
                    <div className="![margin-bottom:15px]">
                        <strong>Skills:</strong> <br />
                        <span className="job-tag ![margin-top:5px] ![display:inline-block] rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">React.js</span>
                        <span className="job-tag ![margin-top:5px] ![display:inline-block] rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Node.js</span>
                        <span className="job-tag ![margin-top:5px] ![display:inline-block] rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">MongoDB</span>
                    </div>

                    <div className="![margin-bottom:15px]">
                        <strong>Education:</strong> <br />
                        <span className="![font-size:14px]">B.Sc in Computer Science - University of Dhaka</span>
                    </div>

                    <button className="btn btn-outline inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Edit Information</button>
                </div>
            </main>
        </div>
    </div>

    



    </>
  );
}
