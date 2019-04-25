header ='<section id="header"> \
  <!--功能選單-->\
  <nav class="navbar TopMenu">\
    <div class="container">\
      <div class="row"> \
        <!--xs以下 功能區塊-->\
        <div class="navbar-header">\
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#TopMenu-collapse" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>\
          <a class="navbar-brand visible-xs" href="http://www.allcheers.com.tw/"><img src="images/shared/好鄰市集logo(xs).svg" alt="好鄰市集logo"></a>\
          <div class="points-display visible-xs col-xs-6"><a href="http://www.allcheers.com.tw/PrizeList.aspx">樂叩點：0</a></div>\
          <div class="navbar-search visible-xs"><a type="button" data-toggle="modal" data-target="#XsSearch"><i class="icon-search"></i></a>\
            <div class="modal fade" id="XsSearch" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">\
              <div class="modal-dialog" role="document">\
                <div class="modal-content">\
                  <form>\
                    <div class="modal-body">\
                      <div class="form-group">\
                        <label for="position2"><i class="icon-map-marker"></i>地區</label>\
                        <input class="form-control" type="text" name="position" id="position2" placeholder="台北市中山區 或 郵遞區號" autocomplete="off">\
                      </div>\
                      <div class="form-group">\
                        <label for="category_xs"><i class="icon-th"></i>類別</label>\
                        <select id="XsCategory_Select" class="form-control selectpicker" data-style="btn-select" data-size="5">\
                          <option value="Market">好鄰市集</option>\
                          <option value="Store">店家資訊</option>\
                          <option value="ThemeStore">主題店家</option>\
                          <option value="Map">地圖快搜</option>\
                          <option value="Product">產品資訊</option>\
                          <option value="Coupon">店家商情</option>\
                          <option value="ClassifiedAd">好鄰媒合</option>\
                          <option value="Article">文章分享</option>\
                        </select>\
                      </div>\
                      <div class="form-group">\
                        <label for="search2"><i class="icon-search"></i>關鍵字</label>\
                        <input class="form-control" type="search" name="search" id="search2" placeholder="店名、美食、修繕...等" autocomplete="off">\
                      </div>\
                    </div>\
                    <div class="modal-footer">\
                      <button class="btn btn-orange" type="submit">搜尋</button>\
                      <button type="button" class="btn btn-default" data-dismiss="modal">關閉</button>\
                    </div>\
                  </form>\
                </div>\
              </div>\
            </div>\
          </div>\
        </div>\
        <!--sm以上 功能區塊--> \
        <div class="navbar-collapse collapse" id="TopMenu-collapse" aria-expanded="false">\
          <!-- xs以下用 -->\
          <div class="xs-SignInBlock visible-xs"> \
            <!-- 未登入時 \
            <div>\
              <h1>好鄰市集</h1>\
              <a class="btn btn-orange" href="http://www.allcheers.com.tw/loginMain.aspx" role="button">登入註冊</a></div>-->\
            <!-- 已登入時 (帳戶大頭照 沒有：使用預設 有：使用店家logo) -->\
          <div class="LoggedIn">\
          <div class="account-name"><img src="images/shared/Account(預設).svg" alt="楊小奕" class="img-circle account-img">楊小奕</div><a class="btn btn-outline-orange" href="http://www.allcheers.com.tw/myAccountSummary.aspx" role="button">帳號管理</a> \
          </div> \
          </div>\
          <!-- 全部螢幕尺寸共用 -->\
          <ul class="nav navbar-nav navbar-right">\
            <li class="dropdown visible-xs"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">在地市集 <span class="caret"></span></a>\
              <ul class="dropdown-menu">\
                <li><a href="http://www.allcheers.com.tw/StoreSearch.aspx">找店家</a></li>\
                <li><a href="http://www.allcheers.com.tw/LocalFoodMap.aspx?zip=104">找主題</a></li>\
                <li><a href="http://www.allcheers.com.tw/mpmap.aspx?mp=8892&poicat=&catcheck=全">地圖快搜</a></li>\
                <li><a href="http://www.allcheers.com.tw/localpointmap.aspx">樂叩點</a></li>\
              </ul>\
            </li>\
            <li class="dropdown visible-xs"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">好鄰情報 <span class="caret"></span></a>\
              <ul class="dropdown-menu">\
                <li><a href="http://www.allcheers.com.tw/EventList.aspx">商情</a></li>\
                <li><a href="#">佈告欄</a></li>\
                <li><a href="http://www.allcheers.com.tw/openRequestSearch.aspx">媒合</a></li>\
                <li><a href="http://www.allcheers.com.tw/index-Planning-Template.aspx">分享</a></li>\
              </ul>\
            </li>\
            <li class="dropdown visible-xs"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">熱門好鄰市集 <span class="caret"></span></a>\
              <ul class="dropdown-menu">\
                <li><a href="http://www.allcheers.com.tw/Marketplace.aspx?zip=104">台北中山區</a></li>\
                <li><a href="http://www.allcheers.com.tw/marketplace.aspx?zip=106">台北大安區</a></li>\
                <li><a href="http://www.allcheers.com.tw/marketplace.aspx?zip=100">台北中正區</a></li>\
              </ul>\
            </li>\
            <!-- 未登入時 \
            <li class="hidden-xs"><a href="http://www.allcheers.com.tw/loginMain.aspx">登入註冊</a></li> -->\
            <!-- 已登入時 (帳戶大頭照 沒有：使用預設 有：使用店家logo) -->\
          <li class="dropdown hidden-xs">\
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">\
          <img src="images/shared/Account(預設).svg" alt="楊小奕" class="img-circle account-img">楊小奕 <span class="caret"></span></a>\
                <ul class="dropdown-menu">\
                  <li class="dropdown-header">我的好鄰市集：</li>\
                  <li><a href="http://www.allcheers.com.tw/marketplace.aspx?zip=104">台北市中山區</a></li>\
                  <li><a href="http://www.allcheers.com.tw/marketplace.aspx?zip=220">新北市板橋區</a></li>\
                  <!--<li><a href="#">管理好鄰特約卡</a></li>-->\
				  <li role="separator" class="divider"></li>\
				  <li class="dropdown-header">買家團購管理：</li>\
                  <li><a href="StoreToGoMenu.html">我的購物車</a></li>\
                  <li><a href="orderTracking.html">團購訂單查詢</a></li>\
                  <li role="separator" class="divider"></li>\
                  <li class="dropdown-header">我的帳戶：</li>\
                  <li><a href="http://www.allcheers.com.tw/PrizeList.aspx">樂叩點</a></li>\
                  <li><a href="http://www.allcheers.com.tw/PrizeList.aspx">電子優惠券</a></li>\
                  <!--<li><a href="#">已報名體驗</a></li>-->\
                  <li role="separator" class="divider"></li>\
                  <li><a href="http://www.allcheers.com.tw/EditStoreInfo.aspx">建立店家</a></li>\
                  <li><a href="http://www.allcheers.com.tw/MyStoreSummary.aspx">店家中心</a></li>\
				  <li role="separator" class="divider"></li>\
                  <li class="dropdown-header">店家團購管理：</li>\
				  <!--<li><a href="#">新增團購產品</a></li>-->\
                  <!--<li><a href="#">團購產品總覽</a></li>-->\
                  <!--<li><a href="#">新增產品類別</a></li>-->\
				  <li><a href="#">新增修改菜單</a></li>\
                  <li><a href="storeOrderManagement.html">團購訂單管理</a></li>\
                  <li role="separator" class="divider"></li>\
                  <li><a href="http://www.allcheers.com.tw/accountSetNOption.aspx">修改個人資料</a></li>\
                  <li><a href="http://www.allcheers.com.tw/myAccountSummary.aspx">帳號管理</a></li>\
                  <li><a href="#">登出</a></li>\
                </ul>\
              </li> \
            <li class="hidden-xs"><a href="http://www.allcheers.com.tw/PrizeList.aspx">樂叩點：0</a></li>\
            <li><a href="http://www.allcheers.com.tw/FAQ.aspx">常見問題</a></li>\
            <li class="hidden-xs">｜</li>\
            <li class="dropdown"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="icon-pencil hidden-xs"></i>發佈貼文 <span class="caret"></span></a>\
              <ul class="dropdown-menu">\
                <li><a href="http://www.allcheers.com.tw/EditMPnews.aspx?mp=1000">建立活動</a></li>\
                <li role="separator" class="divider"></li>\
                <li><a href="http://www.allcheers.com.tw/EditShareCoupon.aspx">分享優惠</a></li>\
                <li><a href="http://www.allcheers.com.tw/EditStoreCoupon.aspx?SID=0S00000080">線上辦優惠</a></li>\
                <li role="separator" class="divider"></li>\
                <li><a href="http://www.allcheers.com.tw/QuickPostBoard.aspx">建立媒合</a></li>\
                <li><a href="http://www.allcheers.com.tw/EditPlanningTemplate_Article.aspx">建立分享</a></li>\
                <li><a href="http://www.allcheers.com.tw/EditMPnews.aspx?mp=1000">建立佈告欄</a></li>\
              </ul>\
            </li>\
            <!-- 已登入時 -->\
            <li role="separator" class="divider"></li>\
            <li class="dropdown visible-xs"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">我的好鄰市集 <span class="caret"></span></a>\
              <ul class="dropdown-menu">\
                <li><a href="http://www.allcheers.com.tw/marketplace.aspx?zip=104">台北市中山區</a></li>\
                <li><a href="http://www.allcheers.com.tw/marketplace.aspx?zip=220">新北市板橋區</a></li>\
                <!--<li><a href="#">管理好鄰特約卡</a></li>-->\
              </ul>\
            </li>\
			<li class="dropdown visible-xs"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">買家團購管理 <span class="caret"></span></a>\
              <ul class="dropdown-menu">\
                <li><a href="StoreToGoMenu.html">我的購物車</a></li>\
                <li><a href="orderTracking.html">團購訂單查詢</a></li>\
              </ul>\
            </li>\
            <li class="dropdown visible-xs"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">我的帳戶 <span class="caret"></span></a>\
              <ul class="dropdown-menu">\
                <li><a href="http://www.allcheers.com.tw/PrizeList.aspx">樂叩點</a></li>\
                <li><a href="http://www.allcheers.com.tw/PrizeList.aspx">電子優惠券</a></li>\
                <!--<li><a href="#">已報名體驗</a></li>-->\
              </ul>\
            </li>\
            <li class="visible-xs"><a href="http://www.allcheers.com.tw/EditStoreInfo.aspx">建立店家</a></li>\
            <li class="visible-xs"><a href="http://www.allcheers.com.tw/MyStoreSummary.aspx">店家中心</a></li>\
            <li role="separator" class="divider"></li>\
			<li class="dropdown visible-xs"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">店家團購管理 <span class="caret"></span></a>\
              <ul class="dropdown-menu">\
                <!--<li><a href="#">新增團購產品</a></li>-->\
                <!--<li><a href="#">團購產品總覽</a></li>-->\
                <!--<li><a href="#">新增產品類別</a></li>-->\
				<li><a href="#">新增修改菜單</a></li>\
				<li><a href="storeOrderManagement.html">團購訂單管理</a></li>\
              </ul>\
            </li>\
            <li class="visible-xs"><a href="http://www.allcheers.com.tw/accountSetNOption.aspx">修改個人資料</a></li>\
            <li class="visible-xs"><a href="#">登出</a></li> \
          </ul>\
        </div>\
      </div>\
    </div>\
  </nav>\
  <!--品牌&搜尋列-->\
  <div class="brand-navbar">\
    <div class="container">\
      <div class="row">\
        <div class="col-sm-3 col-md-3 hidden-xs"><a href="http://www.allcheers.com.tw/"><img src="images/shared/好鄰市集logo.svg" alt="好鄰市集logo" class="img-responsive"></a></div>\
        <!--sm 以上用-->\
        <div class="col-sm-9 col-md-6 position-search hidden-xs">\
          <form class="input-group">\
            <span class="input-group-addon input-group-landmark"><i class="icon-map-marker"></i></span>\
            <input class="form-control" type="text" name="position" id="position1" placeholder="不限地區" autocomplete="off">\
            <span class="input-group-addon input-group-separator"></span>\
            <input class="form-control" type="search" name="search" id="search1" placeholder="關鍵字">\
            <div class="input-group-btn">\
              <select id="Category_Select" class="form-control selectpicker" data-style="btn-select">\
                <option value="Market">好鄰市集</option>\
                <option value="Store">店家資訊</option>\
                <option value="ThemeStore">主題店家</option>\
                <option value="Map">地圖快搜</option>\
                <option value="Product">產品資訊</option>\
                <option value="Coupon">店家商情</option>\
                <option value="ClassifiedAd">好鄰媒合</option>\
                <option value="Article">文章分享</option>\
              </select>\
            </div>\
            <span class="input-group-btn">\
            <button class="btn btn-submit" type="submit"><i class="icon-search"></i></button>\
            </span>\
          </form>\
          <ul class="list-unstyled">\
            <li class="HotLink-title">熱門好鄰市集</li>\
            <li><a href="http://www.allcheers.com.tw/Marketplace.aspx?zip=104">台北市中山區</a></li>\
            <li><a href="http://www.allcheers.com.tw/Marketplace.aspx?zip=106">台北市大安區</a></li>\
            <li><a href="http://www.allcheers.com.tw/Marketplace.aspx?zip=100">台北市中正區</a></li>\
          </ul>\
        </div>\
        <!--xs 以下用-->\
        <div class="col-xs-12 xs-position-search visible-xs">\
          <form class="input-group">\
            <span class="input-group-addon input-group-landmark"><i class="icon-map-marker"></i></span>\
            <input class="form-control" type="text" name="position" id="position2" placeholder="請輸入如 台北市中山區 或 郵遞區號">\
            <span class="input-group-btn">\
            <button class="btn btn-submit" type="submit">GO</button>\
            </span>\
          </form>\
          <ul class="list-unstyled">\
            <li class="HotLink-title">熱門好鄰市集</li>\
            <li><a href="http://www.allcheers.com.tw/Marketplace.aspx?zip=104">台北市中山區</a></li>\
            <li><a href="http://www.allcheers.com.tw/Marketplace.aspx?zip=106">台北市大安區</a></li>\
            <li><a href="http://www.allcheers.com.tw/Marketplace.aspx?zip=100">台北市中正區</a></li>\
          </ul>\
        </div>\
      </div>\
    </div>\
  </div>\
  <!--主選單-->\
  <div id="MainMenu-all">\
    <div class="container">\
      <div class="row">\
        <div id="MainMenu">\
          <ul class="swiper-wrapper list-unstyled">\
            <li class="swiper-slide nav-category"><i class="material-icons md-18">store_mall_directory</i>在地市集</li>\
            <li class="swiper-slide"><a href="http://www.allcheers.com.tw/StoreSearch.aspx">找店家</a></li>\
            <li class="swiper-slide"><a href="http://www.allcheers.com.tw/LocalFoodMap.aspx?zip=104">找主題</a></li>\
            <li class="swiper-slide"><a href="http://www.allcheers.com.tw/mpmap.aspx?mp=8892&poicat=&catcheck=全">地圖快搜</a></li>\
            <li class="swiper-slide"><a href="http://www.allcheers.com.tw/localpointmap.aspx">樂叩點</a></li>\
            <li class="swiper-slide nav-category"><i class="material-icons md-18">assignment</i>好鄰情報</li>\
            <li class="swiper-slide"><a href="http://www.allcheers.com.tw/Coupons.aspx">商情</a></li>\
            <li class="swiper-slide"><a href="http://www.allcheers.com.tw/EventList.aspx">佈告欄</a></li>\
            <li class="swiper-slide"><a href="http://www.allcheers.com.tw/openRequestSearch.aspx">媒合</a></li>\
            <li class="swiper-slide"><a href="http://www.allcheers.com.tw/index-Planning-Template.aspx">分享</a></li>\
          </ul>\
        </div>\
      </div>\
    </div>\
  </div>\
</section>';
document.write(header);