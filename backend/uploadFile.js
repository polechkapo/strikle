const path = require('path');
const util = require('util')

const storage = async (file)=>{
  
  const fileName = file.name
  const size = file.data.length
  const extension = path.extname(fileName)

  const allowedExtensions = /png|jpeg|jpg|JPG|gif|heic|webp|PNG|HEIC/

  if(!allowedExtensions.test(extension)) throw "Unsupported extension !"

  if(size > 10000000) throw "File must be less than 2MB"
  
  const md5 = file.md5

  const URL = '/avatars/' + md5 + extension
  await util.promisify(file.mv)("./public" + URL)
  return URL
}

module.exports =  storage;
