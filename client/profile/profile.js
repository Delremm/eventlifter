Template.profile.helpers({
    profile: function(){
        var p = Profiles.findOne({user: Meteor.userId()});
        if (p){
            return p
        }
        return null
    },
    myEvents: function(){
        return Events.find({user: Meteor.userId()})
    }
});