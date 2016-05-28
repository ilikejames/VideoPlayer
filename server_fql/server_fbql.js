'use strict';

const fql = require('fql')
const querystring = require('querystring')


let qs = querystring.parse('https://www.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fattributio…1PG5YbK6GRDNooO8_ouNACnmiGMVcO1qp42eQ6W98Sud2p_kOA2q6FNQUspi8LVHf9br6I&s=1')
console.log(qs);

fql.query('SELECT name, fan_count FROM page WHERE page_id = 19292868552', function(err, data) {
    if (err) {
        throw err;
    }
    console.log('PAGE', data); // [ { name: 'Facebook Platform', fan_count: 4549532 } ]
});


fql({
    token: 'EAAHNzUbD0eIBAPEhZAcnmCvKHHdqTdyLWQIQPcMVu7b6jZBIyL2mJFayEMvueDLZB65Yr9yZCojALSO9FS42ZAnH9u88emqpMI1rZBNDhnmc9ganoPyhCYATILifTfZCJKLnHtkfHxzDrR12mYUXRL0JHLQDUNMEJ4ZD'
}).query('SELECT name FROM user WHERE uid = me()', function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data); // [ { name: 'John Doe' } ]
});
