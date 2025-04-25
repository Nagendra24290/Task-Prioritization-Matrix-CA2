
const bars = document.querySelector('.bars');
const navLinks = document.querySelector('.nav-links');

bars.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;



function addTask(button) {
    
    const quadrant = button.closest('.quadrant');
    
    
    const taskInput = quadrant.querySelector('input[type="text"]');
    const timeInput = quadrant.querySelector('input[type="time"]');
    const taskList = quadrant.querySelector('ul');
    
    
    if (taskInput.value.trim() === '') {
        alert('Please enter a task!');
        return;
    }
    
    
    const taskItem = document.createElement('li');
    
    
    const timeDisplay = timeInput.value ? timeInput.value : 'No time set';
    
    
    taskItem.innerHTML = `
        <span>${taskInput.value} - ${timeDisplay}</span>
        <button class="delete-btn" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    
    taskList.appendChild(taskItem);
    
    
    taskInput.value = '';
    timeInput.value = '';
}

function clearTasks(button) {
    
    const quadrant = button.closest('.quadrant');
    
    
    const taskList = quadrant.querySelector('ul');
    taskList.innerHTML = '';
}


document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn') || 
        e.target.classList.contains('fa-times')) {
        const btn = e.target.classList.contains('fa-times') ? 
                   e.target.parentElement : e.target;
        btn.parentElement.remove();
    }
});