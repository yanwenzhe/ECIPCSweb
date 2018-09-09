var date = new Date();

var year = date.getFullYear();

var test = new Vue({
    el:"#test",
    data:{
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
        value1: '',
        header:["A","B", "C"],
        data_list:[
            [1, 2, 3],
            [4,5,6]
        ]
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
})



