import assert from 'node:assert';

import * as iso885910 from '../iso-8859-10.mjs';

console.log('Testing `iso885910.encode`…');
assert.strictEqual(
	iso885910.encode('\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F'),
	'\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F',
	'U+0000 to U+007F remain unchanged'
);
assert.strictEqual(
	iso885910.encode('\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C\x8D\x8E\x8F\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C\x9D\x9E\x9F\xA0\u0104\u0112\u0122\u012A\u0128\u0136\xA7\u013B\u0110\u0160\u0166\u017D\xAD\u016A\u014A\xB0\u0105\u0113\u0123\u012B\u0129\u0137\xB7\u013C\u0111\u0161\u0167\u017E\u2015\u016B\u014B\u0100\xC1\xC2\xC3\xC4\xC5\xC6\u012E\u010C\xC9\u0118\xCB\u0116\xCD\xCE\xCF\xD0\u0145\u014C\xD3\xD4\xD5\xD6\u0168\xD8\u0172\xDA\xDB\xDC\xDD\xDE\xDF\u0101\xE1\xE2\xE3\xE4\xE5\xE6\u012F\u010D\xE9\u0119\xEB\u0117\xED\xEE\xEF\xF0\u0146\u014D\xF3\xF4\xF5\xF6\u0169\xF8\u0173\xFA\xFB\xFC\xFD\xFE\u0138'),
	'\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C\x8D\x8E\x8F\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C\x9D\x9E\x9F\xA0\xA1\xA2\xA3\xA4\xA5\xA6\xA7\xA8\xA9\xAA\xAB\xAC\xAD\xAE\xAF\xB0\xB1\xB2\xB3\xB4\xB5\xB6\xB7\xB8\xB9\xBA\xBB\xBC\xBD\xBE\xBF\xC0\xC1\xC2\xC3\xC4\xC5\xC6\xC7\xC8\xC9\xCA\xCB\xCC\xCD\xCE\xCF\xD0\xD1\xD2\xD3\xD4\xD5\xD6\xD7\xD8\xD9\xDA\xDB\xDC\xDD\xDE\xDF\xE0\xE1\xE2\xE3\xE4\xE5\xE6\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF0\xF1\xF2\xF3\xF4\xF5\xF6\xF7\xF8\xF9\xFA\xFB\xFC\xFD\xFE\xFF',
	'Encoding all other symbols in the character set'
);
assert.throws(
	() => {
		iso885910.encode('\uFFFF');
	},
	Error,
	'Encoding a code point that is invalid for this encoding throws an error in `fatal` mode, which is the implied default for `encode()`'
);
assert.throws(
	() => {
		iso885910.encode('\uFFFF', { mode: 'fatal' });
	},
	Error,
	'Encoding a code point that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		iso885910.encode('\uFFFF', { mode: 'FATAL' });
	},
	Error,
	'Mode names are case-insensitive'
);
assert.throws(
	() => {
		iso885910.encode('\uFFFF', { mode: 'fAtAl' });
	},
	Error,
	'Mode names are case-insensitive'
);
assert.strictEqual(
	iso885910.encode('\uFFFF', { mode: 'html' }),
	'&#65535;',
	'Encoding a code point that is invalid for this encoding returns an HTML entity in `html` mode'
);
assert.strictEqual(
	iso885910.encode('\uFFFF', { mode: 'HTML' }),
	'&#65535;',
	'Mode names are case-insensitive'
);
assert.strictEqual(
	iso885910.encode('\uFFFF', { mode: 'hTmL' }),
	'&#65535;',
	'Mode names are case-insensitive'
);

console.log('Testing `iso885910.decode`…');
assert.strictEqual(
	iso885910.decode('\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F'),
	'\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\x0B\f\r\x0E\x0F\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1A\x1B\x1C\x1D\x1E\x1F !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7F',
	'U+0000 to U+007F remain unchanged'
);
assert.strictEqual(
	iso885910.decode('\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C\x8D\x8E\x8F\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C\x9D\x9E\x9F\xA0\xA1\xA2\xA3\xA4\xA5\xA6\xA7\xA8\xA9\xAA\xAB\xAC\xAD\xAE\xAF\xB0\xB1\xB2\xB3\xB4\xB5\xB6\xB7\xB8\xB9\xBA\xBB\xBC\xBD\xBE\xBF\xC0\xC1\xC2\xC3\xC4\xC5\xC6\xC7\xC8\xC9\xCA\xCB\xCC\xCD\xCE\xCF\xD0\xD1\xD2\xD3\xD4\xD5\xD6\xD7\xD8\xD9\xDA\xDB\xDC\xDD\xDE\xDF\xE0\xE1\xE2\xE3\xE4\xE5\xE6\xE7\xE8\xE9\xEA\xEB\xEC\xED\xEE\xEF\xF0\xF1\xF2\xF3\xF4\xF5\xF6\xF7\xF8\xF9\xFA\xFB\xFC\xFD\xFE\xFF'),
	'\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8A\x8B\x8C\x8D\x8E\x8F\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9A\x9B\x9C\x9D\x9E\x9F\xA0\u0104\u0112\u0122\u012A\u0128\u0136\xA7\u013B\u0110\u0160\u0166\u017D\xAD\u016A\u014A\xB0\u0105\u0113\u0123\u012B\u0129\u0137\xB7\u013C\u0111\u0161\u0167\u017E\u2015\u016B\u014B\u0100\xC1\xC2\xC3\xC4\xC5\xC6\u012E\u010C\xC9\u0118\xCB\u0116\xCD\xCE\xCF\xD0\u0145\u014C\xD3\xD4\xD5\xD6\u0168\xD8\u0172\xDA\xDB\xDC\xDD\xDE\xDF\u0101\xE1\xE2\xE3\xE4\xE5\xE6\u012F\u010D\xE9\u0119\xEB\u0117\xED\xEE\xEF\xF0\u0146\u014D\xF3\xF4\xF5\xF6\u0169\xF8\u0173\xFA\xFB\xFC\xFD\xFE\u0138',
	'Decoding all other symbols in the character set'
);
assert.strictEqual(
	iso885910.decode('\uFFFF'),
	'\uFFFD',
	'Decoding a byte that is invalid for this encoding returns U+FFFD in `replacement` mode, which is the implied default for `decode()`'
);
assert.strictEqual(
	iso885910.decode('\uFFFF', { mode: 'replacement' }),
	'\uFFFD',
	'Decoding a byte that is invalid for this encoding returns U+FFFD in `replacement` mode'
);
assert.strictEqual(
	iso885910.decode('\uFFFF', { mode: 'REPLACEMENT' }),
	'\uFFFD',
	'Mode names are case-insensitive'
);
assert.strictEqual(
	iso885910.decode('\uFFFF', { mode: 'rEpLaCeMeNt' }),
	'\uFFFD',
	'Mode names are case-insensitive'
);
assert.throws(
	() => {
		iso885910.decode('\uFFFF', { mode: 'fatal' });
	},
	Error,
	'Decoding a byte that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		iso885910.decode('\uFFFF', { mode: 'FATAL' });
	},
	Error,
	'Decoding a byte that is invalid for this encoding throws an error in `fatal` mode'
);
assert.throws(
	() => {
		iso885910.decode('\uFFFF', { mode: 'fAtAl' });
	},
	Error,
	'Mode names are case-insensitive'
);

console.log('Testing `iso885910.labels`…');
assert.ok(Array.isArray(iso885910.labels));
assert.ok(iso885910.labels.length > 0);
