/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'a.Application',

    name: 'a',

    requires: [
        // This will automatically load all classes in the a namespace
        // so that application classes do not need to require each other.
        'a.*'
    ],

    // The name of the initial view to create.
    mainView: 'a.view.main.Main'
});
