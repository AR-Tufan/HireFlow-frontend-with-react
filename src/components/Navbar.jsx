import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const buttonBase =
  "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-200";
const primaryButton =
  `${buttonBase} bg-[#4F46E5] text-white shadow-sm shadow-indigo-200 hover:-translate-y-0.5 hover:bg-[#4338CA] hover:shadow-md`;
const outlineButton =
  `${buttonBase} border border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#C7D2FE] hover:bg-[#EEF2FF] hover:text-[#4F46E5]`;

function Logo({ admin = false }) {
  return (
    <Link className="group flex items-center gap-3 no-underline" to="/">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] text-lg font-extrabold text-white shadow-lg shadow-indigo-200 transition duration-200 group-hover:-rotate-3 group-hover:scale-105">
        H
      </span>
      <span className="flex items-center gap-2">
        <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
          HireFlow
        </span>
        {admin && (
          <span className="rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#4F46E5]">
            Admin
          </span>
        )}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdmin = pathname.startsWith("/admin-");
  const isEmployer = pathname.startsWith("/employer-");
  const isSeeker = pathname.startsWith("/seeker-");
  const isLogin = pathname === "/login";
  const isRegister = pathname === "/register";
  const publicLinks = [
    ["Home", "/"],
    ["Browse jobs", "/browse-jobs"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ];

  function logout(event) {
    event.preventDefault();
    if (window.confirm("Do you want to logout?")) {
      navigate("/login");
    }
  }

  function renderPublicLinks(mobile = false) {
    return publicLinks.map(([label, to]) => (
      <Link
        className={`${
          mobile ? "block rounded-xl px-4 py-3" : "relative mx-2 px-3 py-2"
        } text-sm font-semibold no-underline transition-colors ${
          pathname === to
            ? "bg-[#EEF2FF] text-[#4F46E5] md:bg-transparent"
            : "text-slate-600 hover:bg-slate-50 hover:text-[#4F46E5]"
        }`}
        key={to}
        onClick={() => setMenuOpen(false)}
        to={to}
      >
        {label}
      </Link>
    ));
  }

  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="relative mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5">
        <Logo admin={isAdmin} />
        {isAdmin || isEmployer || isSeeker ? (
          <div className="flex items-center gap-3">
            {!isAdmin && (
              <span className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-2 pr-4 text-sm font-semibold text-slate-700 sm:inline-flex">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF2FF] text-xs font-bold text-[#4F46E5]">
                  {isEmployer ? "E" : "S"}
                </span>
                Hi, {isEmployer ? "Employer" : "Job Seeker"}
              </span>
            )}
            <a className={outlineButton} href="/login" onClick={logout}>
              Logout
            </a>
          </div>
        ) : isLogin || isRegister ? (
          <div className="flex items-center gap-3">
            <Link
              className={isLogin ? primaryButton : outlineButton}
              to={isLogin ? "/register" : "/login"}
            >
              {isLogin ? "Register" : "Login"}
            </Link>
          </div>
        ) : (
          <>
            <nav className="hidden items-center md:flex">
              {renderPublicLinks()}
            </nav>
            <div className="flex items-center gap-2">
              <Link className={`${outlineButton} hidden sm:inline-flex`} to="/login">Login</Link>
              <Link className={primaryButton} to="/register">Get started</Link>
              <button
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="m6 6 12 12M18 6 6 18" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
            {menuOpen && (
              <nav className="absolute left-4 right-4 top-[68px] z-20 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl md:hidden">
                {renderPublicLinks(true)}
                <Link
                  className="mt-1 block rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                  to="/login"
                >
                  Sign in
                </Link>
              </nav>
            )}
          </>
        )}
      </div>
    </header>
  );
}
