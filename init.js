console.log('node_fs_init');
var fs = require('fs');
var filename = '/home/demon/CYBER_PRODUCTION_LOGS/log.cyb';


fs.appendFile(filename,'some data',function(err){
	if (err) throw err;
	console.log('data appended to ' + filename + '\n');
});

