import { google } from "googleapis";
/**
 * @description download file from Google drive anonymously
 * @param {string} realFileId file ID
 * @return {[file.status, file.headers['content-length'], file.headers['content-type'], file.headers['content-encoding'], file.data]}
 * */
export let anonFileDownload = async (realFileId) => {
  const drive = google.drive({ version: "v3" });
  let fileId = realFileId;
  try {
    const file = await drive.files.get({
      key: process.env.apiKey1,
      fileId: fileId,
      alt: "media",
    });
    //console.log(await file.status, await file.headers['content-length'], await file.headers['content-type'], await file.data, await JSON.stringify(file.data));
    return await [file.status, file.headers['content-length'], file.headers['content-type'], file.headers['content-encoding'], file.data];
  } catch (err) {
    return err.code;
  }
};
