Template.card.helpers ({

	cardTitle: function() {
		var title
		return this.title;
	},
	cardID: function() { return Cards.findOne(this.params._id) }
});