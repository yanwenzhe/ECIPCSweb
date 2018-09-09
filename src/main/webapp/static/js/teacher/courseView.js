var date = new Date();

var year = date.getFullYear();

var test = new Vue({
    el:"#test",
    data:{
        value: year.valueOf().toString(),
        tableData3: [{
            number: '2016-05-03',
            subject: '王小虎',
            date: '上海',
            yesOrNo: '普陀区'
        }, {
            number: '2016-05-03',
            subject: '王小虎',
            date: '上海',
            yesOrNo: '普陀区'
        }]
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



