import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>


    
    

    
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-[#172554] to-[#312E81] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
            <div className="relative z-10">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-xs font-semibold tracking-wide text-indigo-100 shadow-lg shadow-slate-950/10 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                    A smarter way to build your career
                </div>
                <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                    Find work that
                    <span className="mt-2 block bg-gradient-to-r from-indigo-200 via-white to-emerald-200 bg-clip-text text-transparent">
                        moves you forward.
                    </span>
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                    Discover meaningful opportunities, meet ambitious teams, and take your next career step with confidence.
                </p>
                <div className="search-box mt-9 flex max-w-[700px] rounded-2xl border border-white/60 bg-white p-2 shadow-2xl shadow-slate-950/25 [&_input]:min-w-0 [&_input]:flex-1 [&_input]:rounded-xl [&_input]:border-0 [&_input]:bg-transparent [&_input]:px-4 [&_input]:py-3.5 [&_input]:text-base [&_input]:text-slate-900 [&_input]:outline-none [&_input]:placeholder:text-slate-400 [&_button]:rounded-xl [&_button]:px-6 [&_button]:py-3.5 [&_button]:text-sm [&_button]:font-bold">
                    <input type="text" placeholder="Job title, skill, or company" />
                    <button className="btn btn-primary inline-flex cursor-pointer rounded-xl bg-[#4F46E5] px-5 py-3 text-center font-semibold text-white transition duration-300 hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Search jobs</button>
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
                    <span className="inline-flex items-center gap-2"><span className="text-emerald-300">✓</span> Curated roles</span>
                    <span className="inline-flex items-center gap-2"><span className="text-emerald-300">✓</span> Trusted employers</span>
                    <span className="inline-flex items-center gap-2"><span className="text-emerald-300">✓</span> Better matches</span>
                </div>
            </div>

            <div className="relative mx-auto hidden w-full max-w-[460px] lg:block">
                <div aria-hidden="true" className="absolute -inset-5 rotate-3 rounded-[2rem] bg-gradient-to-br from-indigo-400/30 to-emerald-300/10 blur-xl" />
                <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
                    <div className="flex items-center justify-between px-2 pb-5">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">Your next move</p>
                            <p className="mt-1 text-lg font-bold text-white">A career, in motion</p>
                        </div>
                        <span className="rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-200">Live opportunities</span>
                    </div>
                    <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-xl">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-lg font-extrabold text-indigo-600">N</span>
                                <div>
                                    <p className="font-bold">Senior Product Designer</p>
                                    <p className="mt-1 text-sm text-slate-500">Northstar Labs · Dhaka / Remote</p>
                                </div>
                            </div>
                            <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">New</span>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">Product design</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">Full time</span>
                            <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">৳ 90k–130k</span>
                        </div>
                        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                            <div className="flex -space-x-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-[10px] font-bold text-indigo-700">A</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-[10px] font-bold text-emerald-700">S</span>
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-amber-100 text-[10px] font-bold text-amber-700">M</span>
                            </div>
                            <p className="text-xs font-medium text-slate-500">A great fit for your next chapter</p>
                        </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                            <p className="text-2xl font-extrabold text-white">1.2k+</p>
                            <p className="mt-1 text-xs font-medium text-slate-300">Open opportunities</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                            <p className="text-2xl font-extrabold text-white">92%</p>
                            <p className="mt-1 text-xs font-medium text-slate-300">Candidate satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="mx-auto max-w-[1280px] px-5 py-16 sm:py-20">
        <div className="mb-9 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#4F46E5]">Find your fit</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0F172A] sm:text-4xl">Explore by category</h2>
        </div>
        <div className="category-grid grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            <div className="category-card cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_40px_rgba(79,70,229,0.10)]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-xs font-extrabold text-indigo-600">IT</div>
                <h4>IT & Software</h4>
                <span className="mt-1 inline-block">120 jobs</span>
            </div>
            <div className="category-card cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_40px_rgba(79,70,229,0.10)]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xs font-extrabold text-emerald-600">EN</div>
                <h4>Engineering</h4>
                <span className="mt-1 inline-block">85 jobs</span>
            </div>
            <div className="category-card cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_40px_rgba(79,70,229,0.10)]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-xs font-extrabold text-amber-600">MK</div>
                <h4>Marketing</h4>
                <span className="mt-1 inline-block">64 jobs</span>
            </div>
            <div className="category-card cursor-pointer rounded-2xl border border-slate-200/80 bg-white p-6 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_18px_40px_rgba(79,70,229,0.10)]">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-xs font-extrabold text-violet-600">FI</div>
                <h4>Finance</h4>
                <span className="mt-1 inline-block">42 jobs</span>
            </div>
        </div>
    </section>

    
    <section className="con7tainer mx-auto max-w-[1280px] px-5">
        <h2 className="section-title mt-12 mb-5 text-center text-3xl font-extrabold text-[#0F172A]">Featured Jobs</h2>
        <div className="job-grid mb-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            
            <div className="job-card rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <div className="job-card-header mb-[15px] flex gap-[15px]">
                    <div className="company-logo flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-xl font-bold text-[#4F46E5]">G</div>
                    <div>
                        <h3 className="job-title mb-[5px] text-lg text-[#0F172A]">Frontend Developer</h3>
                        <p className="company-name text-sm text-[#64748B]">Google</p>
                    </div>
                </div>
                <div className="job-details mb-5 flex flex-wrap gap-[10px]">
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Dhaka, BD</span>
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Full Time</span>
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">React.js</span>
                </div>
                <div className="job-card-footer flex items-center justify-between border-t border-[#E2E8F0] pt-[15px]">
                    <span className="salary font-semibold text-[#10B981]">৳ 50,000 - 80,000</span>
                    <Link to="/job-details" className="btn btn-outline inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Apply Now</Link>
                </div>
            </div>

            
            <div className="job-card rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <div className="job-card-header mb-[15px] flex gap-[15px]">
                    <div className="company-logo flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-xl font-bold text-[#4F46E5]">B</div>
                    <div>
                        <h3 className="job-title mb-[5px] text-lg text-[#0F172A]">Backend Engineer</h3>
                        <p className="company-name text-sm text-[#64748B]">Brain Station 23</p>
                    </div>
                </div>
                <div className="job-details mb-5 flex flex-wrap gap-[10px]">
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Dhaka, BD</span>
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Full Time</span>
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Node.js</span>
                </div>
                <div className="job-card-footer flex items-center justify-between border-t border-[#E2E8F0] pt-[15px]">
                    <span className="salary font-semibold text-[#10B981]">৳ 60,000 - 90,000</span>
                    <Link to="/job-details" className="btn btn-outline inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Apply Now</Link>
                </div>
            </div>

            
            <div className="job-card rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                <div className="job-card-header mb-[15px] flex gap-[15px]">
                    <div className="company-logo flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-[#F8FAFC] text-xl font-bold text-[#4F46E5]">F</div>
                    <div>
                        <h3 className="job-title mb-[5px] text-lg text-[#0F172A]">UI/UX Designer</h3>
                        <p className="company-name text-sm text-[#64748B]">Fiverr</p>
                    </div>
                </div>
                <div className="job-details mb-5 flex flex-wrap gap-[10px]">
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Remote</span>
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Part Time</span>
                    <span className="job-tag rounded-[5px] bg-[#F8FAFC] px-[10px] py-[5px] text-xs">Figma</span>
                </div>
                <div className="job-card-footer flex items-center justify-between border-t border-[#E2E8F0] pt-[15px]">
                    <span className="salary font-semibold text-[#10B981]">৳ 40,000 - 60,000</span>
                    <Link to="/job-details" className="btn btn-outline inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 border border-[#4F46E5] bg-transparent text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Apply Now</Link>
                </div>
            </div>

        </div>
    </section>

    
    <Footer variant="full" />

    
    
     


    </>
  );
}
