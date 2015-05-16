if (Boards.find().count() === 0) {
	Boards.insert({
    title: 'CODE - Projects',
    url: 'https://trello.com/b/xZRZSIas/code-prjcts'
  });
  Boards.insert({
    title: 'Codester',
    url: 'http://meteor.com'
  }); 
  Boards.insert({
    title: 'Game Plan',
    url: 'http://themeteorbook.com'
  });
}