import { Link } from "react-router-dom";

const sidebarLinks = {
  admin: [
    ["Dashboard", "/admin-dashboard"],
    ["Manage Users", "/admin-users"],
    ["Employer Verification", "/admin-employers"],
    ["Job Moderation", "/admin-jobs"],
    ["Reports", "/admin-reports"],
  ],
  employer: [
    ["Dashboard", "/employer-dashboard"],
    ["Company Profile", "/employer-company"],
    ["My Jobs", "/employer-jobs"],
    ["Post a New Job", "/employer-create-job"],
    ["Applicants", "/employer-applicants"],
    ["Candidate Ranking", "/employer-ranking"],
    ["Interviews", "/employer-interviews"],
    ["Notifications", "/employer-notifications"],
  ],
  seeker: [
    ["Dashboard", "/seeker-dashboard"],
    ["My Profile", "/seeker-profile"],
    ["My Resume / CV", "/seeker-resume"],
    ["My Applications", "/seeker-applications"],
    ["Saved Jobs", "/seeker-saved-jobs"],
    ["Notifications", "/seeker-notifications"],
    ["Settings", "/seeker-settings"],
  ],
};

export default function Sidebar({ role, active }) {
  const roleTitle = {
    admin: "Administration",
    employer: "Employer workspace",
    seeker: "Candidate workspace",
  }[role];

  return (
    <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
      <p className="px-3 pb-3 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
        {roleTitle}
      </p>
      <nav className="space-y-1">
        {sidebarLinks[role].map(([label, to]) => (
          <Link
            aria-current={active === to ? "page" : undefined}
            className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold no-underline transition ${
              active === to
                ? "active bg-[#EEF2FF] text-[#4F46E5]"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
            key={to}
            to={to}
          >
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition ${
              active === to
                ? "bg-white text-[#4F46E5] shadow-sm"
                : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-[#4F46E5]"
            }`}>
              {label.charAt(0)}
            </span>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
