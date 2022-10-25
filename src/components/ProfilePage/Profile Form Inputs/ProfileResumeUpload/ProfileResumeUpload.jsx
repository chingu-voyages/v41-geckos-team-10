import ProfileResume from "./ProfileResume";
import "./ProfileResumeUpload.css";

const ProfileResumeUpload = () => {
  return (
    <div className="profile-resume-upload">
      <label>Resumes Uploaded</label>
      {/* placeholder data */}
      <div className="profile-resume-upload__list">
        <ProfileResume />
        <ProfileResume />
        <ProfileResume />
      </div>
    </div>
  );
};

export default ProfileResumeUpload;
