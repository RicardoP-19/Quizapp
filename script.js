let questions = [
  {
    "question": "Wer hat HTML erfunden",
    "answer_1": "Robbie Wlliams",
    "answer_2": "Lady Gaga",
    "answer_3": "Tim Berner-Lee",
    "answer_4": "Justin Bieber",
    "right_answer": 3
  },
  {
    "question": "Was beduetet das HTML Tag &lt;a&gt;?",
    "answer_1": "Text Fett",
    "answer_2": "Container",
    "answer_3": "Ein Link",
    "answer_4": "Kursiv",
    "right_answer": 3
  },  
  {
    "question": "Wie bindet man eine Website in eine Website ein?",
    "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
    "answer_2": "&lt;iframe&gt",
    "answer_3": "&lt;frame&gt",
    "answer_4": "&lt;frameset&gt",
    "right_answer": 2
  },
  {
    "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
    "answer_1": "readonly",
    "answer_2": "max",
    "answer_3": "from",
    "answer_4": "spellcheck",
    "right_answer": 1
  },
  {
    "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
    "answer_1": "a[title]{...}",
    "answer_2": "a > tilte {...}",
    "answer_3": "a.title {...}",
    "answer_4": "a=title {...}",
    "right_answer": 1
  },
];


function init() {
  let length = questions.length;
  let status = document.getElementById('current-status');
  status.innerHTML = /*html*/`<b>1</b> von <b>${length}</b> Fragen`;
}