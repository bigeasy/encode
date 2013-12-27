require('proof')(1, function (equal) {
    var string = 'abc', encoders = require('../..')
    string = encoders.utf8.decode(encoders.utf8.encode(string))
    equal(string, 'abc', 'translated')
})
