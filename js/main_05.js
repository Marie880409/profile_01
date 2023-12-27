const categories = document.querySelector(".category");
const projects = document.querySelectorAll(".project");

categories.addEventListener('click',(event) => {
    console.log(event);

    const filter = event.target.dataset.category;

    console.log(filter);
    projects.forEach((project) => {
        console.log(project.dataset.type);

        if(filter === 'all' || filter === project.dataset.type){
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }    
            if(filter == null) {
            active_button.classList.remove('category_selected');
            return;
        }
    })
    const active_button = document.querySelector('.category_selected');
    active_button.classList.remove('category_selected');
    event.target.classList.add('category_selected');
    console.log(event.target);
})

