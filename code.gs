// === v2: Blob upload ===
function doPost(e) {
  try {
    if (!e || !e.parameter) throw new Error("No parameters received.");
    var folderId = e.parameter.folderId;
    var base64 = e.parameter.file;          // base64 string (no data: prefix)
    var filename = e.parameter.filename || "upload";
    var mimeType = e.parameter.mimeType || "application/octet-stream";

    if (!folderId) throw new Error("Missing folderId.");
    if (!base64)  throw new Error("Missing file data.");

    // Convert base64 -> Blob
    var bytes = Utilities.base64Decode(base64);                 // byte[]
    var blob  = Utilities.newBlob(bytes, mimeType, filename);   // Blob

    // Save to Drive folder
    var folder = DriveApp.getFolderById(folderId);
    var created = folder.createFile(blob);

    // Return JSON
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      fileId: created.getId(),
      fileUrl: created.getUrl(),
      backend: "v2"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: err.message,
      backend: "v2"
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
