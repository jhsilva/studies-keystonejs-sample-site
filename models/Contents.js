var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contents Model
 * =============
 */

var Contents = new keystone.List('Contents', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Contents.add({
	name: { type: String, required: true }
});

Contents.register();
