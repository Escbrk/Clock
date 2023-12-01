const refs = {
    day: document.querySelector('.date-day'),
    date: document.querySelector('.date'),
    month: document.querySelector('.date-month'),
    year: document.querySelector('.date-year'),
    digitalClock: document.querySelector('.date-time'),

    //!____________________________

    clockHours__arrow: document.querySelector('.clock-hours__arrow'),
    clockMinutes__arrow: document.querySelector('.clock-minutes__arrow'),
    clockSeconds__arrow: document.querySelector('.clock-seconds__arrow'),
};

const namesOfMonth = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

const namesOfDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];

setInterval(() => {
    const currentDate = new Date();

    refs.day.textContent = namesOfDays[currentDate.getDay()];
    refs.date.textContent = currentDate.getDate();
    refs.month.textContent = namesOfMonth[currentDate.getMonth()];
    refs.year.textContent = currentDate.getFullYear();
    const currentTime = {
        hours: currentDate.getHours().toString().padStart(2, 0),
        minutes: currentDate.getMinutes().toString().padStart(2, 0),
        seconds: currentDate.getSeconds().toString().padStart(2, 0),
    };

    const clock = {
        hours:
            (360 / 12) * currentTime.hours +
            (360 / 12 / 60) * currentTime.minutes,
        minutes: (360 / 60) * currentTime.minutes,
        seconds: (360 / 60) * currentTime.seconds,
    };

    // console.log(clock.minutes)
    const formatTime = `${currentTime.hours}:${currentTime.minutes}:${currentTime.seconds}`;

    refs.digitalClock.textContent = formatTime;

    refs.clockSeconds__arrow.style.transform = `rotate(${clock.seconds}deg)`;
    refs.clockMinutes__arrow.style.transform = `rotate(${clock.minutes}deg)`;
    refs.clockHours__arrow.style.transform = `rotate(${clock.hours}deg)`;
}, 1000);
