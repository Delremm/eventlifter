Template.home.helpers({
    events: function(){
        return Events.find({}, {sort: {dateStart: 1}})
    }
});

Template.eventsListItem.helpers({
    imageUrl: function(imageId){
        var i = Images.findOne({_id: imageId});
        if (i){
            return i
        } else{
            return null
        }
    }
})