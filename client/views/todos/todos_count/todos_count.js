/*****************************************************************************/
/* TodosCount: Event Handlers and Helpers */
/*****************************************************************************/
Template.TodosCount.events({
  
});

Template.TodosCount.helpers({
  completedCount: function(){
    return Todos.find({is_done: true}).count();
  },
  totalCount: function(){
    return Todos.find().count();
  }
});

/*****************************************************************************/
/* TodosCount: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosCount.created = function () {
};

Template.TodosCount.rendered = function () {
};

Template.TodosCount.destroyed = function () {
};
