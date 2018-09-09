var date = new Date();

var year = date.getFullYear();

var test = new Vue({
    el:"#test",
    data:{
        formInline: {
            number: '',
            name: '',
            value: year.valueOf().toString(),
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
        },
        header2:["A","B", "C"],
        data_list2:[
            [1, 2, 3],
            [4,5,6]
        ],
        header:["A","B", "C"],
        data_list:[
            [1, 2, 3],
            [4,5,6]
        ]
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
})