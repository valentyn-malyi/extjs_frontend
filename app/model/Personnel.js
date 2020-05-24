Ext.define("a.model.Personnel", {
  extend: "Ext.data.Model",

  fields: [
    "id", "name", "email", "phone","book_id"
  ],
  idProperty: "id",

  proxy: {
    type: "rest",
    url: "http://localhost:3010/api/v1/personnels/",
    appendId: true,
    reader: {
      type: "json",
      rootProperty: "data"
    }
  }
});
