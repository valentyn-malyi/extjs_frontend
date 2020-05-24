Ext.define('a.view.main.list.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainList',

  requires: [
    'a.view.main.list.ListController',
    'a.view.main.list.ListModel',
  ],

  plugins: {
    cellediting: {
      clicksToEdit: 2
    }
  },

  listeners: {
    beforerender: "showBooks",
    refreshBooks : function () {
      console.log("refresh")
    }
  },

  controller: 'mainList',
  viewModel: 'mainList',
  title: 'Personnel',

  bind: {
    store: "{personnelStore}"
  },

  defaults: {
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
    },
    {
      text: 'Email',
      dataIndex: 'email',
      flex: 1,
      editor: {
        xtype: 'textfield',
        allowBlank: false
      }
    },
    {
      text: 'Phone',
      dataIndex: 'phone',
      flex: 1,
      editor: {
        xtype: 'textfield',
        allowBlank: false
      }
    },
    {
      text: 'Book',
      dataIndex: 'book_id',
      flex: 1,
      reference: "bookColumn",
      hidden: true,
      editor: {
        hideLabel: true,
        xtype: "combo",
        valueField: 'id',
        editable: false,
        allowBlank: false,
        bind: {
          store: "{bookStore}"
        },
        queryMode: 'remote',
        displayField: "name",
      },
      renderer: "bookRenderer"
    }
  ]
});
