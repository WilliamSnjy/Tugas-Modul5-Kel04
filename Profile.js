import React from "react";
import ProfileCard from "../component/ProfileCard";
import ProfileData from "../component/ProfileData";
 // Impor data profil dari file terpisah

export default function Profile(props) {
  return (
    <div style={{ alignItems: "center" }}>
      <h1 style={{ textAlign: "center", color: "white" }} className="profile-title">
        Profile
      </h1>
      {ProfileData.map((profile, index) => (
        <ProfileCard
          key={index}
          nama={profile.nama}
          nim={profile.nim}
          imageSrc={profile.imageSrc}
        />
      ))}
    </div>
  );
}