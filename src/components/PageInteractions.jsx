import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function PageInteractions() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    function handleClick(event) {
      if (!(event.target instanceof Element)) return;
      const control = event.target.closest(".btn-outline, .btn-primary");
      if (!control) return;

      const label = control.textContent.trim().toLowerCase();
      if (label.includes("apply")) {
        event.preventDefault();
        window.alert("Application Submitted Successfully (Demo)!");
      } else if (label.includes("save")) {
        event.preventDefault();
        control.textContent = "Saved ✓";
        control.style.color = "#10B981";
        control.style.borderColor = "#10B981";
      } else if (label.includes("shortlist")) {
        window.alert("Candidate Shortlisted!");
        control.textContent = "Shortlisted ✓";
        control.style.backgroundColor = "#10B981";
        control.style.color = "white";
      } else if (label.includes("reject") || label.includes("remove")) {
        if (window.confirm("Are you sure you want to do this?")) {
          window.alert("Action completed successfully.");
          const row = control.closest("tr");
          if (row) row.style.opacity = "0.5";
        } else {
          event.preventDefault();
        }
      }
    }

    function handleSearch(event) {
      if (event.key === "Enter" && event.target.matches(".search-box input")) {
        window.alert(`Searching for: ${event.target.value}`);
      }
    }

    function handleSubmit(event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      event.preventDefault();
      const action = form.getAttribute("action") || "";

      if (action === "seeker-dashboard.html") {
        const email = form.querySelector('input[type="email"]')?.value || "";
        const password = form.querySelector('input[type="password"]')?.value || "";
        if (isValidEmail(email) && password.length >= 6) {
          window.alert("Login Successful! Redirecting to Dashboard...");
          navigate("/seeker-dashboard");
        } else {
          window.alert("Invalid email or password (Min 6 characters).");
        }
      } else if (action === "login.html" && pathname === "/reset-password") {
        window.alert("Password reset successfully. Please login.");
        navigate("/login");
      } else if (action === "login.html") {
        window.alert("Registration Successful! Please login.");
        navigate("/login");
      } else if (action === "reset-password.html") {
        window.alert("Password reset link sent.");
        navigate("/reset-password");
      } else if (action === "employer-jobs.html") {
        window.alert("Job published successfully.");
        navigate("/employer-jobs");
      } else if (action) {
        const destination = action.replace(/\.html$/, "");
        navigate(`/${destination}`);
      }
    }

    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleSearch);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleSearch);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, [navigate, pathname]);

  return null;
}
