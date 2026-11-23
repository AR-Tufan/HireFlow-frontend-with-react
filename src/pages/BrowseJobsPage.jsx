import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function BrowseJobsPage() {
  return (
    <>

    

    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="browse-layout mt-[30px] grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-[30px]">
            
            <aside className="filter-box rounded-2xl border border-[#E2E8F0] bg-white p-6 [&_h3]:mb-5 [&_h3]:border-b [&_h3]:border-[#E2E8F0] [&_h3]:pb-[10px] [&_h3]:text-lg shadow-sm">
                <h3>Filter Jobs</h3>
                <div className="filter-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_select]:w-full [&_select]:rounded [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-[10px] [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100">
                    <label>Category</label>
                    <select>
                        <option>All Categories</option>
                        <option>IT & Software</option>
                        <option>Marketing</option>
                    </select>
                </div>
                <div className="filter-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_select]:w-full [&_select]:rounded [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-[10px] [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100">
                    <label>Location</label>
                    <select>
                        <option>Any Location</option>
                        <option>Dhaka</option>
                        <option>Remote</option>
                    </select>
                </div>
                <button className="btn btn-primary btn-block inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] w-full p-3 text-base items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Apply Filters</button>
            </aside>

            
            <main>
                <div className="job-card ![margin-bottom:15px] rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                    <div className="job-card-header mb-[15px] flex gap-[15px]">
                        <div className="company-logo flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-xl font-bold text-[#4F46E5]">G</div>
                        <div>
                            <h3 className="job-title mb-[5px] text-lg text-[#0F172A]">Senior React Developer</h3>
                            <p className="company-name text-sm text-[#64748B]">Google</p>
                        </div>
                    </div>
                    <div className="job-details mb-5 flex flex-wrap gap-[10px]">
                        <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Dhaka, BD</span>
                        <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Full Time</span>
                        <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">React.js</span>
                    </div>
                    <div className="job-card-footer flex items-center justify-between border-t border-[#E2E8F0] pt-[15px]">
                        <span className="salary font-semibold text-[#10B981]">৳ 80,000 - 120,000</span>
                        <Link to="/job-details" className="btn btn-outline inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">View Details</Link>
                    </div>
                </div>

                <div className="job-card rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                    <div className="job-card-header mb-[15px] flex gap-[15px]">
                        <div className="company-logo flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-xl font-bold text-[#4F46E5]">B</div>
                        <div>
                            <h3 className="job-title mb-[5px] text-lg text-[#0F172A]">Node.js Backend Developer</h3>
                            <p className="company-name text-sm text-[#64748B]">Brain Station 23</p>
                        </div>
                    </div>
                    <div className="job-details mb-5 flex flex-wrap gap-[10px]">
                        <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Dhaka, BD</span>
                        <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Full Time</span>
                        <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">MongoDB</span>
                    </div>
                    <div className="job-card-footer flex items-center justify-between border-t border-[#E2E8F0] pt-[15px]">
                        <span className="salary font-semibold text-[#10B981]">৳ 60,000 - 90,000</span>
                        <Link to="/job-details" className="btn btn-outline inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">View Details</Link>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <Footer variant="compact" />



 



    </>
  );
}
