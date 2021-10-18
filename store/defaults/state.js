export default () => ({
    columns: [
        {
            text: 'Timestamp',
            type: 'DateTime',
            align: 'center',
            value: 'timestamp',
            width: '150px',
            export: true
        },
        {
            text: 'Device',
            type: 'List',
            value: 'device',
            width: '13%',
            export: true
        },
        {
            text: 'Objective',
            type: 'Text',
            value: 'objective',
            export: true
        },
        {
            text: 'Command',
            type: 'Text',
            value: 'command',
            export: true
        },
        {
            text: 'Results',
            type: 'Text',
            value: 'results',
            export: true
        },
        {
            text: 'Screenshots',
            type: 'Screenshots',
            align: 'center',
            sortable: false,
            value: 'screenshots',
            width: '120px',
            export: true
        },
        {
            text: 'Actions',
            type: 'Actions',
            align: 'center',
            value: 'actions',
            width: '75px',
            sortable: false,
            export: false
        },
    ],
})