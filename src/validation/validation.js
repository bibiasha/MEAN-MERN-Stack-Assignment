const mongoose = require('mongoose')

const isValid = function(value) {
    if (typeof value === 'undefined' || value === null) return false //it checks whether the value is null or undefined.
    if (typeof value === 'string' && value.trim().length === 0) return false //it checks whether the string contain only space or not 
    return true;
}

const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0; // it checks, is there any key is available or not in request body
}

const isValidString = function (value) {
    if (/^[a-zA-Z ]+$/.test(value)) {
      return true;
    }
  };

  let isValidStatus = (status) => {
    return ['Open', 'completed', 'In-Progress'].includes(status);
  }

  const isValidObjectId = function(objectId) {
    return mongoose.Types.ObjectId.isValid(objectId)
}
 
  module.exports={isValidObjectId, isValidStatus,isValidString,isValidRequestBody,isValid}
  