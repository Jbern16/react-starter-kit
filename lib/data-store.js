const EventEmitter = require('events');

let ideas = []; 

const store = new EventEmitter();

const storedIdeas = localStorage.getItem('ideas');
if  (storedIdeas) { ideas = JSON.parse(storedIdeas); }

store.all = () => ideas.concat([]);

store.create = (idea) => { 
  idea.id = Date.now();
  idea.active = false;
  ideas = ideas.concat(idea);
  store.emit('change');

}

store.update = (id, data) => {
  ideas = ideas.map(function(idea) {
    if (idea.id !==  id) { return idea; }
    return data;
  });
  store.emit('change');
}

store.destroy = (id) => {
  ideas = ideas.filter(idea => idea.id !== id)
  store.emit('change');  
}

store.on('change', () => {
  localStorage.setItem('ideas', JSON.stringify(ideas));
})
module.exports = store;