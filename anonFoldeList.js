/**
 * @description get folder list anonymously
 * @param {string} FolderId parent FolderId
 * @return {JSON}
 * */
export let anonFolderList = async (folderId) => {
  try {
    let query = encodeURIComponent(`'${folderId}' in parents and trashed=false`)
      const res = await fetch(`https://content.googleapis.com/drive/v3/files?q=${query}&pageSize=1000&supportsAllDrives=true&key=${process.env.apiKey1}`);
    return await res.json();
  } catch (err) {
    return err;
  }
};
