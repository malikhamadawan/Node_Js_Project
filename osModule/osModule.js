const os = require("os");

console.log("os", os.arch());

console.log("os", os.freemem() / (1024 * 1024 * 1024));

console.log("os", os.totalmem() / (1024 * 1024 * 1024));

console.log("os", os.hostname());

console.log("os", os.platform());

console.log("os", os.userInfo());
