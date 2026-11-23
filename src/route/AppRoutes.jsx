import { Route, Routes } from "react-router-dom";
import SiteLayout from "../layout/SiteLayout";
import Error403Page from "../pages/Error403Page";
import Error404Page from "../pages/Error404Page";
import Error500Page from "../pages/Error500Page";
import AboutPage from "../pages/AboutPage";
import AdminDashboardPage from "../pages/AdminDashboardPage";
import AdminEmployersPage from "../pages/AdminEmployersPage";
import AdminJobsPage from "../pages/AdminJobsPage";
import AdminReportsPage from "../pages/AdminReportsPage";
import AdminUsersPage from "../pages/AdminUsersPage";
import BrowseJobsPage from "../pages/BrowseJobsPage";
import CompanyProfilePage from "../pages/CompanyProfilePage";
import ContactPage from "../pages/ContactPage";
import EmployerApplicantDetailPage from "../pages/EmployerApplicantDetailPage";
import EmployerApplicantsPage from "../pages/EmployerApplicantsPage";
import EmployerCompanyPage from "../pages/EmployerCompanyPage";
import EmployerCreateJobPage from "../pages/EmployerCreateJobPage";
import EmployerDashboardPage from "../pages/EmployerDashboardPage";
import EmployerInterviewsPage from "../pages/EmployerInterviewsPage";
import EmployerJobsPage from "../pages/EmployerJobsPage";
import EmployerNotificationsPage from "../pages/EmployerNotificationsPage";
import EmployerRankingPage from "../pages/EmployerRankingPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import JobDetailsPage from "../pages/JobDetailsPage";
import LoginPage from "../pages/LoginPage";
import RegisterEmployerPage from "../pages/RegisterEmployerPage";
import RegisterSeekerPage from "../pages/RegisterSeekerPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SeekerApplicationDetailPage from "../pages/SeekerApplicationDetailPage";
import SeekerApplicationsPage from "../pages/SeekerApplicationsPage";
import SeekerDashboardPage from "../pages/SeekerDashboardPage";
import SeekerNotificationsPage from "../pages/SeekerNotificationsPage";
import SeekerProfilePage from "../pages/SeekerProfilePage";
import SeekerResumePage from "../pages/SeekerResumePage";
import SeekerSavedJobsPage from "../pages/SeekerSavedJobsPage";
import SeekerSettingsPage from "../pages/SeekerSettingsPage";
import SitemapPage from "../pages/SitemapPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
      <Route path="403" element={<Error403Page />} />
      <Route path="404" element={<Error404Page />} />
      <Route path="500" element={<Error500Page />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="admin-dashboard" element={<AdminDashboardPage />} />
      <Route path="admin-employers" element={<AdminEmployersPage />} />
      <Route path="admin-jobs" element={<AdminJobsPage />} />
      <Route path="admin-reports" element={<AdminReportsPage />} />
      <Route path="admin-users" element={<AdminUsersPage />} />
      <Route path="browse-jobs" element={<BrowseJobsPage />} />
      <Route path="company-profile" element={<CompanyProfilePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="employer-applicant-detail" element={<EmployerApplicantDetailPage />} />
      <Route path="employer-applicants" element={<EmployerApplicantsPage />} />
      <Route path="employer-company" element={<EmployerCompanyPage />} />
      <Route path="employer-create-job" element={<EmployerCreateJobPage />} />
      <Route path="employer-dashboard" element={<EmployerDashboardPage />} />
      <Route path="employer-interviews" element={<EmployerInterviewsPage />} />
      <Route path="employer-jobs" element={<EmployerJobsPage />} />
      <Route path="employer-notifications" element={<EmployerNotificationsPage />} />
      <Route path="employer-ranking" element={<EmployerRankingPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
      <Route index element={<HomePage />} />
      <Route path="job-details" element={<JobDetailsPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register-employer" element={<RegisterEmployerPage />} />
      <Route path="register-seeker" element={<RegisterSeekerPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="reset-password" element={<ResetPasswordPage />} />
      <Route path="seeker-application-detail" element={<SeekerApplicationDetailPage />} />
      <Route path="seeker-applications" element={<SeekerApplicationsPage />} />
      <Route path="seeker-dashboard" element={<SeekerDashboardPage />} />
      <Route path="seeker-notifications" element={<SeekerNotificationsPage />} />
      <Route path="seeker-profile" element={<SeekerProfilePage />} />
      <Route path="seeker-resume" element={<SeekerResumePage />} />
      <Route path="seeker-saved-jobs" element={<SeekerSavedJobsPage />} />
      <Route path="seeker-settings" element={<SeekerSettingsPage />} />
      <Route path="sitemap" element={<SitemapPage />} />
        <Route path="*" element={<Error404Page />} />
      </Route>
    </Routes>
  );
}
