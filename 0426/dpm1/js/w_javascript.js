
$(function(){
    $("#scrollDiv").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
    $("#scrollDiv1").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});
    $("#scrollDiv2").Scroll({line:1,speed:500,timer:3000,up:"but_up",down:"but_down"});

    $('.w_tipbar li').first().addClass('active_bar')
    $('.w_tipbar li').mouseover(function(){
        $(this).addClass('active_bar').siblings().removeClass('active_bar')
        var sum=$(this).index();
        $('.navbar').eq(sum).stop(true,true).slideDown().siblings('.navbar').hide()
    })
    $('.w_tipbar1 li').first().addClass('active_bar')
    $('.w_tipbar1 li').mouseover(function(){
        $(this).addClass('active_bar').siblings().removeClass('active_bar')
        var sum=$(this).index();
        $('.wangchao').eq(sum).stop(true,true).show().siblings('.wangchao').hide()
    })
    //日期倒计时,现在距离下面的日期
    var data_show = $('.data-box');
    for (var i = 1; i <= data_show.length; i++) {
        function_name($("#dateShow" + i).data("date"), "#dateShow" + i);
    }
    function function_name(time, obj) {
        $.leftTime(time, function (d) {
            if (d.status) {
                var $dateShow1 = $(obj);
                $dateShow1.find(".d").html(d.d);
                $dateShow1.find(".h").html(d.h);
                $dateShow1.find(".m").html(d.m);
                $dateShow1.find(".s").html(d.s);
            }
        });
    };
    //地图切换
    $('.counter').countUp();
    $('#mapChange').on('click',function (){
        $('.province').hide();
        $('.jinandata').show();
        $('#map_bg').hide();
        $('.map_bg').show();
        $('#return').show();
        $('.weifang').hide();
        $('.qingdao').hide();
        $('.zibo').hide();
        $('.taian').hide();
    })
    $('#zibo').on('click',function (){
        $('#map_bg').hide();
        $('.zibo').show();
        $('#return').show();
        $('.map_bg').hide();
        $('.zaozhuang').hide();
        $('.weifang').hide();
        $('.qingdao').hide();
        $('.taian').hide();
    })
    $('#weifang').on('click',function (){
        $('#map_bg').hide();
        $('.weifang').show();
        $('#return').show();
        $('.qingdao').hide();
        $('.map_bg').hide();
        $('.zaozhuang').hide();
        $('.zibo').hide();
        $('.taian').hide();
    })
    $('#qingdao').on('click',function (){
        $('#map_bg').hide();
        $('.qingdao').show();
        $('#return').show();
        $('.map_bg').hide();
        $('.zaozhuang').hide();
        $('.zibo').hide();
        $('.weifang').hide();
        $('.taian').hide();
    })
    $('#zaozhuang').on('click',function (){
        $('#map_bg').hide();
        $('.zaozhuang').show();
        $('#return').show();
        $('.zibo').hide();
        $('.weifang').hide();
        $('.qingdao').hide();
        $('.map_bg').hide();
        $('.taian').hide();
    })
    $('#taian').on('click',function (){
        $('#map_bg').hide();
        $('.taian').show();
        $('#return').show();
        $('.zaozhuang').hide();
        $('.zibo').hide();
        $('.weifang').hide();
        $('.qingdao').hide();
        $('.map_bg').hide();
    })
    $('#return').on('click',function (){
        $('#map_bg').show();
        $('.map_bg').hide();
        $('#return').hide();
        $('.zibo').hide();
        $('.weifang').hide();
        $('.qingdao').hide();
        $('.jinan').hide();
        $('.zaozhuang').hide();
        $('.taian').hide();
    })


    $("#w_maintt").hide();
    $("#w_maintt2").hide();
    $("#w_maintt3").hide();
    $("#w_maintt4").hide();
    $("#w_maintt5").hide();
    $("#w_maintt6").hide();
    $("#w_maintt7").hide();
    $("#w_maintt8").hide();
    $("#w_maintt9").hide();
    $("#w_maintt10").hide();
    $("#w_maintt11").hide();
    $("#w_maintt12").hide();
    $("#w_maintt13").hide();
    $("#w_maintt14").hide();
    $("#w_maintt15").hide();
    $("#w_maintt16").hide();
    $("#w_maintt17").hide();
    $("#w_maintt18").hide();
    $("#w_maintt19").hide();
    $("#w_maintt20").hide();
    $("#w_maintt21").hide();
    $("#w_maintt22").hide();
    $("#w_maintt23").hide();
    // e支部详情点击(济南)
    $(".jinan_ezb").on("click",function(){
        $("#w_main").hide();
        $("#w_maintt").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".qd_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt2").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".zb_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt3").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".zz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt4").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".dy_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt5").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".yt_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt6").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".wf_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt7").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jn_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt8").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".tn_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt9").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".wh_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt10").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".rz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt11").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lw_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt12").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lx_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt13").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".dz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt14").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".lc_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt15").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".bz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt16").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".hz_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt17").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jggw_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt18").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".jwgw_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt19").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".gzw_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt20").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".slyt_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt21").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })
    $(".qlsh_ezb").on("click",function () {
        $("#w_main").hide();
        $("#w_maintt22").show();
        $(".jinan_ezb").hide();
        $(".u_fanhui").show();
        $(".ezb").hide();
    })

    $(".u_fanhui").on("click",function(){
        $(".ezb").show();
        $("#w_main").show();
        $("#w_maintt").hide();
        $("#w_maintt2").hide();
        $("#w_maintt3").hide();
        $("#w_maintt4").hide();
        $("#w_maintt5").hide();
        $("#w_maintt6").hide();
        $("#w_maintt7").hide();
        $("#w_maintt8").hide();
        $("#w_maintt9").hide();
        $("#w_maintt10").hide();
        $("#w_maintt11").hide();
        $("#w_maintt12").hide();
        $("#w_maintt13").hide();
        $("#w_maintt14").hide();
        $("#w_maintt15").hide();
        $("#w_maintt16").hide();
        $("#w_maintt17").hide();
        $("#w_maintt18").hide();
        $("#w_maintt19").hide();
        $("#w_maintt20").hide();
        $("#w_maintt21").hide();
        $("#w_maintt22").hide();
        $("#w_maintt23").hide();
        $(".jinan_ezb").show();
        $(".u_fanhui").hide();
        })
});


/**性别年龄(性别)**/
function sexl(){
    var chart = echarts.init(document.getElementById('lsex1'));
    option = {
        title: {
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },

        series: [{
            type: 'pie',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color:['#39b54a','#00aafa'],

            label: {
                position:'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding:20,
                        lineHeight:'222',
                    }
                },

            },
            labelLine: {

                normal: {
                    show: true,
                    length:9,
                    length2:17,
                }
            },
            data: [
                {value:127541, name: '男'},
                {value: 52271, name: '女'}
            ],

        }]
    };
    chart.setOption(option);
};
sexl();
/**性别年龄(年龄)**/
function sex2(){
    var chart = echarts.init(document.getElementById('lsex2'));
    option = {
        title: {
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },

        series: [{
            type: 'pie',
            top:'-20',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],
            label: {
                position:'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding:20,
                        lineHeight:'222',
                    }
                },

            } ,labelLine: {

                normal: {
                    show: true,
                    length:9,
                    length2:17,
                }
            },
            data:[
                {value:25282, name: '30岁及以下'},
                {value: 40961, name: '31-40岁'},
                {value: 54933, name: '41-50岁'},
                {value: 45097, name: '51-60岁'},
                {value: 13540, name: '61岁及以上'}
            ],

        }]
    };
    chart.setOption(option);
};
sex2();
/**性别年龄(学历)**/
function sex3(){
    var chart = echarts.init(document.getElementById('lsex3'));
    option = {
        title: {
        },
        backgroundColor: 'rgba(255,255,255,0)',
        tooltip: {
            trigger: 'item',
        },

        series: [{
            type: 'pie',
            top:'-20',
            selectedMode: 'single',
            radius: ['40%', '58%'],
            color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],

            label: {
                position:'bottom',

                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding:20,
                        lineHeight:'222',
                    }
                },

            },
            labelLine: {

                normal: {
                    show: true,
                    length:9,
                    length2:17,
                }
            },
            data:[
                {value:50042, name: '初中及以下'},
                {value: 41213, name: '高中/中专'},
                {value: 78290, name: '专科/本科'},
                {value: 10267, name: '研究生及以上'}
            ],

        }]
    };
    chart.setOption(option);
};
sex3();

//   WEB/APP/微信访问分布饼状图
function w_pie(){
    var chart = echarts.init(document.getElementById('w_pie'));
    option = {
        title : {
            text: '',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
        },
        series : [
            {
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                color: ['#29ABE2', '#FBB03B','#4BD100'],
                data:[
                    {value:672368221, name:'WEB'},
                    {value:877554235, name:'APP'},
                    {value:22348978, name:'微信'},
                ],
                label: {
                    position:'bottom',
                    normal: {
                        formatter: '{b}\n{d}%',
                        textStyle: {
                            color: '#29ABE2',
                            fontWeight: 'bold',
                            fontSize: 14,
                            padding:20,
                            lineHeight:'222',
                        }
                    },

                },

                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chart.setOption(option);
};
w_pie();

// 党工委e支部和党员注册(省委直属党(工)委所属党支部开通e支部情况)
function makeChart11() {
    var chart = echarts.init(document.getElementById('lect'));
    option = {
        // backgroundColor: '#394056',
        title: {
            text: '省委直属党(工)委所属党支部开通e支部情况',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体',

            },
            top:'2%',
            left: '3%'
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}:{c2}%',
            axisPointer: {
                // type: 'cross',
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        calculable : true,
        grid: {
            top:'15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                // boundaryGap: false,
                axisLine: {
                    show:'false',
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                // axisLabel:{
                //     interval:0,//横轴信息全部显示
                //     color:'#fff'
                // },
                axisLabel:{
                    interval: 0,
                    fontSize: 12,
                    fontWeight: 100,
                    textStyle: {
                        color: '#fff',

                    }
                },
                data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
            },
            {
                axisPointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisTick: {
                    show: false
                },

                position: 'bottom',
                offset: 20,

            }],
        yAxis: [
            {

                type: 'value',
                min: 0,
                max: 40000,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color:'#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            {

                type: 'value',
                min: 0,
                interval:25,
                max: 100,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color:'#fff'
                    }, formatter: '{value}%'
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }
        ],
        series: [
            {
                name: '开通量',
                type: 'bar',
                barWidth:10,
                barGap:20,
                stack: 'sum',
                smooth: true,
                // symbol: 'triangle',
                symbolSize: 5,
                showSymbol: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(234,166,58, 0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(234,166,58, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#29abe2',
                    }
                },
                data: [18760, 29243, 13560, 9292, 6256, 20575, 24599, 19266, 13728, 9790,
                    8540, 4035, 19999, 14923, 13547, 11679, 11821, 6978, 3616, 2486, 3159, 452, 121
                ],

            },
            {
                name: '未开通量',
                type: 'bar',
                barWidth:10,
                barGap:20,
                smooth: true,
                stack: 'sum',
                // symbol: 'triangle',
                symbolSize: 5,
                showSymbol: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(234,166,58, 0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(234,166,58, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#9ad945',


                    }
                },
                data:[2053, 1311, 225, 139, 174, 383, 537, 119,
                    201, 266, 251, 42, 889, 530, 789, 89, 42,
                    1187, 305, 155, 2035, 246, 12
                ]
            },
            {
                itemStyle: {
                    normal: {
                        color: 'gold',
                    }
                },
                // show:true,
                name:"开通率",
                type:'line',
                yAxisIndex: 1,
                // stack: 'sum',
                // formatter:'{a2}:{c2}%',
                barWidth:10,
                smooth: true,
                data:[90.14, 95.71, 98.37, 98.53, 97.29,
                98.17, 97.86, 99.39, 98.56, 97.35, 97.14, 98.97,
                95.74, 96.57, 94.50, 99.24, 99.65, 85.46,
                92.22, 94.13, 60.82, 64.76, 90.98
                ],

            }
        ]
    };
    chart.setOption(option);
}
makeChart11();

//省委直属党(工)委所属党员注册分布情况
function makeChart12() {
    var chart = echarts.init(document.getElementById('lects'));
    option = {
        // backgroundColor: '#394056',
        title: {
            text: '省委直属党(工)委所属党员注册分布情况',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 18,
                color: '#fff',
                fontWeight:'bolder',
                fontFamily:'黑体'
            },
            left: '2%',
            top:'2%',
        },
        tooltip: {
            trigger: 'axis',
            formatter: '{a0}: {c0}<br />{a1}: {c1}<br />{a2}:{c2}%',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        grid: {
            top:'15%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            // boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            // axisLabel:{
            //     interval:0,//横轴信息全部显示
            //     color:'#fff'
            // },
            axisLabel:{
                interval: 0,
                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: '#fff',

                }
            },
            data:['济南','青岛', '淄博','枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委']
        }
            , {
                axisPointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisTick: {
                    show: false
                },

                position: 'bottom',
                offset: 20,

            }],
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 800000,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color:'#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            {
                type: 'value',
                min: 0,
                max: 100,
                interval:25,
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    formatter:'{value}%',
                    margin: 10,
                    textStyle: {
                        fontSize: 14,
                        color:'#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }
        ],
        series: [
            {
                name: '注册量',
                type: 'bar',
                smooth: true,
                barWidth:10,
                stack: 'sum',
                // symbol: 'triangle',
                symbolSize: 5,
                showSymbol: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                barGap:20,
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(36,145,192, 0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(36,145,192, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(36,145,192)',
                        // borderColor: 'rgba(36,145,192,0.27)',
                        // borderWidth: 12

                    }
                },
                data: [439370, 663187, 321753, 213775, 114574, 553989,
                    592167, 447498, 346816, 209032, 209772, 96126, 540171,
                    274490, 297846, 231726, 371500, 95321, 54361, 35218, 54664,
                    9860, 1250
                ],
            },
            {
                name: '未注册量',
                type: 'bar',
                smooth: true,
                barWidth:10,
                stack: 'sum',
                // symbol: 'triangle',
                symbolSize: 5,
                showSymbol: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },

                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(36,145,192, 0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(36,145,192, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fbb03b',
                        // borderColor: 'rgba(36,145,192,0.27)',
                        // borderWidth: 12

                    }
                },
                data: [24734, 40877, 8542, 6935, 2310, 7758, 4530,
                    31523, 29413, 11950, 10382, 1559, 34215, 17344,
                    14357, 3399, 2268, 37463, 10272, 2763, 57232, 9389, 1794
                ],
            },
            {
                itemStyle: {
                    normal: {
                        color: '#9ad945',


                    }
                },
                // show:true,
                name:"注册率",
                type:'line',
                yAxisIndex: 1,
                // stack: 'sum',
                formatter:'{b3}:{c3}'+'%',barWidth:10,
                smooth: true,
                data:[94.67, 94.19, 97.41, 96.86, 98.02,
                    98.62, 99.24, 93.42, 92.18, 94.59, 95.28,
                    98.40, 94.04, 94.06, 95.40, 98.55, 99.39,
                    71.79, 84.11, 92.73, 48.85, 51.22, 41.06
                ],
            }
        ]

    };
    chart.setOption(option);
}
makeChart12();

// w_js 活跃度等基本情况(e支部活跃度)
var myChart = echarts.init(document.getElementById('w_main'));
var w_option = {
    width:'757px',
    title:{
        text: 'e支部活跃度',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        top:"5%",
        left: '18px',
        // bottom: '80%',
    },
    tooltip : {
        trigger: 'axis',
        formatter: '{a0}: {c0}<br />{a1}: {c1}%',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data :  ['济南','青岛','淄博' ,'枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜','临沂','德州','聊城','滨州','菏泽','省直\n机关\n工委','省委\n教育\n工委','省国\n资委\n党委','胜利\n油田\n党委','齐鲁\n石化\n党委','黄三\n角党\n工委'],
            axisLabel:{
                interval: 0,
                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: '#fff',

                }
            }

        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        {
            type: 'value',
            min: 0,
            interval:20,
            max: 100,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color:'#fff'
                }, formatter: '{value}%'
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'活跃数',
            type:'bar',
            stack: 'sum',
            data:[5475, 9193, 10564, 8267, 3247, 10429, 12058, 5029, 7543, 6453,
                3478, 1465, 13981, 8922, 2332, 8650, 4626, 1116, 691,
                969, 432, 25, 0
            ],
            barWidth:10,
            barGap:20
        },
        {
            itemStyle: {
                normal: {
                    color: '#9ad945',
                }
            },
            name:"活跃率",
            type:'line',
            yAxisIndex: 1,
            barWidth:10,
            smooth: true,
            data:[26.31, 30.09, 76.63, 87.66,
            50.50, 49.76, 47.97, 25.94, 54.15,
            64.17, 39.56, 35.93, 66.93, 57.74,
            16.27, 73.50, 39.00, 13.67, 17.62,
            36.69, 8.32, 3.58, 0.00
            ],
        }
    ]
};
w_option.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
myChart.setOption(w_option);

//e支部详情（济南基层党支部开展活动情况(单位:次)）
var u_myChart1 = echarts.init(document.getElementById('w_maintt'));
var u_option = {
    width:'757px',
    title:{
        text: '济南基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[11264	,11378,	7869,	8808,	1697,	5948,	78,	1768,21972,	35,		91,83,],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart1.setOption(u_option);

//e支部详情（青岛基层党支部开展活动情况(单位:次)）
var u_myChart2 = echarts.init(document.getElementById('w_maintt2'));
var u_option2 = {
    width:'757px',
    title:{
        text: '青岛基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[20114,13047,	8680,	14887,	4588,	9086,	65,	3734,	28365,9,	9,	22
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option2.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart2.setOption(u_option2);

//e支部详情（淄博）
var u_myChart3 = echarts.init(document.getElementById('w_maintt3'));
var u_option3 = {
    width:'757px',
    title:{
        text: '淄博基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[31694,	18942,	14607,	15760,	3634,	14965,	355,	4107,	68564,	77,62	,179
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option3.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart3.setOption(u_option3);

//e支部详情（枣庄）
var u_myChart4 = echarts.init(document.getElementById('w_maintt4'));
var u_option4 = {
    width:'757px',
    title:{
        text: '枣庄基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[31182,	18075,	7783,	14845,	4323,	21725,	121,	3204,	66922,	22,21,		39

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option4.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart4.setOption(u_option4);
//e支部详情（东营）
var u_myChart5 = echarts.init(document.getElementById('w_maintt5'));
var u_option5 = {
    width:'757px',
    title:{
        text: '东营基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[10842,	4327,	2220,	4581,	2140	,7610,	103	,2093,	20296,	32,37,42

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option5.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart5.setOption(u_option5);
//e支部详情（烟台）
var u_myChart6 = echarts.init(document.getElementById('w_maintt6'));
var u_option6 = {
    width:'757px',
    title:{
        text: '烟台基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[78133,	50365,	49813,	26867,	2927,	12676,	714,	5152,	72252,	47,69,109
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option6.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart6.setOption(u_option6);
//e支部详情（潍坊）
var u_myChart7 = echarts.init(document.getElementById('w_maintt7'));
var u_option7 = {
    width:'757px',
    title:{
        text: '潍坊基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[46259	,25001,	11666,	19667,	5536,	18759,	95,3384	,38159,	44,82,	107

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option7.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart7.setOption(u_option7);
//e支部详情（济宁）
var u_myChart8 = echarts.init(document.getElementById('w_maintt8'));
var u_option8 = {
    width:'757px',
    title:{
        text: '济宁基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[10991,	6635,	2959,	5288,	1443,	4737,	129,	1467,	18752,	47,46,	107

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option8.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart8.setOption(u_option8);
//e支部详情（泰安）
var u_myChart9 = echarts.init(document.getElementById('w_maintt9'));
var u_option9 = {
    width:'757px',
    title:{
        text: '泰安基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[20996,	16795,	13282,	8863,	3255,	9027,	482,	2688,	29244,	45,40,		94

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option9.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart9.setOption(u_option9);
//e支部详情（威海）
var u_myChart10 = echarts.init(document.getElementById('w_maintt10'));
var u_option10 = {
    width:'757px',
    title:{
        text: '威海基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[24466,	24070,	9294,	22923,	1314,	7573,	80,	2561,	47749,	1,1,4

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option10.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart10.setOption(u_option10);
//e支部详情（日照）
var u_myChart11 = echarts.init(document.getElementById('w_maintt11'));
var u_option11 = {
    width:'757px',
    title:{
        text: '日照基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[6486,	3025,	2144,	3300,	1384,	4620,	80,	1010,	13249,	25,11,		66

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option11.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart11.setOption(u_option11);
//e支部详情（莱芜）
var u_myChart12 = echarts.init(document.getElementById('w_maintt12'));
var u_option12 = {
    width:'757px',
    title:{
        text: '莱芜基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[4158,	4312,2253	,2706,	889	,1610,	96	,570	,4599,	33	,	38,67

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option12.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart12.setOption(u_option12);
//e支部详情（临沂）
var u_myChart13 = echarts.init(document.getElementById('w_maintt13'));
var u_option13 = {
    width:'757px',
    title:{
        text: '临沂基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[72825,	34819,	19602,	24606,	6246,	28241,	316	,5099,	58970,	126,186,	211
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option13.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart13.setOption(u_option13);
//e支部详情（德州）
var u_myChart14 = echarts.init(document.getElementById('w_maintt14'));
var u_option14 = {
    width:'757px',
    title:{
        text: '德州基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[10734	,15063,	3274,	3463,	1512	,9590,	75,	2797,	44776,	108,95,	129

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option14.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart14.setOption(u_option14);
//e支部详情（聊城）
var u_myChart15 = echarts.init(document.getElementById('w_maintt15'));
var u_option15 = {
    width:'757px',
    title:{
        text: '聊城基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[3522,	2051,	1811,	1900,	331	,1615,	35,	488,	4258,	20,	8,18

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option15.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart15.setOption(u_option15);
//e支部详情（滨州）
var u_myChart16 = echarts.init(document.getElementById('w_maintt16'));
var u_option16 = {
    width:'757px',
    title:{
        text: '滨州基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[12610,	5994,	2752,	5758,	4505,	11773,	71,	3176,	77977,	8,		2,15

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option16.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart16.setOption(u_option16);
//e支部详情（菏泽）
var u_myChart17 = echarts.init(document.getElementById('w_maintt17'));
var u_option17 = {
    width:'757px',
    title:{
        text: '菏泽基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[9085,	9476,	10900,	4397,	987	,4681,	116,	1630,	14701,	6,	 7,15,],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option17.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart17.setOption(u_option17);
//e支部详情（省直机关）
var u_myChart18 = echarts.init(document.getElementById('w_maintt18'));
var u_option18 = {
    width:'757px',
    title:{
        text: '省直机关工委基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[5010	,2198,	1438,	2171,	330,	1728,	16,	583,	5450,	4,	3,8
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option18.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart18.setOption(u_option18);
//e支部详情（教育）
var u_myChart19 = echarts.init(document.getElementById('w_maintt19'));
var u_option19 = {
    width:'757px',
    title:{
        text: '省委教育工委基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[2721,	983,	154,	774,	269	,1070,	78	,354,	1644,	3,1,	3

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option19.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart19.setOption(u_option19);
//e支部详情（国资委）
var u_myChart20 = echarts.init(document.getElementById('w_maintt20'));
var u_option20 = {
    width:'757px',
    title:{
        text: '省国资委党委基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[5640	,3349,	1729,	2802	,321,	1575,	47,	552,	8204,	4,2,6
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option20.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart20.setOption(u_option20);
//e支部详情（胜利油田）
var u_myChart21 = echarts.init(document.getElementById('w_maintt21'));
var u_option21 = {
    width:'757px',
    title:{
        text: '胜利油田党委基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[1617,	2352,	539	,901,	132,	285,	0,	197,	810,	0,	0,	0

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option21.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart21.setOption(u_option21);
//e支部详情（齐鲁石化）
var u_myChart22 = echarts.init(document.getElementById('w_maintt22'));
var u_option22 = {
    width:'757px',
    title:{
        text: '齐鲁石化党委基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[54,	67,	85,	32,	6,	8,	0,	4,	19	,0	,0,	0

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option22.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart22.setOption(u_option22);
//e支部详情（黄三角）
var u_myChart23 = echarts.init(document.getElementById('w_maintt23'));
var u_option23 = {
    width:'757px',
    title:{
        text: '黄三角党委基层党支部开展活动情况(单位:次)',
        top:'20px',
        left:"30px",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        height:'120px',
        top:'70px',
        left:'90px',
        right:'50px',
        bottom:'80px'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {show: false, type: ['line', 'bar']},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data:['支部\n党员\n大会',	'支部\n委员\n会',	'党小\n组会','党课'	,'民主\n生活\n会','组织\n生活\n会','谈心\n谈话','民主\n评议\n党员','主题\n党日','服务\n发展','服务\n党员','服务\n群众'	],
            axisLabel:{
                color:'#fff',
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    color: '#57617B',//左边线的颜色
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'组织生活数量',
            type:'bar',
            data:[0,	0,	0,	0	,0,	0,	0	,0	,0,	0,	0,	0
            ],
            barWidth:10,
            barGap:20
        }
    ]
};
u_option23.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
u_myChart23.setOption(u_option23);

//注册党员基本情况    (年龄)
var myChart2 = echarts.init(document.getElementById('w_mains'));
var w_option2 = {
    title : {
        text: '注册党员基本情况',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        left: '18px',
        top:"5%",

    },
    tooltip : {
        trigger: 'item'
    },
    grid:{
        left: '3%',
        containLabel: true
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],

            },
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : false,
    series : [
        {
            color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],
            name:'年龄',
            type:'pie',
            radius : ['40%', '55%'],
            label : {
                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 12,
                        padding:20,
                        lineHeight:'222',
                    }
                },
            },
            labelLine: {

                normal: {
                    show: true,
                    length:8,
                    length2:8,
                }
            },
            data:[
                {value:  584878, name:'30岁及以下',},
                {value:1066996, name:'31-40岁'},
                {value:1331586, name:'41-50岁'},
                {value:1265076, name:'51-60岁'},
                {value:1925930, name:'61岁及以上'},
            ]

        }
    ]
};
myChart2.setOption(w_option2);

//注册党员基本情况    (性别)
var myChart3 = echarts.init(document.getElementById('w_mainer'));
var w_option3 = {
    tooltip : {
        trigger: 'item'
    },
    toolbox: {
        show : true,

    },
    calculable : true,
    series : [
        {
            color:['#39b54a','#00aafa'],
            name:'性别',
            type:'pie',
            radius : ['55%', '70%'],
            label : {
                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 14,
                        padding:20,
                        lineHeight:'222',
                    }
                },
            },
            itemStyle : {
                normal : {
                    label : {
                        show : true
                    },
                    labelLine : {
                        length:1,
                        length2:5,
                        show : true,
                    }
                }
            },
            data:[
                {value:4835514, name:'男'},
                {value:1338952, name:'女'}
            ]
        }
    ]
};
myChart3.setOption(w_option3);

//注册党员基本情况    (学历)
var myChart4 = echarts.init(document.getElementById('w_mainers'));
var w_option4 = {
    tooltip : {
        trigger: 'item'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '15%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548
                    }
                }
            },
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    series : [
        {
            color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],
            name:'学历',
            type:'pie',
            radius : ['40%', '55%'],
            label : {
                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 12,
                        padding:10,
                        lineHeight:'222',
                    }
                },
            },
            itemStyle : {
                normal : {

                    labelLine : {
                        show : true,
                        length:5,
                        length2:7,

                    }
                }
            },
            data:[
                {value:1994225, name:'初中及以下',},
                {value:1516855, name:'高中/中专'},
                {value:2424542, name:'专科/本科'},
                {value:238844, name:'研究生及以上'},
            ]
        }
    ]
};
myChart4.setOption(w_option4);



// zhixue
var myChart5 = echarts.init(document.getElementById('w_main11'));
var w_option5 = {

    title:{
        text: 'e支部活跃度',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        top:"5%",
        left: '18px',

    },
    tooltip : {
        trigger: 'axis'
    },
    dataZoom: [{
        show: false,
    }, {
        type: 'inside'
    }],
    calculable : true,
    xAxis : [

        {
            type : 'category',
            data :  ['南部山区','中国重汽','市规划局','济南卷烟厂','公安局', '历下区','天桥区','国资委','高新区','人资社保' ,'民政局','平阴县','体育局','城市更新局','市中区' ,'产业发展投资集团','经信委','槐荫区','市直机关','卫生和计划生育委员会' ,'章丘区','商河县','长清区','历城区','广播电台委员会' ,'税务局','教育局','济阳县','华电章丘发电有限公司','城市管理局','城市投资集团'],
            axisLabel:{

                fontSize: 12,
                fontWeight: 100,
                textStyle: {
                    color: '#fff',

                }
            },
            dataZoom : [{
                show: false,
            }, {
                type: 'inside'
            }],
        },

    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                color:'#fff'
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }

    ],
    series : [
        {
            name:'活跃数',
            type:'bar',
            data:[
                3   ,
                4346,
                1   ,
                1   ,
                1252,
                2297,
                2036,
                372 ,
                18  ,
                21  ,
                84  ,
                786 ,
                40  ,
                17  ,
                1122,
                79  ,
                6   ,
                1860,
                194 ,
                5   ,
                1999,
                2913,
                26  ,
                1753,
                10  ,
                697 ,
                16  ,
                3045,
                1   ,
                209 ,
                2976,

            ],
            barWidth:10,
            barGap:20
        }
    ]
};
w_option5.series[0].itemStyle={
    normal: {
        barBorderRadius:15,
        color: function(params) {

            var index = params.dataIndex;
            var alternateNumber = 2;

            var newColor="";
            var colorList = ['#fbb03b','#29abe2'];

            if(index < alternateNumber){

                newColor = colorList[index];

            }else{

                var rowNumber=Math.floor(index/alternateNumber);

                newColor = colorList[index-rowNumber*alternateNumber];
            }
            return newColor
        }
    }
};
myChart5.setOption(w_option5);
var myChart6 = echarts.init(document.getElementById('w_mains11'));
var w_option6 = {
    title : {
        text: '注册党员基本情况',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: '#fff',
            fontWeight:'bolder',
            fontFamily:'黑体'
        },
        top:"8%",
        left: '18px',

    },
    tooltip : {
        trigger: 'item'
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],

            },
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : false,
    series : [
        {
            color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],
            name:'年龄',
            type:'pie',
            radius : ['40%', '55%'],
            label : {
                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 12,
                        padding:20,
                        lineHeight:'222',
                    }
                },
            },

            labelLine: {

                normal: {
                    show: true,
                    length:8,
                    length2:8,
                }
            },

            data:[
                {value:48688, name:'30岁及以下',},
                {value:84540, name:'31-40岁'},
                {value:86611, name:'41-50岁'},
                {value:79483, name:'51-60岁'},
                {value:139468, name:'61岁及以上'},
            ]
        }
    ]
};
myChart6.setOption(w_option6);

var myChart7 = echarts.init(document.getElementById('w_mainer11'));
var w_option7 = {
    tooltip : {
        trigger: 'item'
    },
    toolbox: {
        show : true,

    },
    calculable : true,
    series : [
        {
            color:['#39b54a','#00aafa'],
            name:'性别',
            type:'pie',
            radius : ['55%', '70%'],
            label : {
                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 12,
                        padding:10,
                        lineHeight:'222',
                    }
                },
            },
            itemStyle : {
                normal : {
                    label : {
                        show : true
                    },
                    labelLine : {
                        length:3,
                        length2:5,
                        show : true,
                    }
                }
            },
            data:[
                {value:320189, name:'男'},
                {value:118601, name:'女'}
            ]
        }
    ]
};

myChart7.setOption(w_option7);

var myChart8 = echarts.init(document.getElementById('w_mainers11'));
var w_option8 = {
    tooltip : {
        trigger: 'item'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            magicType : {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '15%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548
                    }
                }
            },
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    calculable : true,
    series : [
        {
            color:['#00aafa','#fbb03b','#8cc63f','#ed1c24','#ff00ff'],
            name:'学历',
            type:'pie',
            radius : ['40%', '55%'],
            label : {
                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#29ABE2',
                        fontWeight: 'bold',
                        fontSize: 12,
                        padding:20,
                        lineHeight:'222',
                    }
                },
            },
            itemStyle : {
                normal : {

                    labelLine : {
                        show : true,
                        length:1,
                        length2:7,

                    }
                }
            },
            data:[
                {value:84868, name:'初中及以下',},
                {value:56402, name:'高中'},
                {value:77293, name:'专科'},
                {value:648, name:'本科'},
                {value:17200, name:'研究生及以上'},
            ]
        }
    ]
};

myChart8.setOption(w_option8);


