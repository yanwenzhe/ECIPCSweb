var date = new Date();

var year = date.getFullYear();



var test = new Vue({
    el:"#test",
    data:{
        formInline: {
            number: '',
            name: '',
            value: year.valueOf().toString(),
            options: []
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
        onSubmit(formInline) {
            $.ajax({
                type:"get",
                url:"/teacher/check",
                contentType : 'application/json; charset=utf-8',
                dataType : 'json',
                data:{"year":this.formInline.value,"id":this.formInline.value1,"name":this.formInline.name,"number":this.formInline.number},
                success: function (data) {
                    console.log(133)
                },
                error:function (d) {
                    // alert("error6");
                }
            })
        },
        change(formInline){
            var subject = new Array();
            console.log(this.formInline.value)
            $.ajax({
                type:"get",
                url:"/teacher/change",
                contentType : 'application/json; charset=utf-8',
                dataType : 'json',
                data:{"year":this.formInline.value},
                success: function (result) {
                    var data = [];
                    for (let i = 0; i < result.length; i++) {

                        var obj = {}
                        obj.value = result[i].id;
                        obj.label = result[i].name;
                        data[i] = obj
                    }
                    test.formInline.options = data;
                },
                error:function (d) {
                    alert(d)
                }
            })
        },
        start(){
            var subject = new Array();
            $.ajax({
                type: 'POST',
                url: "/teacher/initialization",
                contentType : 'application/json; charset=utf-8',
                dataType : 'json',
                success: function (result) {
                    var data = [];
                    for (let i = 0; i < result.length; i++) {

                        var obj = {}
                        obj.value = result[i].id;
                        obj.label = result[i].name;
                        data[i] = obj
                    }
                   test.formInline.options = data;
                },
                error:function (d) {
                    alert(d)
                }
            });
        }
    },
    mounted(){
        this.start()
    }

})

