window.onload=function(){
	/*var tabs=document.getElementsByClassName("tab");
	function tab(obj){
		var oUl=obj.getElementsByClassName("tabList")[0];
		var aLi=oUl.getElementsByTagName("li");
		
		var otabCant=obj.getElementsByClassName("tabCant")[0];
		var aTab=otabCant.getElementsByClassName("tabItem");
		
		var timer=null;
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onclick=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="";
					aTab[j].style.display="none";
				};
				this.className="ac";
				aTab[this.index].style.display="block";
				n=this.index;
			};	
		};
		timer=setInterval(run,2000)
		var n=0;
		function run(){
			n++;	
			if(n==aLi.length){
				n=0
			};
			for(var i=0;i<aLi.length;i++){
				aLi[i].className="";
				aTab[i].style.display="none";
			};
			aLi[n].className="ac";
			aTab[n].style.display="block"; 
		};
			obj.onmouseenter=function(){
				clearInterval(timer);
			};
			obj.onmouseleave=function(){
				timer=setInterval(run,2000);
			};
		
	};	
	tab(tabs[0]);
*/


	var oMenu=document.getElementById("jdMenu");
	var aLi=oMenu.getElementsByTagName("li");
	var oMenuCont=document.getElementById("menuCont");
	var a_cate_part=oMenuCont.getElementsByClassName("cate_part");
	var leave_menu=null;
	//console.log(aLi.length)
	function del_li_ac(){
		for(var i=0; i<aLi.length; i++){
			aLi[i].className="";
		};
	};
	for(var i=0; i<aLi.length; i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			oMenuCont.style.display="block";
			del_li_ac();
			this.className="active";
			
			for(var j=0; j<a_cate_part.length; j++){
				a_cate_part[j].style.display="none";
			}
			
			a_cate_part[this.index].style.display="block";
		}
		
		aLi[i].onmouseout=function(){
			
			oMenuCont.style.display="none";
			del_li_ac();
			
		};
	};
	
	oMenuCont.onmouseover=function(ev){
		this.style.display="block";
	}
	
	oMenuCont.onmouseout=function(){
		del_li_ac();  
		this.style.display="none";
	}
	
}
$(function(){
	
	//轮播图
	var n=0;
	var timer;
	$('.tabList li').click(function(){
		var index=$(this).index();
		$('.tabList li').removeClass('ac');
		$(this).addClass('ac');
		$('.tabCant').children('div').fadeOut();
		$('.tabCant').children('div').eq(index).fadeIn();
		
	});
	function run(){
		timer=setInterval(function(){
			n++;
			if(n>6){
				n=0;
			};
			$('.tabList li').removeClass('ac');
			$('.tabList li').eq(n).addClass('ac');
			$('.tabCant').children('div').fadeOut();
			$('.tabCant').children('div').eq(n).fadeIn();		
		},3000);
	};
	run();
	$('.tabCant').mouseenter(function(){
			clearInterval(timer);
			n=$(this).index();
			
	});
		
	$('.tabCant').mouseleave(function(){
			run();
	});

	//楼层切换	
/*	 $(window).scroll(function(){	 
	 	var d_h = $(document).height() - ( $(document).height() - $(".main-floor .yilou").height() * $(".main-floor .yilou").length );
	 	
	 	var scrollTop=$(window).scrollTop();	 
	 	
	 	//console.log( $(window).scrollTop() )
	 	var i = parseInt( (scrollTop + d_h) / $(".main-floor .yilou").height() );	 
	 	//$(".lou-c-gund li").removeClass("ac");
	 	$(".lou-c-gund li").eq(i).addClass("ac");
	 	
	 	if(scrollTop>1400){
	 		$(".LocationFloorList").show();
	 	}else{
	 		$(".LocationFloorList").hide();
	 	}
	 });
	 $(".LocationFloorList li").each(function(i){
	 	$(this).click(function(){	 			 		
	 		$('body,html').animate({'scrollTop':$(".main-floor").children('div').eq(i).offset().top},1000);
	 		$(".LocationFloorList li").removeClass("ac");
	 		$(this).addClass("ac");	 		
	 	})
	 });*/
	
	
	//楼层切换
 $(window).scroll(function(){
	if($(window).scrollTop()>1500){
		$('.LocationFloorList').fadeIn();
	}else{
		$('.LocationFloorList').fadeOut();
	};
	$('.yilou').each(function() {
        var st=$(window).scrollTop()+$(window).height()/2;
		var h=$(this).offset().top;
		if(h<st){
			var index=$(this).index();
			$('.LocationFloorList li').eq(index).addClass('ac').siblings().removeClass('ac');
		}
		
    });
	
});
$('.LocationFloorList li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac');
	var index=$(this).index();
	//找到对应楼层的top值,让滚动条滚动到这个值
	var t=$('.yilou').eq(index).offset().top;
	$('body,html').animate({"scrollTop":t});

});
 
	 
	 
	 
	 //12宫格的切换
	 var show=true;
	 $('.ul1_item').hover(
	 	function(){
	 		if(show){
	 			$(this).addClass('ban_a2').siblings().removeClass('ban_a2');
	 			$('.ban-mid').addClass('ban_mid_a8')
	 		}	 	
	 	},
	 	function(){
	 		show=true;
	 	}
	 );
	 $('.closeBtn').click(function(){
	 	$('.ban-mid').removeClass('ban_mid_a8');
	 	$('.ul1 li').removeClass('ban_a2');
	 	$('.ul1 li:last').addClass('ban_a2');
		show=false;
	 })
	 
	 
	 
	//主页楼书选项卡切换
	$('.p1 .p-nav li').mouseover(function(){
		var index=$(this).index();
		$('.concant').children('div').hide();
		$('.concant').children('div').eq(index).show();
	});
	
	//图片的左右移动
	$('.pic-c2').mouseenter(function(){
		$(this).find('.pic_8').stop().animate({'left':'90px'},200)
	})
	$('.pic-c2').mouseleave(function(){
		$(this).find('.pic_8').stop().animate({'left':'98px'},200)
	});
	
	
	$('.main-fl').mouseenter(function(){
		$(this).find('.pic_fl').stop().animate({'left':'34px'},200)
	})
	$('.main-fl').mouseleave(function(){
		$(this).find('.pic_fl').stop().animate({'left':'40px'},200)
	});
	
	
	$('.hp1').mouseenter(function(){
		$(this).find('.hp3').stop().animate({'left':'54px'},200)
	})
	$('.hp1').mouseleave(function(){
		$(this).find('.hp3').stop().animate({'left':'60px'},200)
	});
	
	
	 //广告的上下切换
	 $('.guanga').animate({'margin-top':'0px'},3000,function(){
	 	$('.guanga').delay(3000).animate({'margin-top':'-106px'},2000)
	 });
	 
	 //新闻自动滚动
	 var c=0;
	 setInterval(function(){
	 	c++;
	 	if(c==6){
	 		$('.b-top-list1 ul').css({'top':'0px'});
	 		c=1;
	 	}
	 	var t=c * -25;
	 	$('.b-top-list1 ul').animate({'top':t + 'px'},500)
	 },1000)
});
	


