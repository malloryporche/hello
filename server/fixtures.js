if (Boards.find().count() === 0) {
	Boards.insert({
    title: 'CODE - Projects',
  });
  Boards.insert({
    title: 'Codester',
  }); 
  Boards.insert({
    title: 'Game Plan',
  });
}

if (CardsList.find().count() === 0) {
	CardsList.insert({
    title: 'Getting Started',
  });
  CardsList.insert({
    title: 'Diving In',
  }); 
  CardsList.insert({
    title: 'Mastering Hello',
  });
}