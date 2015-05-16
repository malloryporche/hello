
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
    board: 'CODE - Projects',
  });
  CardsList.insert({
    title: 'Diving In',
    board: 'CODE - Projects',
  }); 
  CardsList.insert({
    title: 'Mastering Hello',
    board: 'CODE - Projects',
  });
}