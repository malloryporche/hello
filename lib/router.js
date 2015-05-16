Router.configure ({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('boards'); }
});

Router.route('/', {name: 'boardsList'});
Router.route('boards/:_id', {
	name: 'boardPage',
	data: function() { return Boards.findOne(this.params._id); }
});


Router.route('/:_id', {
	name: 'cardListPage',
	data: function() { return CardList.findOne(this.params._id); }
});