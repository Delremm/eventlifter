Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('addEvent', {path: '/add_event'});
  this.route('profile', {path: '/profile'});
  this.route('learn', {path: '/learn'});
  this.route('eventDetails', {
    path: '/events/:_id', 
    data: function(){
      return Events.findOne({_id: this.params._id})
    },
    onBeforeAction: function(){
      Session.set("currentEvent", this.params._id);
      this.next();
    }
  });
  // this.route('profile', {path: '/profile'});
});
