const form = document.querySelector('form');
const calendarDiv = document.querySelector('.calendar');

const createCalendar = (days) => {
    for(let i = 1; i <= days; i++){
        const calendarNumbersDays = calendarDiv.querySelector('.calendar_numbers__days');
        calendarNumbersDays.innerHTML += `<span class="days">${i}</span>`;
    }
}



form.addEventListener('submit', e => {
    e.preventDefault();
    const days = form.mes.value;
    calendarDiv.classList.remove('hidden');
    createCalendar(days);   
})