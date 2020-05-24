Ext.define("a.view.main.list.ListController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainList",

  bookRenderer: function (value) {
    bookStore = this.getViewModel().getStore("bookStore")
    book = bookStore.getById(value)
    return book ? book.get("name") : "Not found book"
  }
})
