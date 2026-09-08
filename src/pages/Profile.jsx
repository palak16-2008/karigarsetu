import { useState } from "react";
import {
  BadgeCheck,
  MapPin,
  Star,
  Pencil,
  Save
} from "lucide-react";

export default function Profile() {

  const storedProfile = JSON.parse(
    localStorage.getItem("ks_profile") || "{}"
  );

  const [profile, setProfile] = useState(storedProfile);

  const [editing, setEditing] = useState(false);

  const change = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const saveProfile = () => {
    localStorage.setItem(
      "ks_profile",
      JSON.stringify(profile)
    );

    localStorage.setItem(
      "ks_name",
      profile.name
    );

    setEditing(false);
  };

  const name = profile.name || "New Artisan";
  const craft = profile.craft || "Handicraft";
  const location = profile.location || "India";
  const experience = profile.experience || "0";

  return (
    <div className="workspace">

      <div className="profile-cover"></div>

      <div className="profile-card">

        <div className="profile-avatar">
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="profile-title">

          <span className="eyebrow">
            VERIFIED ARTISAN
          </span>

          <h1>
            {name}
            <BadgeCheck size={20} />
          </h1>

          <p>
            {craft} · <MapPin size={14} /> {location}
          </p>

        </div>

        {!editing ? (
          <button
            className="btn btn-secondary"
            onClick={() => setEditing(true)}
          >
            <Pencil size={16} />
            Edit Profile
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={saveProfile}
          >
            <Save size={16} />
            Save Profile
          </button>
        )}

      </div>


      <div className="profile-grid">

        <div className="profile-info">

          <h2>About the artisan</h2>

          <p>
            {name} is a skilled artisan creating
            {craft ? ` ${craft.toLowerCase()}` : " handmade products"}
            for contemporary homes, hospitality spaces
            and thoughtful gifting.
          </p>


          {editing ? (

            <div className="form-grid">

              <label>
                Full Name
                <input
                  name="name"
                  value={profile.name || ""}
                  onChange={change}
                />
              </label>

              <label>
                Mobile Number
                <input
                  name="mobile"
                  value={profile.mobile || ""}
                  onChange={change}
                />
              </label>

              <label>
                Location
                <input
                  name="location"
                  value={profile.location || ""}
                  onChange={change}
                />
              </label>

              <label>
                Craft Type
                <input
                  name="craft"
                  value={profile.craft || ""}
                  onChange={change}
                />
              </label>

              <label>
                Years of Experience
                <input
                  type="number"
                  name="experience"
                  value={profile.experience || ""}
                  onChange={change}
                />
              </label>

              <label>
                Preferred Language
                <select
                  name="language"
                  value={profile.language || "Hindi"}
                  onChange={change}
                >
                  <option>Hindi</option>
                  <option>English</option>
                </select>
              </label>

            </div>

          ) : (

            <div className="info-list">

              <div>
                <small>Experience</small>
                <b>{experience} years</b>
              </div>

              <div>
                <small>Specialization</small>
                <b>{craft}</b>
              </div>

              <div>
                <small>Rating</small>
                <b>
                  <Star size={15} />
                  {profile.rating || "New"}
                </b>
              </div>

              <div>
                <small>Products</small>
                <b>{profile.products || 0}</b>
              </div>

            </div>

          )}

        </div>


        <div className="profile-info">

          <h2>Craft story</h2>

          <p>
            Every product carries the maker’s skill,
            local materials and cultural memory.
            KarigarSetu helps that story travel with
            the product.
          </p>

          <div className="tag-row">
            <span>Traditional craft</span>
            <span>Handmade</span>
            <span>India</span>
          </div>

        </div>

      </div>

    </div>
  );
}
