window.onload = function () {
    //社区下拉栏
    $('#community').mouseenter(function () {
        $('#comm').show();
    });
    $('#community').mouseleave(function () {
        $('#comm').hide();
    });

    //商城下拉栏
    $('#sc').mouseenter(function () {
        $('#sc_mall').show();
    });
    $('#sc').mouseleave(function () {
        $('#sc_mall').hide();
    });

    //酒店民宿下拉栏
    $('#hotel').mouseenter(function () {
        $('#hot').show();
    });
    $('#hotel').mouseleave(function () {
        $('#hot').hide();
    });

    //独家深度下拉栏
    $('#djsd').mouseenter(function () {
        $('#djsd_xl').show();
    });
    $('#djsd').mouseleave(function () {
        $('#djsd_xl').hide();
    });

    //穷游APP下拉栏
    $('#app').mouseenter(function () {
        $('#app_xl').show();
    });
    $('#app').mouseleave(function () {
        $('#app_xl').hide();
    });

    //导航栏输入框
    $('#search_ipt').mouseenter(function () {
        $('#ipt-search').show(function () {
            $('#search_ipt').hide();
        });
    });
    $('#ipt-search').mouseout(function () {
        $('#ipt-search').hide(function () {
            $('#search_ipt').show();
        });
    });

    // 背景滚动图
    // var index = 0;
    // var $lis = $('#header_bg li');
    // $('#arrRight').click(function () {
    //     if(index === $lis.length - 1) {
    //         index = -1;
    //     }
    //     index++;
    //     $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    // });
    // $('#arrLeft').click(function () {
    //     if(index === 0) {
    //         index = $lis.length;
    //     }
    //     index--;
    //     $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    // });

    // var index = 0;
    // var $lis = $('#b_bigbox li');
    // $('.arrow_right').click(function () {
    //    if (index === $lis.length - 1) {
    //        index = -1;
    //    }
    //    index ++;
    //    $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    // });
    // $('.arrow_left').click(function () {
    //     if (index === 0) {
    //         index = $lis.length;
    //     }
    //     index--;
    //     $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    // });
    // var b_bigbox = document.getElementById('b_bigbox');
    // var timer = null;
    // b_bigbox.onmouseout = function () {
    //     timer = setInterval(function () {
    //         if (index === $lis.length-1) {
    //             index = -1;
    //         }
    //         index++;
    //         $lis.eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    //     },2000)
    // };
    // b_bigbox.onmouseover = function () {
    //     clearInterval(timer);
    // };
    $('#b_bigbox').scrollBanner({
        images:[
            {src:"images/banner1.jpg",title:"【美国游记攻略】海鲜、日落游艇、撸猫，解锁不一样的美国热带风情",href:"#"},
            {src:"images/banner2.jpg",title:"《俯瞰世界》｜航拍东南亚",href:"#"},
            {src:"images/banner3.jpg",title:"【英国游记攻略】苏格兰Islay岛Whisky品鉴完整攻略",href:"#"},
            {src:"images/banner4.jpg",title:"【意大利游记攻略】是层层叠叠的历史，还是恬恬淡淡的生活？",href:"#"}
        ],
        scrollTime:3000,
        bannerHeight:'640px',
        iconColor:'#fff',
        iconHoverColor:'orange',
        iconPosition : 'center'
    });





    
    //背景上的搜索框
    $('#place').click(function () {
        $('#place_item').css('display', 'block').siblings().css('display', 'none');
    });
    $('#place_icon').css('color','#2ed685');
    $('#place').click(function () {
        $('#place_icon').css('color','#2ed685').parent().siblings().children('i').css('color','#fff');
    });

    $('#plan').click(function () {
        $('#plan_item').css('display', 'block').siblings().css('display', 'none');
    });
    $('#plan').click(function () {
        $('#plan_icon').css('color','#2ed685').parent().siblings().children('i').css('color','#fff');
    });

    $('#zk').click(function () {
        $('#zk_item').css('display', 'block').siblings().css('display', 'none');
    });
    $('#zk').click(function () {
        $('#zk_icon').css('color','#2ed685').parent().siblings().children('i').css('color','#fff');
    });

    $('#tab_hotel').click(function () {
        $('#hotel_item').css('display', 'block').siblings().css('display', 'none');
    });
    $('#tab_hotel').click(function () {
        $('#hotel_icon').css('color','#2ed685').parent().siblings().children('i').css('color','#fff');
    });

    // 目的地栏的点击
    $('#place-item-ipt').focus(function () {
        $('#hotCity1').css('display','block');
    });
    $('#place-item-ipt').blur(function () {
        $('#hotCity1').css('display','none');
    });

    //买折扣的点击
    $('#zk-item-ipt').focus(function () {
        $('#hotCity2').css('display','block');
    });
    $('#zk-item-ipt').blur(function () {
        $('#hotCity2').css('display','none');
    });
    // 酒店栏的点击
    $('#hotel-item-ipt').focus(function () {
        $('#hotCity1').css('display','block');
    });
    $('#hotel-item-ipt').blur(function () {
        $('#hotCity1').css('display','none');
    });

    // 今日推荐栏
    $('#today_list>ul>li').mouseenter(function () {
        $(this).css('box-shadow',"0 0 5px rgba(0,0,0,.2)");
    });
    $('#today_list>ul>li').mouseleave(function () {
        $(this).css('box-shadow','');
    });

    // 热门话题轮播图
    $('#ht_btn_1').mouseenter(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('#ht_list_1').stop().fadeIn(1000).css('display','block').siblings().stop().fadeOut(1000).css('display','none');
    });

    $('#ht_btn_2').mouseenter(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('#ht_list_2').stop().fadeIn(1000).css('display','block').siblings().stop().fadeOut(1000).css('display','none');
    });
    $('#ht_btn_3').mouseenter(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('#ht_list_3').stop().fadeIn(1000).css('display','block').siblings().stop().fadeOut(1000).css('display','none');
    });
    $('#ht_btn_4').mouseenter(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('#ht_list_4').stop().fadeIn(1000).css('display','block').siblings().stop().fadeOut(1000).css('display','none');
    });


    //免费体验栏目
    $('#free_l_bottom').mouseenter(function () {
        $(this).css('box-shadow',"0 0 5px rgba(0,0,0,.2)");
    });
    $('#free_l_bottom').mouseleave(function () {
        $(this).css('box-shadow',"");
    });
    // 特别策划切换图片
    $('#dqyxs').mouseover(function () {
        $(this).parent('.free-r-middle-list').siblings().children('#txt_1').stop().fadeIn(1000).css('display','block').siblings().stop().fadeOut(1000).css('display','none');
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('#qstory').mouseover(function () {
        $(this).parent('.free-r-middle-list').siblings().children('#txt_2').stop().fadeIn(1000).css('display','block').siblings().stop().fadeOut(1000).css('display','none');
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('#qy').mouseover(function () {
        $(this).parent('.free-r-middle-list').siblings().children('#txt_3').stop().fadeIn(1000).css('display','block').siblings().stop().fadeOut(1000).css('display','none');
        $(this).addClass('active').siblings().removeClass('active');
    });

    // 热门游记列表阴影
    $('.ht-list-1 ul li').mouseenter(function () {
        $(this).css('box-shadow',"0 0 5px rgba(0,0,0,.2)");
    });
    $('.ht-list-1 ul li').mouseleave(function () {
        $(this).css('box-shadow',"");
    });
    $('.ht-more a').mouseenter(function () {
        $(this).css('box-shadow',"0 0 5px rgba(0,0,0,.2)");
    });
    $('.ht-more a').mouseleave(function () {
        $(this).css('box-shadow',"");
    });

    //穷游商城栏目查看更多折扣阴影
    $('.qymall-lookMore a').mouseenter(function () {
        $(this).css('box-shadow',"0 0 15px rgba(0,0,0,.2)");
    });
    $('.qymall-lookMore a').mouseleave(function () {
        $(this).css('box-shadow',"");
    });

    //免费体验倒计时
    var startTime = new Date('2018/9/23');
    setInterval(function () {
        var nowTime = new Date();
        var time = startTime - nowTime;
        var day = parseInt(time / 1000 / 60 / 60 / 24);
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60);
        var seconds = parseInt(time / 1000 % 60);
        $('#timespan').html(day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒");
    },1000);

    
};





