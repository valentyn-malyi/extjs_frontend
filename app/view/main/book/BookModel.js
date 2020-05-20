Ext.define("a.view.main.book.BookModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.mainBook",

  requires: [
    "a.model.Book"
  ],

  stores: {
    bookStore: {
      model: "a.model.Book",
      autoLoad: true
    }
  },

  data: {
    thisis: "bla bal"
  }

});
