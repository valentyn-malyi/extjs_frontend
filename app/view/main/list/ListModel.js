Ext.define("a.view.main.list.ListModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.mainList",

  requires: [
    "a.model.Personnel"
  ],

  stores: {
    personnelStore: {
      model: "a.model.Personnel",
      autoLoad: true
    },
    bookStore: {
      model: "a.model.Book",
      autoLoad: true
    }
  }
});
