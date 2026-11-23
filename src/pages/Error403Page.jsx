import { Link } from "react-router-dom";

export default function Error403Page() {
  return (
    <>

    <div className="auth-wrapper ![text-align:center] ![min-height:100vh] flex min-h-[80vh] items-center justify-center px-5 py-16 relative isolate before:absolute before:inset-x-0 before:top-0 before:h-64 before:bg-gradient-to-b before:from-indigo-50 before:to-transparent">
        <div>
            <h1 className="![font-size:120px] ![color:#ef4444] ![margin-bottom:10px] ![line-height:1]">403</h1>
            <h2 className="![margin-bottom:15px] ![color:#0F172A]">Access Denied</h2>
            <p className="![color:#64748B] ![margin-bottom:30px] ![font-size:16px] ![max-width:400px] ![margin-left:auto] ![margin-right:auto]">
                Oops! You don't have permission to access this page. Please log in with the correct account role.
            </p>
            <Link to="/" className="btn btn-primary ![padding:12px_30px] ![font-size:16px] inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Go to Homepage</Link>
        </div>
    </div>





    </>
  );
}
