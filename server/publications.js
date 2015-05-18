
Meteor.publish('boards', function() {
	return Boards.find();
});
Meteor.publish('lists', function() {
	return Lists.find();
});
Meteor.publish('cards', function() {
	return Cards.find();
});
Meteor.publish('checklists', function() {
	return Checklists.find();
});
Meteor.publish('comments', function() {
	return Comments.find();

});