require('proof')(1, prove)

function prove (assert) {
    var string = 'abc', encoders = require('..')
    string = encoders.utf8.decode(encoders.utf8.encode(string))
    assert(string, 'abc', 'translated')
}
