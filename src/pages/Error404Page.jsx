import { Link } from "react-router-dom";

export default function Error404Page() {
  return (
    <>

    <div className="auth-wrapper ![text-align:center] flex min-h-[80vh] items-center justify-center px-5 py-16 relative isolate before:absolute before:inset-x-0 before:top-0 before:h-64 before:bg-gradient-to-b before:from-indigo-50 before:to-transparent">
        <div>
            <h1 className="![font-size:100px] ![color:#4F46E5] ![margin-bottom:10px]">404</h1>
            <h2 className="![margin-bottom:10px]">Page Not Found</h2>
            <p className="![color:#64748B] ![margin-bottom:30px]">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="btn btn-primary ![padding:12px_30px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Go to Homepage</Link>
        </div>
    </div>





    </>
  );
}
