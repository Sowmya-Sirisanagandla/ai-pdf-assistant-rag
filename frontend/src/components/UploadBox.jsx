import "../styles/UploadBox.css";

function UploadBox({
  file,
  setFile,
  uploadFile,
  uploading,
}) {
  return (
    <div className="upload-box">
      <input
        type="file"
        accept=".pdf"
        disabled={uploading}
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={uploadFile}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}

export default UploadBox;