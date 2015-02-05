'hex utf8 ascii binary base64 ucs2 utf16le'.split(/\s+/).forEach(function (encoding) {
    exports[encoding] = {
        encode: function (data) {
            return new Buffer(data, encoding)
        },
        decode: function (buffer) {
            return buffer.toString(encoding)
        },
        buffer: true,
        name: encoding
    }
})

exports.json = {
    encode: JSON.stringify,
    decode: JSON.parse,
    buffer: false,
    name: 'json'
}

exports['utf-8'] = exports.utf8
exports['ucs-2'] = exports.ucs2
exports['utf-16le'] = exports.utf16le
