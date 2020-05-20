Ext.define('a.view.main.book.Book', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainBook',

  requires: [
    'a.view.main.book.BookController',
    'a.view.main.book.BookModel',
  ],

  controller: 'mainBook',
  viewModel: 'mainBook',

  defaults: {
    collapsible: true,
    split: true,
    bodyPadding: 0
  },

  columns: [
    {
      text: 'Name',
      dataIndex: 'name',
      editor: {
        xtype: 'textfield',
        allowBlank: false
      }
    }
  ],

  title: 'Books',

  bind: {
    store: "{bookStore}"
  }
});
