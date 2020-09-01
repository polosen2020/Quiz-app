
var QuestionControl = (function(){

	var questions =[
	{
		id : 0,
		question:"How many bones are there is a baby's body?",
		ans:"300",
		options:["200","206","300","356"]

	},
	{
		id:1,
		question: "When was social media site Facebook was found?",
		ans:"2004",
		options:["2000","2002","2004","2006"]

	},
	{
		id: 2,
		question: "Where Headquter of Google is Located?",
		ans:"California",
		options:["New York","California","Chicago","Los Angeles"]
	},
	{
		id: 3,
		question:"In which country White Elephant is found?",
		ans:"Thailand",
		options:["India","Vietnam","Thailand","Srilanka"]
	},{
		id:4,
		question:"Which country is the highest producer of Tea?",
		ans:"China",
		options:["China","Japan","India","South Korea"]

	},{
		id:5,
		question:"Which country is the highest producer of coffee?",
		ans:"Brazil",
		options:["Peru","Mexico","Brazil","India"]
	},{
		id:6,
		question:"Which country is known as the 'Battle Ground of Europe'?",
		ans:"Belgium",
		options:["Italy","Belgium","Austria","France"]

	},{
		id:7,
		question:"What is the smallest country in the world?",
		ans:"Vatican City",
		options:["Monaco","Vatican City","San Marino","Marshall Island"]
	},{
		id:8,
		question:"The country of Singapore made up with how many Island?",
		ans:"64",
		options:["20","102","56","64"]

	},{
		id:9,
		question:"Which country is known as the'Land of Thousand Lakes'?",
		ans:"Finland",
		options:["Finland","Iceland","Norway","Japan"]
	},{
		id:10,
		question:"Which country is known as 'The land of Thunder Bults'?",
		ans:"Bhutan",
		options:["India","Bhutan","Nepal","Thailand"]
	}];

	var check = [];
	var ques = [];
	var select = 0;
	var i = 0;



	while(check.length != 10){
		select= Math.round(Math.random()*10);
	
		var f = check.indexOf(select);

		if (f == -1){

			check[i] = select;
			ques[i] = questions[select];
		
			i ++;
		
		}
		else if(f != -1){
		
			continue;
		
		
		
			}
		}	

	var easyQuestionSet = ques;		
	return{
		quesSelect:function(){
			return{
				 finalques: easyQuestionSet,
			
			} 
		}
	}

})();
var timeControl = function(){

	


	

}();



var UIControl = (function(){

	var DomStrings = {
	
		nextques : '.nextques',
		showques :'#allques',
		userName: ".quiz-user",
		showtime:'.quiz-timer'
	};
	


	return{
		
		getDomStrings: function(){
			return DomStrings;
		}


	}


})();






var controlRoom = (function(ques,time,ui){


	var time = 0;
	var newtime ;
	var minutes1;
	var seconds1;
	var DOM = ui.getDomStrings();

	var seconds = Math.floor((time%(100*60))/100);
	var minutes = Math.floor((time%(100*60*60))/(1000*60));
	var mytime = setInterval (function(){
			if(seconds<59)
			seconds ++;
			else{
				minutes ++;
				seconds = 0;
				}
				minutes1 = String(minutes).padStart(2, '0')
				seconds1 = String(seconds).padStart(2, '0')
				newtime = minutes,seconds;
				document.querySelector(DOM.showtime).innerHTML=`${minutes1}:${seconds1}`		
		
		},1000)
	
	var quesNum = ques.quesSelect();
	
	
	var count = 0;
	let score = 0;
	
	var i = 0;
	window.onload = function(){
		var name = sessionStorage.getItem('username');
		document.querySelector(DOM.userName).innerHTML = "Welcome "+ name + "!";
		
		selector = quesNum.finalques[i];


	
		document.querySelector(DOM.showques).innerHTML =document.querySelector(DOM.showques).innerHTML =
		`<h2 class="question">${i+1}. ${selector.question}</strong></h2>
				<ul class="option_group">
					<li class="option">${selector.options[0]}</li>
					<li class="option">${selector.options[1]}</li>
					<li class="option">${selector.options[2]}</li>
					<li class="option">${selector.options[3]}</li>
					
			
				</ul>`
				
			 toggleActive();
	
				
			i++;
			selector = quesNum.finalques[i];
				
					document.querySelector(DOM.nextques).addEventListener('click',function(){
			
					
					count = count + 1;
					
				
					//console.log(minutes1,seconds1);

					var answer =(document.querySelector("li.option.active").innerHTML);
					if (answer == quesNum.finalques[i-1].ans){
						console.log(quesNum.finalques[i-1].ans);
						console.log("true");
						score += 10;



					}
					else{
						console.log(quesNum.finalques[i-1].ans);
						console.log("false");
					}
					sessionStorage.setItem("score",score);

					if (count == 10){

						sessionStorage.setItem("seconds",seconds1);
						sessionStorage.setItem("minutes",minutes1);
						clearInterval(mytime);
						location.href = "end.html";

					}

					document.querySelector(DOM.showques).innerHTML =document.querySelector(DOM.showques).innerHTML =
					`<h2 class="question">${i+1}. ${selector.question}</strong></h2>
							<ul class="option_group">
							<li class="option">${selector.options[0]}</li>
							<li class="option">${selector.options[1]}</li>
							<li class="option">${selector.options[2]}</li>
							<li class="option">${selector.options[3]}</li>
							
							</ul>`
				
					toggleActive();
					i ++;
					selector = quesNum.finalques[i];
					
			});

			
		
	}



			

	
	var toggleActive = function(){
	
		var options = document.querySelectorAll("li.option");
		var arr = [];


		for (let i = 0; i < options.length; i++){
		
			options[i].onclick = function(){
				
				
				for (let j = 0;j< options.length; j++){
					if (options[j].classList.contains("active")){
					
						options[j].classList.remove("active");

					}
				}

			options[i].classList.add("active");

			
		}


		}

}


	
	

	return{
		init: function(){
			console.log("it has started");
			
			

		}
	}


})(QuestionControl,timeControl,UIControl);

controlRoom.init();