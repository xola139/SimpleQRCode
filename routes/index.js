var qr = require('qr-image');  
var fs = require('fs');


/*
 * GET home page.
 */

var fs = require('fs');
function file(name) {
    return fs.createWriteStream(__dirname + '/' + name);
}


exports.index = function(req, res){
	

	
	
	  var obj = qr.svgObject('Vamos bien castora vamos bien castorsota!', { type: 'svg', size: 10, margin: 1  });
	  
	

	
	  //debugger;
	 res.render('index', { title: 'Vamos bien castora vamos bien castorsota!' ,code:obj});
};


