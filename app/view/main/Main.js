Ext.define('a.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',

    'a.view.main.MainController',
    'a.view.main.MainModel',

    'a.view.main.list.List',
    'a.view.main.book.Book'
  ],

  controller: 'main',
  viewModel: 'main',

  ui: 'navigation',

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: 'stretchmax'
    },
    title: {
      bind: {
        text: '{name}'
      },
      flex: 0
    },
    iconCls: 'fa-th-list'
  },

  tabBar: {
    flex: 1,
    layout: {
      align: 'stretch',
      overflowHandler: 'none'
    }
  },

  responsiveConfig: {
    tall: {
      headerPosition: 'top'
    },
    wide: {
      headerPosition: 'left'
    }
  },

  defaults: {
    bodyPadding: 0,
    tabConfig: {
      responsiveConfig: {
        wide: {
          iconAlign: 'left',
          textAlign: 'left'
        },
        tall: {
          iconAlign: 'top',
          textAlign: 'center',
          width: 120
        }
      }
    }
  },

  items: [
    {
      title: 'Users',
      iconCls: 'fa-user',
      items: [
        {
          xtype: 'mainList',
          listeners: {
            edit: "onEditName"
          }
        }
      ]
    },
    {
      title: 'Home',
      iconCls: 'fa-home',
      items: [
        {
          xtype: 'mainBook',
          listeners: {
            edit: "onEditName"
          }
        }
      ]
    },
    // {
    //   title: 'Groups',
    //   iconCls: 'fa-users',
    //   bind: {
    //     html: '{loremIpsum}'
    //   }
    // },
    // {
    //   title: 'Settings',
    //   iconCls: 'fa-cog',
    //   bind: {
    //     html: '{loremIpsum}'
    //   }
    // }
  ]
});
