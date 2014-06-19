/*****************************************************************************/
/* CreateTodoItem: Event Handlers and Helpers */
/*****************************************************************************/
Template.CreateTodoItem.events({
  'submit form': function(event, template){
    event.preventDefault();
    var subject = template.find("input").value;

    Todos.insert({
      subject: subject, 
      is_done: false,
      created_at: new Date,
      user_id: Meteor.userId()
    });

    var form = template.find('form');
    form.reset();
  }
});

Template.CreateTodoItem.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* CreateTodoItem: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTodoItem.created = function () {
};

Template.CreateTodoItem.rendered = function () {
};

Template.CreateTodoItem.destroyed = function () {
};
