const EventEmitter = require('events');

let ideas = [];

const store = new EventEmitter();

store.all = () => ideas.concat([]);

store.create = (idea) => { 
  idea.id = Date.now();
  idea.active = false;
  ideas = ideas.concat(idea);
}

store.update = (id, data) => {
  ideas = ideas.map(function(idea) {
    if (idea.id !==  id) { return idea; }
    return data;
  })
}

store.destroy = (id) => {
  ideas = ideas.filter(idea => idea.id !== id)  
}

module.exports = store;