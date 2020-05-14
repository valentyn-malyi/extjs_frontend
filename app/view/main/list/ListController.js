Ext.define('a.view.main.list.ListController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainList',

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
  },

  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  }
});
