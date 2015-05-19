
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
    list: 'Getting Started',
    board: 'CODE - Projects',
  });
  Lists.insert({
    list: 'Diving In',
    board: 'CODE - Projects',
  }); 
  Lists.insert({
    list: 'Mastering Hello',
    board: 'CODE - Projects',
  });
  Lists.insert({
    list: 'Getting Started',
    board: 'Codester',
  });
  Lists.insert({
    list: 'Diving In',
    board: 'Codester',
  }); 
  Lists.insert({
    list: 'Mastering Hello',
    board: 'Codester',
  });
	Lists.insert({
    list: 'Getting Started',
    board: 'Game Plan',
  });
  Lists.insert({
    list: 'Diving In',
    board: 'Game Plan',
  }); 
  Lists.insert({
    list: 'Mastering Hello',
    board: 'Game Plan',
  });
}