import { anonFolderList } from ".//anonFoldeList.js";
import {} from "dotenv/config";
import fs from "fs";


if (false){
let {nextPageToken, files} = await anonFolderList(process.env.root1)
console.log(files.length);
let stream1 = fs.createWriteStream('./root1.json');
stream1.write(JSON.stringify(files, null, 2))
stream1.end
}
let {nextPageToken, files} = await anonFolderList(process.env.root2)
console.log(files.length);
let stream1 = fs.createWriteStream('./root2.json');
stream1.write(JSON.stringify(files, null, 2))
stream1.end


