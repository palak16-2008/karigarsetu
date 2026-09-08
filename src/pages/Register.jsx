import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Register() {
  const [role, setRole] = useState("artisan");
  const [form, setForm] = useState({});
  const nav = useNavigate();

  const change = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    localStorage.setItem("ks_role", role);

    if (role === "artisan") {
      localStorage.setItem("ks_name", form.name);
      localStorage.setItem("ks_profile", JSON.stringify({
        name: form.name,
        mobile: form.mobile,
        location: form.location,
        craft: form.craft,
        experience: form.experience || "0",
        language: form.language || "Hindi",
        rating: "New",
        products: 0
      }));
    } else {
      localStorage.setItem("ks_name", form.org);

      localStorage.setItem("ks_profile", JSON.stringify({
        name: form.org,
        email: form.email,
        location: form.location,
        business: form.business,
        requirements: form.requirements || ""
      }));
    }

    nav(role === "artisan" ? "/artisan" : "/buyer");
  };

  return (
    <div className="auth-page">
      <div className="auth-card wide">

        <div className="auth-header">
          <span className="eyebrow">JOIN KARIGARSETU</span>
          <h1>Let’s build a bigger market.</h1>
          <p>
            Create a prototype profile as an artisan or buyer.
          </p>
        </div>

        <div className="role-tabs">
          <button
            type="button"
            className={role === "artisan" ? "active" : ""}
            onClick={() => setRole("artisan")}
          >
            ARTISAN
          </button>

          <button
            type="button"
            className={role === "buyer" ? "active" : ""}
            onClick={() => setRole("buyer")}
          >
            BUYER
          </button>
        </div>

        <form onSubmit={submit} className="form-grid">

          {role === "artisan" ? (
            <>
              <label>
                Full Name
                <input
                  name="name"
                  onChange={change}
                  placeholder="Sita Devi"
                  required
                />
              </label>

              <label>
                Mobile Number
                <input
                  name="mobile"
                  onChange={change}
                  placeholder="+91 98xxxxxx"
                  required
                />
              </label>

              <label>
                Location
                <input
                  name="location"
                  onChange={change}
                  placeholder="Jaipur"
                  required
                />
              </label>

              <label>
                Craft Type
                <input
                  name="craft"
                  onChange={change}
                  placeholder="Terracotta"
                  required
                />
              </label>

              <label>
                Years of Experience
                <input
                  type="number"
                  name="experience"
                  onChange={change}
                  placeholder="15"
                />
              </label>

              <label>
                Preferred Language
                <select
                  name="language"
                  onChange={change}
                >
                  <option>Hindi</option>
                  <option>English</option>
                </select>
              </label>
            </>
          ) : (
            <>
              <label>
                Organisation / Name
                <input
                  name="org"
                  onChange={change}
                  placeholder="The Heritage Hotel"
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  onChange={change}
                  placeholder="hello@example.com"
                  required
                />
              </label>

              <label>
                Location
                <input
                  name="location"
                  onChange={change}
                  placeholder="Delhi"
                  required
                />
              </label>

              <label>
                Business Type
                <input
                  name="business"
                  onChange={change}
                  placeholder="Boutique Hotel"
                />
              </label>

              <label className="full-field">
                Requirements
                <textarea
                  name="requirements"
                  onChange={change}
                  placeholder="What kind of artisan products are you looking for?"
                />
              </label>
            </>
          )}

          <label className="full-field">
            Password
            <input
              type="password"
              name="password"
              onChange={change}
              placeholder="Create a password"
              required
            />
          </label>

          <button className="btn btn-primary full-field">
            Create profile
            <ArrowRight size={18} />
          </button>

        </form>

        <p className="center">
          Already have an account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}
