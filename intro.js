Todos = new Meteor.Collection("todos");

if (Meteor.isClient) {
  todosSub = Meteor.subscribe('todos');

  Template.TodosPanel.helpers({
    items: function(){
      return Todos.find({}, {
        sort:{
          created_at: -1
        }
      });
    },
    isDoneClass: function(){
      return this.is_done? 'done' : '';
    }
  });

  Template.TodoItem.helpers({
    isDoneChecked: function() {
      return this.is_done? 'checked' : '';
    }
  });

  Template.TodoItem.events({
    'click [name=is_done]': function(event, template){
      var id = this._id;
      var isDone = template.find('input').checked;
      Todos.update({_id: id}, {
        $set:{
          is_done: isDone
        }
      });
    }
  });

  Template.CreateTodoItem.events({
    'submit form': function(event, template){
      event.preventDefault();
      var subject = template.find("input").value;

      Todos.insert({
        subject: subject, 
        is_done: false,
        created_at: new Date
      });

      var form = template.find('form');
      form.reset();
    }
  });

  Template.TodosCount.helpers({
    completedCount: function(){
      return Todos.find({is_done: true}).count();
    },
    totalCount: function(){
      return Todos.find().count();
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('todos', function(){
    return Todos.find();
  });
}
