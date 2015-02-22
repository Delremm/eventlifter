Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
  // stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});
// var Images = new FS.Collection("images", {
//   stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
// });

Schema = {};

Tags = new Mongo.Collection("tags");

Events = new Mongo.Collection("events");
Schema.events = new SimpleSchema({
    title: {
      type: String,
      label: "Название *",
      max: 200
    },
    link: {
      type: String,
      label: "Ссылка",
      max: 1000,
      optional: true
    },
    description: {
      type: String,
      label: "Описание",
      max: 2000,
      autoform: {
        rows: 3 
      },
      optional: true
    },
    tags: {
      type: [String],
      label: "Тематика, тэги *",
      autoform: {
        type: 'tags',
        afFieldInput: {}
      }
    },
    population: {
      type: Number,
      label: "Ожидаемое число посетителей",
      min: 0,
      optional: true
    },
    age: {
      type: String,
      label: "Примерный возраст публики(например: 18-35)",
      max: 200,
      optional: true
    },
    dateStart: {
      type: Date,
      label: "Дата начала события",
      optional: true
    },
    dateEnd: {
      type: Date,
      label: "Дата окончания события",
      optional: true
    },
    picture: {
      type: String,
      autoform: {
          afFieldInput: {
              type: 'fileUpload',
              collection: 'images'
          }
      },
      label: 'Изображение',
      optional: true
    },
    user: {
        type: String,
        autoValue:function(){ return this.userId },
        autoform: {
          omit: true
        }
        // optional: true
    }
});
Events.attachSchema(Schema.events);

Profiles = new Mongo.Collection("profiles");
Schema.profiles = new SimpleSchema({
    phone: {
      type: String,
      label: "Телефон *",
      max: 200
    },
    email: {
      type: String,
      label: "Email *",
      max: 255
    },
    notes: {
      type: String,
      label: "Дополнительно",
      autoform: {
        rows: 3 
      },
      optional: true
    },
    user: {
        type: String,
        autoValue:function(){ return this.userId },
        autoform: {
          omit: true
        }
    }
  });
Profiles.attachSchema(Schema.profiles);

Variants = new Mongo.Collection("variants");
Schema.variants = new SimpleSchema({
    description: {
      type: String,
      label: "Описание *",
      max: 1000
    },
    price: {
      type: Number,
      label: "Цена *",
      min: 0
    },
    quantity: {
      type: Number,
      label: "Количество *",
      min: 0
    },
    eventId: {
        type: String,
        // autoValue:function(){
        //   console.log(this);
        //   return Session.get("currentEvent")
        // },
        autoform: {
          type: 'hidden',
          label: false,
          omit: true
        }
    }
});
Variants.attachSchema(Schema.variants);
