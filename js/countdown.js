/*!
/* 倒數計時(首頁) - 最新體驗
/* 倒數計時(小集) - 發燒揪團
 */


$(function(){
	// 首頁 - 最新體驗
	countDown("2018/8/30 23:59:59","#ExperienceTime1 .day","#ExperienceTime1 .hour","#ExperienceTime1.minute","#ExperienceTime1 .second");
	countDown("2018/8/30 23:59:59","#ExperienceTime2 .day","#ExperienceTime2 .hour","#ExperienceTime2.minute","#ExperienceTime2 .second");
	countDown("2018/8/02 23:59:59","#ExperienceTime3 .day","#ExperienceTime3 .hour","#ExperienceTime3.minute","#ExperienceTime3 .second");
	countDown("2018/8/02 23:59:59","#ExperienceTime4 .day","#ExperienceTime4 .hour","#ExperienceTime4.minute","#ExperienceTime4 .second");
	
	// 小集 - 發燒揪團
	countDown("2019/4/30 22:59:59","#hotScorpionTime1 .day","#hotScorpionTime1 .hour","#hotScorpionTime1 .minute","#hotScorpionTime1 .second");
	countDown("2019/5/1 12:30:59","#hotScorpionTime2 .day","#hotScorpionTime2 .hour","#hotScorpionTime2 .minute","#hotScorpionTime2 .second");

});



function countDown(time,day_elem,hour_elem,minute_elem,second_elem){

	//if(typeof end_time == "string")

	var end_time = new Date(time).getTime(),// 月份是實際月份-1

	//current_time = new Date().getTime(),

	sys_second = (end_time-new Date().getTime())/1000;

	var timer = setInterval(function(){

		if (sys_second > 0) {

			sys_second -= 1;

			var day = Math.floor((sys_second / 3600) / 24);

			var hour = Math.floor((sys_second / 3600) % 24);

			var minute = Math.floor((sys_second / 60) % 60);

			var second = Math.floor(sys_second % 60);

			day_elem && $(day_elem).text(day<10?"0"+day:day);// 計算天

			$(hour_elem).text(hour<10?"0"+hour:hour);// 計算小時

			$(minute_elem).text(minute<10?"0"+minute:minute);// 計算分

			$(second_elem).text(second<10?"0"+second:second);// 計算秒

		} else { 

			clearInterval(timer);

		}

	}, 1000);

}