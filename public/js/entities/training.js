define(
  [
    "app",
    "entities/ajax"
  ], function(VirtualDojo, Ajax) {
    VirtualDojo.module("Entities.Users", function(Users, ExaApp, Backbone, Marionette, $, _) {
      var API = {
        getTraining: function (params) {
          var defer = $.Deferred();

          setTimeout(function(){
            var data = [
                        {
                          disciplineId: 1,
                          title: "Kendo",
                          description: "kendo short description will be here",
                          classes: [
                            {
                              classNum: 1,
                              disciplineId: 1,
                              instructorId: 1,
                              title: "Kendo 101: Philsophy",
                              description: "This class covers the basics of Kendo",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              classVideo: "video/dojo_bg.mp4",
                              totalLevel: 5
                            },
                            {
                              classNum: 2,
                              disciplineId: 1,
                              instructorId: 2,
                              title: "Kendo 102: Grip & Steps & Middle Stance ",
                              description: "This class covers the basics of Kendo",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 3,
                              disciplineId: 1,
                              instructorId: 3,
                              title: "Kendo 103: Strikes - Basic",
                              description: "This class covers the basics of Kendo",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 4,
                              disciplineId: 1,
                              instructorId: 4,
                              title: "Kendo 104: Strikes - Intermediate",
                              description: "This class covers the basics of Kendo",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 5,
                              disciplineId: 1,
                              instructorId: 5,
                              title: "Kendo 105: Strikes - Advanced",
                              description: "This class covers the basics of Kendo",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 6,
                              disciplineId: 1,
                              instructorId: 6,
                              title: "Kendo 106: Sparring",
                              description: "This class covers the basics of Kendo",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            }
                          ]
                        },
                        {
                          disciplineId: 2,
                          title: "QiGong",
                          description: "Qigong short description will be here",
                          classes: [
                                  {
                              classNum: 1,
                              disciplineId: 2,
                              instructorId: 1,
                              title: "Qigong 101: Philsophy",
                              description: "This class covers the basics of Qigong",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 2,
                              disciplineId: 2,
                              instructorId: 2,
                              title: "Qigong 102: Grip & Steps & Middle Stance ",
                              description: "This class covers the basics of Qigong",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 3,
                              disciplineId: 2,
                              instructorId: 3,
                              title: "Qigong 103: Strikes - Basic",
                              description: "This class covers the basics of Qigong",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 4,
                              disciplineId: 2,
                              instructorId: 4,
                              title: "Qigong 104: Strikes - Intermediate",
                              description: "This class covers the basics of Qigong",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 5,
                              disciplineId: 2,
                              instructorId: 5,
                              title: "Qigong 105: Strikes - Advanced",
                              description: "This class covers the basics of Qigong",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            },
                            {
                              classNum: 6,
                              disciplineId: 2,
                              instructorId: 6,
                              title: "Kendo 106: Sparring",
                              description: "This class covers the basics of Kendo",
                              classImage: "http://33.media.tumblr.com/avatar_161256d168d5_128.png",
                              totalLevel: 5
                            }
                          ]
                        }
                      ]

           // mock result from server

            defer.resolve(data);
          }, 200);

          return defer.promise();

          //var ajax = Ajax.perform({
          //  type: "GET",
          //  url: '/discipline,
          //  callback: function (data) {
          //    return data;
          //  }
          //});
          //
          //return ajax.promise();
        }
      };

      VirtualDojo.reqres.setHandler("entities:training:get", function (params) {
        return API.getTraining(params);
      });
    });
  }
);
