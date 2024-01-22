// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene la fecha actual
    var currentDate = new Date();

    // Función para obtener la fecha de inicio y fin de la semana actual
    function getWeekDates(date) {
        var startOfWeek = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
        var endOfWeek = startOfWeek + 6;
        var start = new Date(date.setDate(startOfWeek));
        var end = new Date(date.setDate(endOfWeek));
        return { start, end };
    }

    // Función para formatear la fecha como "YYYY-MM-DD"
    function formatDate(date) {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0');
        var yyyy = date.getFullYear();
        return yyyy + '-' + mm + '-' + dd;
    }

    // Genera el calendario
    function generateCalendar() {
        var calendarEl = document.getElementById('calendar');
        var weekDates = getWeekDates(currentDate);

        calendarEl.innerHTML = '<h2>Calendario</h2>';
        for (var i = 0; i < 7; i++) {
            var day = new Date(weekDates.start);
            day.setDate(day.getDate() + i);
            calendarEl.innerHTML += '<div class="day">' + formatDate(day) + '</div>';
        }
    }

    // Genera la agenda
    function generateAgenda() {
        var agendaEl = document.getElementById('agenda');
        agendaEl.innerHTML = '<h2>Agenda</h2>';
        for (var i = 0; i < 7; i++) {
            var day = new Date(currentDate);
            day.setDate(day.getDate() + i);
            agendaEl.innerHTML += '<div class="day">' + formatDate(day) + '</div>';
        }
    }

    // Inicializa el calendario y la agenda
    generateCalendar();
    generateAgenda();
});