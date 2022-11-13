import "./ProfileLocationSelect.css";

const ProfileLocationSelect = () => {
  return (
    <div className='profile-location-select'>
      <label htmlFor='timezone'>Timezone</label>
      {/* placeholder data */}
      <select name='timezone'>
        <option>GMT-1 West Africa Time (WAT)</option>
        <option>GMT-2 Azores Time (AT)</option>
        <option>GMT-3 Argentina Time (ART)</option>
        <option>GMT-4 Atlantic Standard Time (AST)</option>
        <option>GMT-5 Eastern Standard Time (EST)</option>
        <option>GMT-6 Central Standard Time (CST)</option>
        <option>GMT-7 Mountain Standard Time (MST)</option>
        <option>GMT-8 Pacific Standard Time (PST)</option>
        <option>GMT-9 Alaska Standard Time (AKST)</option>
        <option>GMT-10 Hawaii Standard Time (HST)</option>
      </select>
    </div>
  );
};

export default ProfileLocationSelect;
