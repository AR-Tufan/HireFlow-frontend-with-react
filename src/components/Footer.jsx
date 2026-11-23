import { Link } from "react-router-dom";

export default function Footer({ variant = "full" }) {
  if (variant === "compact") {
    return (
      <footer className="mt-[50px] border-t border-slate-800 bg-slate-950 px-0 py-6">
        <div className="text-center text-sm text-slate-400">
          <p>&copy; 2026 HireFlow. All rights reserved.</p>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 px-0 pb-6 pt-12 text-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-5 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <h3 className="mb-3 text-lg font-bold text-white">HireFlow</h3>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Intelligent Recruitment and Candidate Matching Platform.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">For Candidates</h4>
          <Link className="mb-3 block text-sm text-slate-400 transition hover:text-white" to="/browse-jobs">Browse jobs</Link>
          <a className="mb-3 block text-sm text-slate-400 transition hover:text-white" href="#">Create resume</a>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-300">For Employers</h4>
          <a className="mb-3 block text-sm text-slate-400 transition hover:text-white" href="#">Post a job</a>
          <a className="mb-3 block text-sm text-slate-400 transition hover:text-white" href="#">Search candidates</a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1280px] border-t border-slate-800 px-5 pt-6 text-sm text-slate-500">
        <p>&copy; 2026 HireFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}
