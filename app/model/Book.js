Ext.define("a.model.Book", {
  extend: "Ext.data.Model",

  fields: [
    "id", "name"
  ],
  idProperty: "id",

  proxy: {
    type: "rest",
    url: "http://localhost:3010/api/v1/books/",
    appendId: true,
    reader: {
      type: "json",
      rootProperty: "data"
    }
  }
});
