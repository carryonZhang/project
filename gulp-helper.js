/**
 * Created by long-mac on 2017/4/9.
 */
"use strict"
const path = require('path');

function filepath(filepath){
    const filename = path.basename(filepath);
    const folderPath =path.relative('./src',path.dirname(filepath).toString());
    const result = {
        filename: filename,
        folderPath: folderPath,
    };
    return result;
};
exports.filepath=filepath;