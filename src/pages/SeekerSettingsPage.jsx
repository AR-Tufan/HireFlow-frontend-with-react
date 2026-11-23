import Sidebar from "../components/Sidebar";

export default function SeekerSettingsPage() {
  return (
    <>

    
    <div className="container mx-auto max-w-[1280px] px-5">
        <div className="dashboard-layout mt-[30px] grid min-h-[70vh] grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6">
            <Sidebar role="seeker" active="/seeker-settings" />
            <main className="dashboard-content flex flex-col gap-6">
                <div className="dashboard-box rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                    <h2>Account Settings</h2>
                    <form className="![margin-top:20px]">
                        <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100"><label>Change Email</label><input type="email" defaultValue="johndoe@email.com" /></div>
                        <div className="form-group mb-5 [&_label]:mb-2 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-[#E2E8F0] [&_input]:p-3 [&_input]:outline-none [&_input]:font-[Manrope,sans-serif] [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-[#E2E8F0] [&_select]:p-3 [&_select]:outline-none [&_select:focus]:border-[#4F46E5] [&_select:focus]:ring-4 [&_select:focus]:ring-indigo-100 [&_select]:font-[Manrope,sans-serif] [&_input:focus]:border-[#4F46E5] [&_input:focus]:ring-4 [&_input:focus]:ring-indigo-100"><label>New Password</label><input type="password" placeholder="Leave blank to keep current" /></div>
                        <button type="button" className="btn btn-primary inline-flex cursor-pointer rounded-xl px-5 py-3 text-center font-semibold transition duration-300 bg-[#4F46E5] text-white hover:bg-[#4338CA] items-center justify-center shadow-sm hover:-translate-y-0.5 hover:shadow-md">Update Settings</button>
                    </form>
                </div>
            </main>
        </div>
    </div>





    </>
  );
}
