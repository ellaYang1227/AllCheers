/*!
/* Custom Swiper(自訂 可觸屏滑動)
/* 各區好鄰市集 - 類別icon連結、好鄰商情、本地優惠、最新體驗、好鄰店家、好鄰產品x服務 
 */

 $(document).ready(function () {
		  
      // CategoryIcon swiper(各區好鄰市集-類別icon連結)
	  var MainMenuSwiper = new Swiper('#CategoryIcon-swiper', {
			slidesPerColumnFill: 'row', //由左至右，由上至下
			slidesPerColumn: 3, //多行布局裡面每列的slide数量*/
			spaceBetween: 10, //slide之間的距離（單位px）
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)    			
			//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
			// 圓點分頁
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			  dynamicBullets: true,
			},
			
			// RWD斷點
		    breakpoints: {
			//  <= 575px
			575: {
			  slidesPerView: 1.5, //slider容器顯示slides數量
			  slidesPerGroup: 1.5, //設置滑動一次slides數量
			  slidesPerColumn: 1,  //多行布局裡面每列的slide数量
			},
			// md以下( <= 991px)
			991: {
			  slidesPerView: 3, //slider容器顯示slides數量
			  slidesPerColumn: 1,  //多行布局裡面每列的slide数量
			},
			}
		  });
	  
	  // Business Swiper(各區好鄰市集-好鄰商情)
	  var BusinessSwiper = new Swiper('#business-swiper', {
			spaceBetween:  20, //slide之間的距離（單位px）
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)

			//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
			// 圓點分頁
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			  dynamicBullets: true,
			},
			//左右導航 arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
	  });
	  
	  // LocalOffer swiper(各區好鄰市集-本地優惠)	  
	  var LocalOfferSwiper = new Swiper('#LocalOffer-swiper', {
			direction: 'vertical', //Slides的滑动方向(垂直)
			mousewheel: true, //切换開啟滑鼠滾輪控制Swiper切换
			watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
			// 圓點分頁
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			},
			
			// RWD斷點
		    breakpoints: {
			//  <= 575px
			575: {
			  slidesPerView: 1, //slider容器顯示slides數量
			},
			// md以下( <= 991px)
			991: {
			  slidesPerView: 2, //slider容器顯示slides數量
			},
			}
		});	
		
	 //	NewStore Swiper(各區好鄰市集-新開店家)
	  var NewStoreSwiper = new Swiper('#NewStore-swiper', {
			freeMode: true,// true為free模式，slide會根據慣性滑動且不會貼合
			
			//slider容器顯示slides數量-'auto'自動根據slides寬度設定顯示數量
			//loop模式下，如為'auto'，需多設置参数：loopedSlides
			slidesPerView: 'auto', 
			freeModeSticky: true,//以啟用快照以在自由模式下滑動位置
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			
			//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
			
			//左右導航 arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
	   });
	 
	 
	 // Experience Swiper(各區好鄰市集-最新體驗)
	  var ExperienceSwiper = new Swiper('#experience-swiper', {
			spaceBetween: 20, //slide之間的距離（單位px）
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)
			
			//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
			// 圓點分頁
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			  dynamicBullets: true,
			},
			//左右導航 arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
			
			// RWD斷點
		    breakpoints: {
			//  <= 575px
			575: {
			  slidesPerView: 2, //slider容器顯示slides數量
			  slidesPerGroup: 2, //設置滑動一次slides數量
			},
			// md以下( <= 991px)
			768: {
			  slidesPerView: 2, //slider容器顯示slides數量
			  slidesPerGroup: 2, //設置滑動一次slides數量
			},
			}
	  }); 
	  
	   // Match Swiper(各區好鄰市集-好鄰媒合)
	  var MatchSwiper = new Swiper('#match-swiper', {
			spaceBetween: 20, //slide之間的距離（單位px）
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)

			//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
			// 圓點分頁
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			  dynamicBullets: true,
			},
			//左右導航 arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
	  }); 
	  
	  // StoreTabs-swiper(各區好鄰市集-店家)
	  var tabsSwiper = new Swiper('#StoreTabs-swiper', {
        spaceBetween: 20, //slide之間的距離（單位px）
		resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
		watchOverflow: true, //只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)
		autoHeight: true, //自动高度
		
		//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
			
		//左右導航 arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
        on: {
            slideChangeTransitionStart: function() {
                $("#StoreTabs .active").removeClass('active');
                $("#StoreTabs a").eq(this.activeIndex).addClass('active');
            }
        }
    });
    $("#StoreTabs a").on('click', function(e) {
        e.preventDefault()
        $("#StoreTabs .active").removeClass('active')
        $(this).addClass('active')
        tabsSwiper.slideTo($(this).index())
    });
		  
	// Product Swiper(各區好鄰市集-好鄰產品x服務)
	  var ProductSwiper = new Swiper('#product-swiper', {
			spaceBetween:  20, //slide之間的距離（單位px）
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)

			//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
			// 圓點分頁
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			  dynamicBullets: true,
			},
			//左右導航 arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
	  });	  
		  	  
});



