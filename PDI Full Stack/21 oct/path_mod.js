const path=require('path');
const filepath='C:\Users\silvyapatel\Desktop\Deloitte-Foundations\PDI Full Stack\\"21 oct\"\path_mod.js';

console.log('Joined path:',path.join('directory','path_mod'));
console.log('Directory name',path.dirname(filepath));
console.log('Base Name',path.basename(filepath));
console.log('extension',path.extname(filepath));