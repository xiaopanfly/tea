$(function () {
	//导航栏悬浮内容
	$("#main_nav>ul>li:nth-child(1)").hover(function () {
		$(this).children(".navigation").show(100);
	}, function () {
		$(this).children(".navigation").hide(50);
	})
	$("#main_nav>.nav>li:nth-child(2)").hover(function () {
		$(this).children(".navigation").show(100);
	}, function () {
		$(this).children(".navigation").hide(50);
	})
	$("#main_nav>.nav>li:nth-child(3)").hover(function () {
		$(this).children(".navigation").show(100);
	}, function () {
		$(this).children(".navigation").hide(50);
	})
	$("#main_nav>.nav>li:nth-child(4)").hover(function () {
		$(this).children(".navigation").show(100);
	}, function () {
		$(this).children(".navigation").hide(50);
	})
	$("#main_nav>.nav>li:nth-child(5)").hover(function () {
		$(this).children(".navigation").show(100);
	}, function () {
		$(this).children(".navigation").hide(50);
	})
	$("#main_nav>.nav>li:nth-child(6)").hover(function () {
		$(this).children(".navigation").show(100);
	}, function () {
		$(this).children(".navigation").hide(50);
	})
	$("#main_nav>.nav>li:nth-child(7)").hover(function () {
		$(this).children(".navigation").show(100);
	}, function () {
		$(this).children(".navigation").hide(50);
	})
	$("#main_nav>.nav>li:nth-child(8)").hover(function () {
		$(this).children(".navigation").show(100);
	}, function () {
		$(this).children(".navigation").hide(50);
	})

	/*回顶部 start*/
	$(".flextop").click(function () {
		if ($('html').scrollTop()) {
			$('html').animate({ scrollTop: 0 }, 1000);
			return false;
		}
		$('body').animate({ scrollTop: 0 }, 1000);
		return false;
	})
	/*回顶部 end*/

	/*头部下拉菜单 start*/
	$(".header_top_right .more-menu").mouseenter(function () {
		$(this).animate(300, function () {
			$(this).addClass("hover");
		})
	})

	$(".header_top_right .more-menu").mouseleave(function () {
		$(this).animate(300, function () {
			$(this).removeClass("hover");
		})
	})
	/*头部下拉菜单 end*/

	$("#m-flex>.m-items>ul>li:nth-child(1)").hover(function () {
		$(this).children(".nav-sub-panel").show(100);
	}, function () {
		$(this).children(".nav-sub-panel").hide(50);
	})



	//折叠卡
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	}

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this),
			$next = $this.next();

		$next.stop().slideToggle();
		$this.parent().toggleClass('open');

		/*if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};*/ //只允许一项展开
	}
	var accordion = new Accordion($('#accordion'), false);



	var isCheckAll = false;
	function checkAll() {
		if (isCheckAll) {
			$("input[type='checkbox']").each(function () {
				this.checked = false;
			});
			isCheckAll = false;
		} else {
			$("input[type='checkbox']").each(function () {
				this.checked = true;
			});
			isCheckAll = true;
		}
	}


	//茶厂一二级导航栏
	$('#m-flex .m-items li>a').on('click',function() {
		let classes = $(this).parent().data('class');
		$('.'+ classes).addClass('selection').siblings().removeClass('selection');
		$(window).scrollTop(0);
	})

	$('.submenu li a').on('click',function() {
		let classes = $(this).parent().data('class');
		$('.'+ classes).addClass('selection').siblings().removeClass('selection');
		$(window).scrollTop(0);
	})


})





