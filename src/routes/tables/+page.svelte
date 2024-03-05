<script>
	import { PageBody, Table, Button, StatusTag, RadioInput } from "ascend-ui"

    const list = [
        {
            array: ['1','3','5'],
            boolean: true,
            button: Button,
            checkbox: false,
            date: new Date(),
            radio: true,
            tag: 'pending',
            editable: 'test editable text',
            default: 'default text'
        },
        {
            array: ['2','4','6'],
            boolean: false,
            button: Button,
            checkbox: true,
            date: new Date(),
            radio: false,
            tag: 'approved',
            editable: 'test editable text',
            default: 'default text'
        },
        {
            array: ['1','2','3'],
            boolean: true,
            button: Button,
            checkbox: true,
            date: new Date(),
            radio: true,
            tag: 'pending',
            editable: 'test editable text',
            default: 'default text'
        }
    ]

    const columns = [
		{
			title: 'Text',
			key: 'default',
			type: 'text',
			styles: ['flex: 2', 'max-width: 223px', 'white-space: nowrap', 'overflow: hidden', 'text-overflow: ellipsis', 'font-weight: bold'],
		},
		{
			title: 'Array',
			key: 'array',
			type: 'array',
			styles: ['flex: 2', 'max-width: 223px', 'white-space: nowrap', 'overflow: hidden', 'text-overflow: ellipsis'],
		},
		{
			title: 'Date',
			key: 'date',
			type: 'date',
			styles: ['flex: 1'],
		},
		{
			title: 'Tag',
			component: StatusTag,
			key: 'tag',
			type: 'tag',
			styles: ['flex: 1'],
		},
        {
            title: 'Editable',
            key: 'editable',
            type: 'editable',
            styles: ['flex: 1']
        },
        {
            title: 'Button',
            component: Button,
            key: 'button',
            type: 'button',
            styles: ['flex: 1']
        },
        {
            title: 'Radio',
            component: RadioInput,
            key: 'radio',
            type: 'radio',
            styles: ['flex: 1']
        }
	]
</script>

<PageBody size='full'>
    <Table
        {columns}
        {list}
    />
</PageBody>