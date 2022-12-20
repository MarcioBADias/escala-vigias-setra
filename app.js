const form = document.querySelector('form');
const calendar_numbers__days = document.querySelector('.calendar_numbers__days')
const calendarDiv = document.querySelector('.calendar');

const createCalendar = () => {
    const days = form.mes.value;
    for(let i = 01; i <= days; i++){
        const calendarNumbersDays = calendarDiv.querySelector('.calendar_numbers__days');
        calendarNumbersDays.innerHTML += `<span class="days">${i}</span>`;
    }
}

const showCalendar = () => {
    calendarDiv.classList.remove('hidden');
    createCalendar();
}

const plantao = () => {
    let counter = Number(form.inic.value);
    const vigia = form.vigia.value;
    console.log(counter, vigia)
    Array.from(calendar_numbers__days.children).forEach(day => {
        if(day.textContent == counter){
            day.innerHTML += `<br>${vigia}`
            counter += 4
        }
    })
}

form.addEventListener('submit', e => {
    e.preventDefault();
    showCalendar()
    plantao();
    
    
})