/*****************************************************************************/
/* TodosIndex: Event Handlers and Helpers */
/*****************************************************************************/
Template.TodosIndex.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.TodosIndex.helpers({
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

/*****************************************************************************/
/* TodosIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosIndex.created = function () {
};

Template.TodosIndex.rendered = function () {
};

Template.TodosIndex.destroyed = function () {
};
