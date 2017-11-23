/**
 * Created by V_LIU on 2017/11/20.
 */
window.onload = function () {
    $("[class^='csjContest']").find(".head").children("img").each(function (i, e) {
        $(e).parent().css("height", $(e).css("height"));
    });

    $(window).on("scroll", function (e) {
        if ($(window).width() > 768) {
            $("html").scrollTop() > 0 ?
                $(".csjContest-nav").addClass("scroll-nav").find(".navbar-brand img").attr("src", "img/new-navlogo.png")
                :
                $(".csjContest-nav").removeClass("scroll-nav").find(".navbar-brand img").attr("src", "img/navlogo.jpg")
        }
    })

    var intro_text =[
        {
            h3:"2018年大赛",
            h5:"【中国48H PreViz视效预览大赛】",
            p:"在2017年举办了5个大区大赛的基础上，2018年【中国48H PreViz视效预览大赛】将组织国内十个赛区（涵盖25个省市自治区）的200所大专院校进行比赛，每个赛区的前三强队伍将直接获得进入全国总决赛资格，共同角逐总冠军及丰厚奖金。",
            bg:"../img/intro-bg1.png",
            bgc:"#f24c59"
        },
        {
            h3:"发展历程",
            h5:"【中国48H PreViz视效预览大赛】",
            p:"始于2014年，至今已经成功举办了四届。该项赛事自创办以来，在国内已累计超过100所高校与职业院校，近千名师生共同参与，目前大赛已成为国内动漫学界与业界最大规模的PreViz视效预览活动！",
            bg:"../img/intro-bg2.png",
            bgc:"#a8cd8a"
        },
        {
            h3:"48H视效预览动画大赛",
            h5:"【中国48H PreViz视效预览大赛】",
            p:"是一个以3D动画技能、导演技巧和故事创意为创作核心的动画影片限时竞赛，旨在通过比赛考察和测评参赛选手动画制作技术的综合应用能力并提供给选手们一个全国性的作品展示平台；通过竞赛影响和带动专业院校对于动画技术人才培养模式的创新并进一步向更加专业化方向发展。",
            bg:"../img/intro-bg3.png",
            bgc:"#e0be7f"
        },
        {
            h3:"大赛背景",
            h5:"【中国48H PreViz视效预览大赛】",
            p:"为推动中国动漫文化产业的资源整合、专业人才培养、技术创新与发展，延伸产业链条，推进跨区域、跨行业、跨所有制发展，全力推动我国创意文化产业的繁荣和发展。北京超视界科技有限公司在快速动漫技术应用最为广泛的视效预览（PreViz）领域，推出了全国48小时大赛。",
            bg:"../img/intro-bg4.png",
            bgc:"#f79e9e"
        }
    ]

    var oldSwiper = new Swiper('.older-swiper', {
        autoplay: 5000,//
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onTransitionStart: function (swiper) {
            $(".csjContest-older .letter-box p").each(function (i, e) {
                $(this).data("index") == swiper.activeIndex ?
                    $(this).show()
                    :
                    $(this).hide();
            });
        }
    });
    

    if ($(window).width() > 768) {
        $(".csjContest-older .text-box").css("height", $(".banner-box").height())
        $(".csjContest-intro .right").css("height", $(".csjContest-intro .row .left").height() + 10)
        var mySwiper2 = new Swiper(".intro-head-swiper", {
            
        })
        var mySwiper1 = new Swiper(".intro-swiper", {
            //autoplay: 5000,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            slidesPerView: "auto",
            centeredSlides: true,
            slideToClickedSlide: true,
            onTransitionStart: function (swiper) {
                $(".csjContest-intro .letter-box .letter").each(function (i, e) {
                    $(this).data("index") == swiper.activeIndex ?
                        $(this).show()
                        :
                        $(this).hide();
                });
                $(".csjContest-intro .intro-box").children().each(function (i, e) {
                    if (!$(e).data("html")) {
                        return
                    }
                    $(e).html(intro_text[swiper.activeIndex][$(this).data("html")]);
                }).end().parent().css({
                    "background":"url("+intro_text[swiper.activeIndex]['bg']+") no-repeat 180px 170%",
                    "background-color":intro_text[swiper.activeIndex]["bgc"]
                })
                if ($(window).width() > 1200) {
                    $(".csjContest-intro .swiper-slide .img-box").removeClass("col-xs-6").addClass("col-xs-12") && $(".csjContest-intro .swiper-slide-active .img-box").removeClass("col-xs-12").addClass("col-xs-6");
                } else {
                    $(".csjContest-intro .swiper-slide .img-box").removeClass("col-xs-6").addClass("col-xs-12")
                }
            }
        })
        mySwiper2.params.control = mySwiper1;
        mySwiper1.params.control = mySwiper2;
    } else {
        $(".csjContest-nav").removeClass("navbar-fixed-top");
        $(".csjContest-video .row").find(".title-box").prependTo(".csjContest-video .row");
        var mySwiper2 = new Swiper(".intro-head-swiper", {
            loop:true,
            autoplay:5000,
            slidesPerView: "auto",
            slidesPerView: "auto",
            centeredSlides: true,
            slideToClickedSlide: true
        })
    }
};