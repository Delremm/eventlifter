Template.contacts.helpers({
    profile: function(){
        var p = Profiles.findOne({user: this.user});
        if (p){
            return p
        }
        return null
    }
});