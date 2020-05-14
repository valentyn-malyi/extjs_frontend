Ext.define('a.view.main.list.ListModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainList',

  requires: [
    'a.store.Personnel'
  ],

  stores: {
    personnelStore: {
      type: 'personnel'
    }
  },

});
