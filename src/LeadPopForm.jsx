'use client';

import React, { useEffect, useState } from "react";
// import DotParticleCanvas from "./Ui/ButtonClick";
import { toast } from "react-toastify";
import 'aos/dist/aos.css';
import AOS from 'aos';

const SERVICES = [
  "Web Development",
  "Web Design",
  "Software Development",
  "UI/UX Design",
  "App Development",
  "SEO",
  "Social Media Marketing",
  "Digital Marketing",
  "other",
];

const LeadPopupForm = ({ logoSrc = "/logo.jpeg", companyName = "NexaTech Innovation" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const apiUrl = "/.netlify/functions/sendEmail/sendEmail";

  // ✅ burst trigger (each submit click remount canvas)
  // const [burstKey, setBurstKey] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    email: "",
    service: "",
  });

  // Auto open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out',
      });
      AOS.refresh();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = { phone: "", email: "", service: "" };
    let isValid = true;

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email.trim())) {
        newErrors.email = "Enter a valid email.";
        isValid = false;
      }
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please select a service.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    if (!validate()) return;

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: `Lead popup form – Service selected: ${formData.service}`,
    };

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok) {
        toast.success("Email sent successfully!");
        setIsOpen(false);
        setFormData({ name: "", phone: "", email: "", service: "" });
      } else {
        toast.error(result.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send email!");
    }
  };

  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="lead-overlay">
        {/* Modal */}
        <div className="lead-modal" data-aos="zoom-in">
          {/* Close button */}
          <button
            type="button"
            className="lead-close-btn"
            onClick={handleClose}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Logo + company name */}
          <div className="lead-header text-center mb-3">
            <div className="lead-logo-wrap mx-auto mb-2">
              <img src={logoSrc} alt={companyName} className="lead-logo-img" />
            </div>
            <h3 className="lead-company-name mb-1">{companyName}</h3>
            <p className="lead-tagline mb-0">
              Let&apos;s understand your requirement and suggest the right solution.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label lead-label">Name (optional)</label>
              <input
                type="text"
                className="form-control lead-input"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label lead-label">
                Phone <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className={`form-control lead-input ${errors.phone ? "is-invalid" : ""}`}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="WhatsApp / mobile number"
              />
              {errors.phone && (
                <div className="invalid-feedback d-block small">
                  {errors.phone}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label lead-label">
                Email <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className={`form-control lead-input ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="work@email.com"
              />
              {errors.email && (
                <div className="invalid-feedback d-block small">
                  {errors.email}
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label lead-label">
                What do you want to discuss? <span className="text-danger">*</span>
              </label>
              <select
                name="service"
                className={`form-select lead-input ${errors.service ? "is-invalid" : ""}`}
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.service && (
                <div className="invalid-feedback d-block small">
                  {errors.service}
                </div>
              )}
            </div>

            {/* ✅ Submit button + burst overlay */}
            <div className="position-relative w-100" style={{ height: 52 }}>
              <button
                type="submit"
                className="btn w-100 lead-submit-btn fw-semibold text-uppercase position-relative"
                style={{ zIndex: 2 }}
              >
                Connect With Us
              </button>

              {/* <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ zIndex: 1, pointerEvents: "none" }}
              >
                <DotParticleCanvas
                  key={burstKey}
                  backgroundColor="transparent"
                  burstOnMount={true}
                />
              </div> */}
            </div>
          </form>
        </div>
      </div>

      {/* Styles */}
      <style>{modalStyles}</style>
    </>
  );
};

const modalStyles = `
.lead-overlay {
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.78);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1.5rem;
}

.lead-modal {
  position: relative;
  max-width: 480px;
  width: 100%;
  background: radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), transparent 55%), #020617;
  border-radius: 1.5rem;
  border: 1px solid rgba(148,163,184,0.5);
  box-shadow: 0 24px 80px rgba(15,23,42,0.95);
  padding: 1.75rem 1.7rem 1.9rem;
  color: #e5e7eb;
}

.lead-close-btn {
  position: absolute;
  top: 0.85rem;
  right: 0.9rem;
  border: none;
  background: transparent;
  color: #9ca3af;
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.15s ease, transform 0.15s ease;
}

.lead-close-btn:hover {
  color: #e5e7eb;
  transform: scale(1.05);
}

.lead-logo-wrap {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  border: 1px solid rgba(56,189,248,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 30% 0%, rgba(244, 246, 247, 1), #fafcffff);
  box-shadow: 0 0 18px rgba(56,189,248,0.7);
}

.lead-logo-img {
  width: 46px;
  height: 46px;
  object-fit: contain;
}

.lead-company-name {
  font-family: "Orbitron", system-ui, sans-serif;
  font-size: 1.05rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.lead-tagline {
  font-size: 0.85rem;
  color: #9ca3af;
}

.lead-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #9ca3af;
}

.lead-input {
  background-color: rgba(15,23,42,0.9);
  border-radius: 0.9rem;
  border: 1px solid rgba(148,163,184,0.6);
  color: #e5e7eb;
  font-size: 0.9rem;
}

.lead-input:focus {
  outline: none;
  border-color: #0ea5e9;
  box-shadow: 0 0 0 1px rgba(56,189,248,0.5);
  background-color: rgba(15,23,42,1);
}

.lead-input::placeholder {
  color: #6b7280;
}

.lead-submit-btn {
  border-radius: 999px;
  padding: 0.75rem 1rem;
  background-image: linear-gradient(135deg,#2563eb,#38bdf8);
  border: none;
  color: #fff;
  letter-spacing: 0.13em;
  font-size: 0.8rem;
  box-shadow: 0 16px 40px rgba(37,99,235,0.75);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.lead-submit-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 22px 60px rgba(37,99,235,0.95);
}

@media (max-width: 575.98px) {
  .lead-modal {
    padding: 1.4rem 1.25rem 1.6rem;
    border-radius: 1.25rem;
  }
}
`;

export default LeadPopupForm;
