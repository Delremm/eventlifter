Template.addEvent.events({
  'change .myFileInput': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
  }
});

Template.eventDetails.helpers({
    canUpdate: function(){
        if (this.user==Meteor.userId()){
            return true
        }
        return false
    },
    variants: function(){
        var variants = Variants.find({event: this._id});
        return variants
    }
});