define([
    "app",
    "tpl!apps/Sidenav/list/templates/list.tpl",
    "tpl!apps/Sidenav/list/templates/list_item.tpl"
  ], function(VirtualDojo, listTpl, listItemTpl){

    VirtualDojo.module("SidenavApp.List.View", function(View, VirtualDojo, Backbone, Marionette, $, _){
      View.Sidenav = Marionette.ItemView.extend({
        template: listItemTpl,
        tagName: "a",
        className: "item",

        events: {
          "click a": "navigate"
        },

        navigate: function(e){
          e.preventDefault();
          this.trigger("navigate", this.model);
        },

        onRender: function(){
          // set url for the menu item
          this.$el.prop("href", "#" + this.model.get("url"));

          if(this.model.selected) {
            this.$el.addClass("active");
            //picky not working
          };
        }     
      });
      
      View.Menu = Marionette.CompositeView.extend({
        className: "menu-container",
        template: listTpl,
        childView: View.Sidenav,
        childViewContainer: "#menu-items",
        events: {
          "click a.brand": "brandClicked"
        },

        brandClicked: function(e) {
          e.preventDefault();
          this.trigger("brand:clicked");
        }
      });
    });
    return VirtualDojo.SidenavApp.List.View;
})