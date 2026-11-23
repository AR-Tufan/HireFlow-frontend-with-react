import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageInteractions from "../components/PageInteractions";
import { pageMetadata } from "../route/pageMetadata";

export default function SiteLayout() {
  const { pathname } = useLocation();
  const metadata = pageMetadata[pathname];

  useEffect(() => {
    document.title = metadata?.title || "404 Not Found - HireFlow";
  }, [metadata]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans leading-6 text-[#0F172A]">
      {metadata?.hasHeader && <Navbar />}
      <PageInteractions />
      <Outlet />
    </div>
  );
}
