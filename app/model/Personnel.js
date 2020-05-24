Ext.define("a.model.Personnel", {
  extend: "Ext.data.Model",

  fields: [
    "id", "name", "email", "phone",
    {
      name: 'book_id',
      reference: {
        type: 'Book',
        unique: true
      }
    }
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
