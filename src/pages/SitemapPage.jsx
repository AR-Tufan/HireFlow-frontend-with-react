import { Link } from "react-router-dom";

export default function SitemapPage() {
  return (
    <>

    

    <div className="container ![margin-top:40px] ![margin-bottom:50px] mx-auto max-w-[1280px] px-5">
        <h1 className="![text-align:center] ![color:#0F172A] ![margin-bottom:10px]">Project Sitemap</h1>
        <p className="![text-align:center] ![color:#64748B] ![margin-bottom:30px]">Click on any link below to navigate directly to that page.</p>

        <div className="sitemap-grid">
            
            
            <div className="sitemap-card">
                <h3>Public Pages</h3>
                <ul>
                    <li><Link className="text-[#4F46E5] no-underline" to="/">Home</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/browse-jobs">Browse Jobs</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/job-details">Job Details</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/company-profile">Company Profile</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/about">About Us</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/contact">Contact Us</Link></li>
                </ul>
            </div>

            
            <div className="sitemap-card">
                <h3>Authentication</h3>
                <ul>
                    <li><Link className="text-[#4F46E5] no-underline" to="/login">Login</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/register">Register (Role Select)</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/register-seeker">Register (Seeker)</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/register-employer">Register (Employer)</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/forgot-password">Forgot Password</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/reset-password">Reset Password</Link></li>
                </ul>
            </div>

            
            <div className="sitemap-card">
                <h3>Job Seeker Panel</h3>
                <ul>
                    <li><Link className="text-[#4F46E5] no-underline" to="/seeker-dashboard">Dashboard</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/seeker-profile">My Profile</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/seeker-resume">My Resume / CV</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/seeker-saved-jobs">Saved Jobs</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/seeker-applications">My Applications</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/seeker-application-detail">Application Detail</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/seeker-notifications">Notifications</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/seeker-settings">Settings</Link></li>
                </ul>
            </div>

            
            <div className="sitemap-card">
                <h3>Employer Panel</h3>
                <ul>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-dashboard">Dashboard</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-company">Company Profile</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-jobs">My Jobs</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-create-job">Post a New Job</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-applicants">Applicants</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-applicant-detail">Applicant Detail</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-ranking">Candidate Ranking</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-interviews">Interviews</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/employer-notifications">Notifications</Link></li>
                </ul>
            </div>

            
            <div className="sitemap-card">
                <h3>Admin Panel</h3>
                <ul>
                    <li><Link className="text-[#4F46E5] no-underline" to="/admin-dashboard">Dashboard</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/admin-users">Manage Users</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/admin-employers">Employer Verification</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/admin-jobs">Job Moderation</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/admin-reports">Reports / Analytics</Link></li>
                </ul>
            </div>

            
            <div className="sitemap-card">
                <h3>Error Pages</h3>
                <ul>
                    <li><Link className="text-[#4F46E5] no-underline" to="/404">404 - Not Found</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/403">403 - Unauthorized</Link></li>
                    <li><Link className="text-[#4F46E5] no-underline" to="/500">500 - Server Error</Link></li>
                </ul>
            </div>

        </div>
    </div>

    </>
  );
}
