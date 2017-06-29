
$(function(){	
	var n=1;
	//放大镜效果  bigpic--大图；hugebig---最大图 旁边隐藏的图片
	function fangdaj(bigpic,hugebig){
			bigpic.mousemove(function(ev){
			var l=ev.pageX-$(this).offset().left-$('#zoom').width()/2;
			var t=ev.pageY-$(this).offset().top-$('#zoom').height()/2;
			if(l<0){
				l=0;
			};
			if(t<0){
				t=0;
			}
			var max_l=$(this).width()-$('#zoom').width();
			var max_t=$(this).height()-$('#zoom').height();
			if(l>max_l){
				l=max_l;
			}
			if(t>max_t){
				t=max_t;
			}
			$('#zoom').show().css({"left":l,"top":t});
			hugebig.find('img').show().css({"left":-l*2.3,"top":-t*2.3})
		});
		bigpic.mouseleave(function(){
			$('#zoom').hide()
			hugebig.find('img').hide();
		});
	
		//循环遍历放大镜的图片
		$(".m-b-pic img").each(function(i){
			$(".m-b-pic img").eq(i).mouseover(function(){
				hugebig.find('img').attr("src", "images/0"+(i+1)+"bigbig.jpg");	
				bigpic.find('img').attr("src", "images/0"+(i+1)+"big.jpg");
				$(".m-b-pic img").removeClass("ac");
				$(".m-b-pic img").eq(i).addClass("ac");
			})
			
		});
	}
	fangdaj($('#box'),$('#box1'));
	
	//帮宝适尺寸选中
	var arr=[188,218,208,198,98,108,128,158,168]
	$('.m-4 li').click(function(){
		var index=$(this).index();
		$('.m-4 li').removeClass("m-4-1");
		$(this).addClass("m-4-1");
		$('.m-1').children('i').html(arr[index]+'.00')
	});

	//选项卡的切换
	$('.renqb').mouseover(function(){		
		$('.renqi').removeClass('ad');
		$('.renqb').addClass('ac');
		$('.t-mid').children('.t-mid-1').show().siblings().hide();		
	});
	$('.renqi').mouseover(function(){		
		$('.renqb').removeClass('ac');
		$('.renqi').addClass('ad');
		$('.t-mid').children('.t-mid-2').show().siblings().hide();		
	});
	
	
	//购物车自增加减
	$('.m-5 .but').click(function(){	
		n++;
		var val=$('.m-5 input').val(n);
		
	});
	$('.m-5 .btn').click(function(){				
		if(n>1){
			n--;
			var val=$('.m-5 input').val(n);
		};
	});
	$('.m-5 h4').click(function(){
		alert("添加成功")
	});
	
	//地址栏下拉切换
	$('.m_3_1').hover(
		function(){			
			$('.m_3_4').show();			
		},
		function(){			
			$('.m_3_4').hide();
						
		}
	);
	
	//选择地址选项卡切换
	$('.m_nav li').mouseover(function(){
		var index=$(this).index();
		$('.m_nav5').children('div').hide();
		$('.m_nav5').children('div').eq(index).show();		
	})
});