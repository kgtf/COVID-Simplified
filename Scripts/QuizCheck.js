document.getElementById("quiz").onsubmit=function() {
     question1_answers = parseInt(document.querySelector('input[name = "question1_answers"]:checked').value);
	   question2_answers = parseInt(document.querySelector('input[name = "question2_answers"]:checked').value);
	   question3_answers = parseInt(document.querySelector('input[name = "question3_answers"]:checked').value);
	   question4_answers = parseInt(document.querySelector('input[name = "question4_answers"]:checked').value);
     question5_answers = parseInt(document.querySelector('input[name = "question5_answers"]:checked').value);
     question6_answers = parseInt(document.querySelector('input[name = "question6_answers"]:checked').value);
     question7_answers = parseInt(document.querySelector('input[name = "question7_answers"]:checked').value);
     question8_answers = parseInt(document.querySelector('input[name = "question8_answers"]:checked').value);
     question9_answers = parseInt(document.querySelector('input[name = "question9_answers"]:checked').value);
     question10_answers = parseInt(document.querySelector('input[name = "question10_answers"]:checked').value);
     question11_answers = parseInt(document.querySelector('input[name = "question11_answers"]:checked').value);
     question12_answers = parseInt(document.querySelector('input[name = "question12_answers"]:checked').value);
     question13_answers = parseInt(document.querySelector('input[name = "question13_answers"]:checked').value);
     question14_answers = parseInt(document.querySelector('input[name = "question14_answers"]:checked').value);
     question15_answers = parseInt(document.querySelector('input[name = "question15_answers"]:checked').value);
     question16_answers = parseInt(document.querySelector('input[name = "question16_answers"]:checked').value);
     question17_answers = parseInt(document.querySelector('input[name = "question17_answers"]:checked').value);
     question18_answers = parseInt(document.querySelector('input[name = "question18_answers"]:checked').value);
     question19_answers = parseInt(document.querySelector('input[name = "question19_answers"]:checked').value);
     question20_answers = parseInt(document.querySelector('input[name = "question20_answers"]:checked').value);

	   result = question1_answers + question2_answers + question3_answers + question4_answers + question5_answers + question6_answers + question7_answers + question8_answers + question9_answers + question10_answers +question11_answers + question12_answers + question13_answers + question14_answers + question15_answers + question16_answers + question17_answers + question18_answers + question19_answers + question20_answers;

	document.getElementById("grade").innerHTML = result;

corrQuestions = result/5;
result2 = `You got ${corrQuestions}/20 questions correct!`;
document.getElementById("grade2").innerHTML = result2;

return false; // required to not refresh the page; just leave this here
} //this ends the submit function
