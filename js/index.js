var audio = document.querySelector('audio');
var str = "亲爱的漫漫："
	str += "<p>有你在的地方，天气晴朗，万物可爱</p>"
	str += "<p>我喜欢三月的风，四月的雨，不落的太阳，和最好的你</p>"
	str += "<p>别人再好都是别人的，我不一样，我是你的</p>"
	str += "<p>我只有两个心愿</p>"
	str += "<p>我在你身边</p>"
	str += "<p>你在我身边</p>"
	str += "<p>一生平淡无奇</p>"
	str += "<p>直到遇到了你</p>"
	str += "<p>让我知道有你的世界多么美丽</p>"
	str += "<p>虽然我不怎么浪漫</p>"
	str += "<p>还总是犯傻、啰嗦</p>"
	str += "<p>但爱你绝对是真实的 (^_^)</p>"
	str += "<p class='end'>--大川哥哥</p>" //为什么自动换行后隔很长一段距离
	var i = 0;
	
	function typing() {
		if (i <= str.length) {
			$("#divTyping").html(str.slice(0, i++) + '_')
			setTimeout('typing()', 200); //递归调用
		} else {
			$("#divTyping").html(str); //结束打字,移除 _ 光标
		}
	}
	
	$(".jingxi").click(function(){
		$(".box4").animate({
			"opacity": 0
		},2000)
		$(".jingxi").css("display","none")
		$(".main").animate({
			"opacity": 1
		},3000)
		$(".main").addClass('flex')
		audio.play();
		$(".box").animate({
			"top": "50%",
			"left": "0",
			"margin-left": "0"
		},3000)
		setTimeout(function(){
			$(".box1 .top").addClass('t')
			$(".box1 .bottom").addClass('b')
			$(".box1 .qian").addClass('q')
			$(".box1 .hou").addClass('h')
			$(".box1 .left").addClass('l')
			$(".box1 .right").addClass('r')
			$(".box2 .top").addClass('t')
			$(".box2 .bottom").addClass('b')
			$(".box2 .qian").addClass('q')
			$(".box2 .hou").addClass('h')
			$(".box2 .left").addClass('l')
			$(".box2 .right").addClass('r')
		},3000)
		setTimeout(function(){
			$("#divTyping").css("display","block")
			typing();
			setTimeout(function(){
				$('.main').animate({
					"opacity": 0
				},3000)
				$('.box3').animate({
					"opacity": 1
				},3000)
			},50000)
		},5000)
	})