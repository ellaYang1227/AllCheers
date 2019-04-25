/*!
/* Custom Swiper(自訂 可觸屏滑動)
/* 好鄰熱賣(樂叩點優惠)、最新體驗、店家、商情、媒合、分享、官方單元banner 
 */

 $(document).ready(function () {
	  
	  // Selling Swiper(好鄰熱賣)(樂叩點優惠)
	  var SellingSwiper = new Swiper('#selling-swiper', {
			spaceBetween: 20, //slide之間的距離（單位px)
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
	  
	  // Experience Swiper(最新體驗)
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
	  });
	 
	 // StoreTabs-swiper(店家)
	  var tabsSwiper = new Swiper('#StoreTabs-swiper', {
		spaceBetween: 20, //slide之間的距離（單位px）
		resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
		watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)
		
		//自動播放
			autoplay: {
			  delay: 7500,
			  disableOnInteraction: false,
			},
        on: {
            slideChangeTransitionStart: function() {
                $(".StoreTabs .active").removeClass('active');
                $(".StoreTabs a").eq(this.activeIndex).addClass('active');
            }
        }
    });
      $(".StoreTabs a").on('click', function(e) {
        e.preventDefault()
        $(".StoreTabs .active").removeClass('active')
        $(this).addClass('active')
        tabsSwiper.slideTo($(this).index())
      });
	  
	   // Business Swiper(好鄰商情)
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
	  
	   // Match Swiper(好鄰媒合)
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
	  
	   // ShareIt Swiper(好鄰分享)
	  var ShareItSwiper = new Swiper('#ShareIt-swiper', {
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
	  
	  // UnitBanner Swiper(官方單元banner)
	  var UnitBannerSwiper = new Swiper('#UnitBanner-swiper', {
			initialSlide: 1,//初始幻燈片的索引號(從0開始)
			
			//slider容器顯示slides數量-'auto'自動根據slides寬度設定顯示數量
			//loop模式下，如為'auto'，需多設置参数：loopedSlides
			slidesPerView: 'auto',
			resistanceRatio: 0, //邊緣抵抗力大小；值越小slide越難拖離邊緣，0時完全無法拖離
			watchOverflow: true,//只有1個slide，swiper無效且隱藏導航(圓點分頁、左右導航)
			
			//自動播放
			autoplay: {
			  delay: 5000,
			  disableOnInteraction: false,
			},
			// 圓點分頁
			pagination: {
			  el: '.swiper-pagination',
			  clickable: true,
			},
			//左右導航 arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		  });
      
		  
});
