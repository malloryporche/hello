
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

if (Lists.find().count() === 0) {
  Lists.insert({
    cards: 'Getting Started',
    title: 'CODE - Projects',
  });
  Lists.insert({
    cards: 'Diving In',
    title: 'CODE - Projects',
  }); 
  Lists.insert({
    cards: 'Mastering Hello',
    title: 'CODE - Projects',
  });
  Lists.insert({
    cards: 'Getting Started',
    title: 'Codester',
  });
  Lists.insert({
    cards: 'Diving In',
    title: 'Codester',
  }); 
  Lists.insert({
    cards: 'Mastering Hello',
    title: 'Codester',
  });
	Lists.insert({
    cards: 'Getting Started',
    title: 'Game Plan',
  });
  Lists.insert({
    cards: 'Diving In',
    title: 'Game Plan',
  }); 
  Lists.insert({
    cards: 'Mastering Hello',
    title: 'Game Plan',
  });
}