Ext.define('a.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',

  onEditName: function (celling, operation) {
    if (Ext.Object.isEmpty(operation.record.getChanges())) {
      return
    }
    operation.record.save(
      {
        success: (record, operation) => {
          response = operation.getResponse().responseJson
          if (response["status"] === "OK") {
            Ext.Msg.alert('Status', response["message"]);
          } else {
            Ext.Msg.alert('Status', response["message"]);
            record.set(record.previousValues)
            record.commit()
          }
        }
      }
    )
  }
});
