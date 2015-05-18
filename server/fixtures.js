
if (Boards.find().count() === 0) {
  Boards.insert({
    board: 'CODE - Projects',
    card: 'Getting Started',
  });
  Boards.insert({
    board: 'CODE - Projects',
    card: 'Diving In',
  });
	Boards.insert({
    board: 'CODE - Projects',
    card: 'Hello Vurld',
  });

   Boards.insert({
    board: 'Codester',
    card: 'Getting Started',
  });
  Boards.insert({
    board: 'Codester',
    card: 'Diving In',
  });
  Boards.insert({
    board: 'Codester',
    card: 'Hello Vurld',
  });  Boards.insert({
    board: 'Game Plan',
    card: 'Getting Started',
  });
  Boards.insert({
    board: 'Game Plan',
    card: 'Diving In',
  });
  Boards.insert({
    board: 'Game Plan',
    card: 'Hello Vurld',
  });
}

if (Lists.find().count() === 0) {
  Lists.insert({
    board: 'Getting Started',
    cardTitle: 'CODE - Projects',
  });
  Lists.insert({
    board: 'Diving In',
    cardTitle: 'CODE - Projects',
  }); 
  Lists.insert({
    board: 'Mastering Hello',
    cardTitle: 'CODE - Projects',
  });
  Lists.insert({
    board: 'Getting Started',
    cardTitle: 'Codester',
  });
  Lists.insert({
    board: 'Diving In',
    cardTitle: 'Codester',
  }); 
  Lists.insert({
    board: 'Mastering Hello',
    cardTitle: 'Codester',
  });
	Lists.insert({
    board: 'Getting Started',
    cardTitle: 'Game Plan',
  });
  Lists.insert({
    board: 'Diving In',
    cardTitle: 'Game Plan',
  }); 
  Lists.insert({
    board: 'Mastering Hello',
    cardTitle: 'Game Plan',
  });
}