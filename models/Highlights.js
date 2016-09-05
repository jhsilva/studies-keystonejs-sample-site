var keystone = require('keystone');

/**
 * Highlights Model
 * =============
 */

var Highlights = new keystone.List('Highlights', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Highlights.add({
	name: { type: String, required: true }
});

Highlights.register();
