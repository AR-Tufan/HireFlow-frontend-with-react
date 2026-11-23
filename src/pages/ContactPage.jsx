

export default function ContactPage() {
  return (
    <>

    

    <div className="container ![margin-top:40px] mx-auto max-w-[1280px] px-5">
        <div className="dashboard-box ![max-width:600px] ![margin:0_auto] rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <h2 className="![margin-bottom:20px] ![text-align:center]">Contact Support</h2>
            <form>
                <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100">
                    <label>Message</label>
                    <textarea rows="5" placeholder="How can we help you?" className="![width:100%] ![padding:12px] ![border:1px_solid_#E2E8F0] ![border-radius:8px] ![font-family:Manrope,_sans-serif]"></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-block inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] w-full p-3 text-base items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Send Message</button>
            </form>
        </div>
    </div>






    </>
  );
}
