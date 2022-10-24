import { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { v4 as uuidv4 } from "uuid";
import "./ProfileImageUpload.css";

const ProfileImageUpload = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
    <div className="profile-image-upload">
      {files.map((file) => (
        <img
          src={file.preview}
          alt="profile"
          className="profile-image-upload__image-preview"
          key={uuidv4()}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      ))}
      <Dropzone
        onDrop={(acceptedFiles) => {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        }}
        multiple={false}
        accept="image/*"
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="profile-image-upload__dropzone">
                <img
                  src="/icons/upload_icon.svg"
                  alt="upload"
                  className="profile-image-upload__dropzone__icon"
                />
                <p>Click to upload or drag and drop</p>
                <p>SVG, PNG, JPG, or GIF (max 600x400px)</p>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
};

export default ProfileImageUpload;
