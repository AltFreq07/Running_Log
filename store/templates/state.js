export default () => ({
    templates: [
        {
            name: "Running Log",
            columns: [
                {
                    text: 'Timestamp',
                    type: 'DateTime',
                    align: 'start',
                    value: 'timestamp',
                    width: '150px',
                    export: true,
                    sortable: true
                },
                {
                    text: 'Device',
                    type: 'List',
                    value: 'device',
                    width: '13%',
                    export: true,
                    align: 'center',
                    sortable: true
                },
                {
                    text: 'Objective',
                    type: 'Text',
                    value: 'objective',
                    export: true,
                    width: undefined,
                    align: 'center',
                    sortable: true
                },
                {
                    text: 'Command',
                    type: 'Text',
                    value: 'command',
                    export: true,
                    width: undefined,
                    align: 'center',
                    sortable: true
                },
                {
                    text: 'Results',
                    type: 'Text',
                    value: 'results',
                    export: true,
                    width: undefined,
                    align: 'center',
                    sortable: true
                },
                {
                    text: 'Screenshots',
                    type: 'Screenshots',
                    align: 'center',
                    sortable: false,
                    value: 'screenshots',
                    width: '120px',
                    export: true,
                },
                {
                    text: 'Actions',
                    type: 'Actions',
                    align: 'center',
                    value: 'actions',
                    width: '75px',
                    sortable: false,
                    export: false
                }]
        },
        {
            name: "Timeline",
            columns: [
                {
                    text: 'Timestamp',
                    type: 'DateTime',
                    align: 'start',
                    value: 'timestamp',
                    width: '150px',
                    export: true,
                    sortable: true
                },
                {
                    text: 'Event',
                    type: 'Text',
                    value: 'event',
                    export: true,
                    width: undefined,
                    align: 'center',
                    sortable: false
                },
                {
                    text: 'Important',
                    type: 'Checkbox',
                    value: 'important',
                    export: true,
                    width: undefined,
                    align: 'center',
                    sortable: true
                },
                {
                    text: 'Actions',
                    type: 'Actions',
                    align: 'center',
                    value: 'actions',
                    width: '75px',
                    sortable: false,
                    export: false
                }]
        },
    ]
})