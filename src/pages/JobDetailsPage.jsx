import { Link } from "react-router-dom";

export default function JobDetailsPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="job-details-layout">
            
            <main className="job-main-box">
                <h2>Senior React Developer</h2>
                <div className="job-meta">
                    <strong>Google</strong> &bull; Dhaka, Bangladesh &bull; Full Time
                </div>

                <h3>Job Description</h3>
                <p>We are looking for an experienced React Developer to join our dynamic team. You will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack.</p>

                <h3>Responsibilities</h3>
                <ul>
                    <li>Developing new user-facing features using React.js</li>
                    <li>Building reusable components and front-end libraries for future use</li>
                    <li>Translating designs and wireframes into high-quality code</li>
                </ul>

                <h3>Requirements</h3>
                <ul>
                    <li>3+ years of experience in React.js development</li>
                    <li>Strong proficiency in JavaScript, including DOM manipulation</li>
                    <li>Experience with Node.js and MongoDB is a plus</li>
                </ul>
            </main>

            
            <aside className="job-side-box">
                <div className="![text-align:center] ![margin-bottom:20px]">
                    <div className="company-logo ![margin:0_auto_10px] ![width:60px] ![height:60px] ![font-size:24px] flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-xl font-bold text-[#4F46E5]">G</div>
                    <h3>Google</h3>
                    <Link to="/company-profile" className="![font-size:14px] text-[#4F46E5] no-underline">View Company Profile</Link>
                </div>

                <div className="![border-top:1px_solid_#E2E8F0] ![padding-top:15px] ![margin-bottom:20px]">
                    <p className="![font-size:14px] ![margin-bottom:8px]"><strong>Salary:</strong> ৳ 80,000 - 120,000</p>
                    <p className="![font-size:14px] ![margin-bottom:8px]"><strong>Deadline:</strong> 30 Oct 2026</p>
                    <p className="![font-size:14px]"><strong>Applicants:</strong> 45</p>
                </div>

                <Link to="/seeker-dashboard" className="btn btn-primary btn-block ![margin-bottom:10px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] w-full p-3 text-base items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Apply Now</Link>
                <Link to="/seeker-saved-jobs" className="btn btn-outline btn-block inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white w-full p-3 text-base items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Save Job</Link>
            </aside>
        </div>
    </div>

    



    </>
  );
}
