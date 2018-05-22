var redisClient = require('./env/config');
var redis = require('redis');
var client = redis.createClient(redisClient);

// var co = require('co');
// var redis = require('redis');
// var wrapper = require('co-redis');
// var log = Log('models.redis');

// var redis_config = {
//     "host": "",
//     "port": 6379
// };

console.log(1111);
client.rpush('test1', 'a');
client.rpush('test1', 'b');

client.lrange('test1', 0, 1);
