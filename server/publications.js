
Meteor.publish('boards', function() {
	return Boards.find();
});
Meteor.publish('cardsList', function() {
	return cardsList.find();

});