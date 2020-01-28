Ext.define('BasicCRUD.view.main.ProfileList', {
    extend: 'Ext.form.Panel',
    xtype: 'profilelist',
    controller: 'profile-list',
    reference: 'useredit',
    modal: true,
    scrollable: true,
    collapsible: true,
    requires: [
        'BasicCRUD.view.main.ProfileListViewModel',
        'BasicCRUD.main.ProfileListController'
    ],
    frame: true,
    title: 'Profile',
    bodyPadding: 20,
    scrollable: true,
    ViewModel: {
        type: 'profileListViewModel'
    },
    // bind: {
        // title: 'Edit: {currentUser.firstName}'
    // },
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },
    items: [{
            xtype: 'fieldset',
            scrollable: true,
            overflow: 'auto',
            title: 'User Info',
            layout: 'form',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            listeners: {
                'show': 'onShow'
            },
            items: [{
                allowBlank: false,
                fieldLabel: 'Email Id',
                name: 'email',
                emptyText: 'email id',
                inputType: 'email',
                // bind: '{currentUser.email}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Name',
                name: 'name',
                emptyText: 'name',
                // bind: '{currentUser.name}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Contact',
                name: 'contact',
                emptyText: 'contact',
                inputType: 'Number',
                // bind: '{currentUser.contact}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Date of joining',
                name: 'DOJ',
                xtype: 'datefield',
                // bind: '{currentUser.doj}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Address',
                name: 'address',
                emptyText: 'address',
                // bind: '{currentUser.address}',
                flex: 1
            }, {
                allowBlank: false,
                fieldLabel: 'Gender',
                xtype: 'fieldcontainer',
                defaultType: 'radiofield',
                // bind: '{currentUser.gender}',
                layout: 'hbox',
                items: [{
                    boxLabel: 'M',
                    name: 'gender',
                    inputValue: 'm'
                }, {
                    boxLabel: 'F',
                    name: 'gender',
                    inputValue: 'f'
                }]
            }, {
                xtype: 'fieldcontainer',
                fieldLabel: 'Department',
                reference: 'department',
                defaultType: 'checkboxfield',
                // bind: '{currentUser.department}',
                layout: 'hbox',
                items: [{
                    boxLabel: 'Marketing',
                    name: 'country',
                    inputValue: '1'
                }, {
                    boxLabel: 'Sales',
                    name: 'country',
                    inputValue: '2',
                    checked: true
                }, {
                    boxLabel: 'Administration',
                    name: 'country',
                    inputValue: '3'
                }]
            }, {
                xtype: 'textareafield',
                grow: true,
                name: 'Qualifications',
                fieldLabel: 'Qualifications',
                // bind: '{currentUser.qualifications}',
                anchor: '100%'
            }]
    }],
    buttons: [{
        text: 'Create',
        itemId: 'btnCreate',
        // disabled: true,
        // formBind: true,
        handler: 'onCreate'
    }, {
        text: 'Reset',
        // formBind: true,
        handler: function() {
            this.up('form').getForm().reset();
            // this.up('form').down('').allowBlank = true;
        }
    }],

});