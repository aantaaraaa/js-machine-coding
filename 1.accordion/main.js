const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer: "Accordion components are used to show and hide content easily.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer: "They are used in FAQs, menus, or any collapsible sections.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer: "It’s a keyboard instrument that uses bellows to make sound.",
  },
  {
    id: "4",
    question: "Can I create it with another framework?",
    answer: "Yes! You can build an accordion with any framework.",
  },
];

const accordion = document.querySelector('.accordion');

accordion.innerHTML = data.map(item => `
  <div class="accordion-item">
    <div class="accordion-title">
      <h3>${item.question}</h3>
      <span>+</span>
    </div>
    <div class="accordion-content">
      <p>${item.answer}</p>
    </div>
  </div>
`).join('');

const titles = document.querySelectorAll('.accordion-title');

titles.forEach(title => {
  title.addEventListener('click', () => {
    title.classList.toggle('active');
    const content = title.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
