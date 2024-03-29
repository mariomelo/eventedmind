/*****************************************************************************/
/* NotFound: Event Handlers and Helpers */
/*****************************************************************************/
Template.NotFound.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.NotFound.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* NotFound: Lifecycle Hooks */
/*****************************************************************************/
Template.NotFound.created = function () {
};

Template.NotFound.rendered = function () {
  App.track('Page not Found');
};

Template.NotFound.destroyed = function () {
};
