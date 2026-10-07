const log = require('./lib/logger');
log('Server started');

const stu = require('./lib/student');
log(stu);
log(stu.name);

const counter = require('./lib/counter');
counter.increase();
log(counter.getCount()); //1
counter.increase();
log(counter.getCount()); //2