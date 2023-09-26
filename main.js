// Questions that will be asked. We created a questions array
const Questions = [{
	q: "What is capital of India?",
	a: [{ text: "Gandhinagar", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "What is the capital of Thailand?",
	a: [{ text: "Lampang", isCorrect: false, isSelected: false },
	{ text: "Phuket", isCorrect: false },
	{ text: "Ayutthaya", isCorrect: false },
	{ text: "Bangkok", isCorrect: true }
	]

},
{
	q: "What is the capital of Gujarat",
	a: [{ text: "Surat", isCorrect: false },
	{ text: "Vadodara", isCorrect: false },
	{ text: "Gandhinagar", isCorrect: true },
	{ text: "Rajkot", isCorrect: false }
	]

},
{
    q:"Who is the prime minister of India",
    a:[{text:"Murmu",isCorrect:false},
    { text:"Narendra Modi",isCorrect:true},
{
    text:"Ramnath Kovind",isCorrect:false
},{text:"NCBN",isCorrect:false}]
}

]

let currQuestion = 0
let score = 0   // To calculate the score we initialize the value to zero.

function loadQues() {
	const question = document.getElementById("ques")  // It returns the content in the div tag ques
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;  // Assi
	opt.innerHTML = ""

	// Making options using radio buttons and assigning the labels i.e, Options

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";    //Option type is radio button
		choice.name = "answer";		// name is answer all options
		choice.value = i;  // option a value is b=1 c=2 d=3

		choiceLabel.textContent = Questions[currQuestion].a[i].text;  //assiging the labels that are options

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
    const tq=document.getElementById("thankyou");
	totalScore.textContent = `You scored ${score} out of ${Questions.length} Questions`;
    tq.textContent="Thank You for participating";
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();

	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
        console.log("false");
		nextQuestion();
	}
}
