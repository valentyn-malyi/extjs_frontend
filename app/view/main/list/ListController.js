Ext.define("a.view.main.list.ListController", {
  extend: "Ext.app.ViewController",
  alias: "controller.mainList",

  bookRenderer: function (value) {
    bookStore = this.getViewModel().getStore("bookStore")
    bookStore.reload()
    book = bookStore.getById(value)
    return book ? book.get("name") : "Not found book"
  },

  showBooks: function () {
    bookStore = this.getViewModel().getStore("bookStore")
    columnBook = this.getView().getColumns()[3]
    bookStore.load({
      callback: function () {
        columnBook.setHidden(false)
      }
    })
  }
})
