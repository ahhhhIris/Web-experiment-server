const fs = require('fs');  
const path = require('path');  
const log4js = require('log4js');  
const checkLogin = require('../middleware/checkLogin');

const logDir = './logs'; // 日志文件夹路径  
  
// 如果日志文件夹不存在，则创建它  
if (!fs.existsSync(logDir)) {  
  fs.mkdirSync(logDir);  
}  
  
const startTime = new Date().toISOString().replace(/[^\w\s]/gi, '-').replace(/[\s-]{2,}/g, '-'); // 服务器启动时间，用于日志文件名  
const logFile = path.join(logDir, `app-log-${startTime}.log`); // 日志文件路径  
  
log4js.configure({  
  appenders: {  
    console: { type: 'console' }, 
    file: { type: 'file', filename: logFile }  
  },  
  categories: {  
    default: {  appenders: ['console', 'file'], level: 'all'  }  
  }  
});  
  
// 创建并使用名为'file'的appender的logger实例  
const logger = log4js.getLogger('file');  
  
module.exports = async (ctx, next) => {  
    const start = Date.now();  
    await next();  
    const ms = Date.now() - start;  
    // 在日志消息中添加用户ID信息  
    logger.info(`${ctx.method} ${ctx.url}  - ${ms}ms`);   
        
};