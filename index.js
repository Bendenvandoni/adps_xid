const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('6Ffs6FJUzI', uuidlib.v4());
	}

module.exports = generateId
