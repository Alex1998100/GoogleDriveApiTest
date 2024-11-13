import { anonFileDownload } from "./anonFileDownload.js";
import {} from "dotenv/config";

//wrong file descriptor
//console.log(await anonFileDownload("1WCvnW61uyPenkKNWTrK9WA6X5ZFTSejf")); 

//correct file descriptor - JSON file JS-VBNET-1
let [status, length, type, encoding, data] = await anonFileDownload("1WCvnW61uyPenkKNWTrK9WA6X5ZFTSeje");
console.log(status, length, type, encoding, data);

//correct file descriptor - HTM file from JS-VBNET-2
let [status1, length1, type1, encoding1, data1] = await anonFileDownload("1jpoTnSmrHQdIIhhBHDe8HezI_J31w2eT");
console.log(status1, length1, type1, encoding1 );

//correct file descriptor - PNG file from JS-VBNET-2
let [status2, length2, type2, encoding2, data2] = await anonFileDownload("1L33UGhqJGfnUVL-EL15kMoQOFUzvafuA");
console.log(status2, length2, type2, encoding2, data2);