const os=require('os');
console.log('Operating system',os.platform());
console.log('Hostname',os.hostname());
console.log('Number of CPUs',os.cpus().length);
console.log('Free memory',os.freemem()/(1024*1024)+'MB');