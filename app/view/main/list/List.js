Ext.define('a.view.main.list.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainList',

  requires: [
    'a.view.main.list.ListController',
    'a.view.main.list.ListModel',
  ],

  controller: 'mainList',
  viewModel: 'mainList',

  columns: [
    {text: 'Name', dataIndex: 'name'},
    {text: 'Email', dataIndex: 'email', flex: 1},
    {text: 'Phone', dataIndex: 'phone', flex: 1}
  ],

  title: 'Personnel',

  bind: {
    store: "{personnelStore}"
  },

  listeners: {
    select: 'onItemSelected'
  }
});
