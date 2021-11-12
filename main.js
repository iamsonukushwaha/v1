const getProjects = async() => {
    let uri = `https://www.sonu.live/projects.json`;
    const res = await fetch(uri);
    const data = await res.json();

    let list = data.projects;
    // console.log(list);


    list.forEach(i => {
        const row = document.getElementById('row');


        // console.log(row);
        // console.log(i);
        // console.log(i.name);

        let template = `
            <div class="fullCard" data-aos="fade-up">
                    <div class="cardContent">
                        <div class="cardText">
                            <h4>${i.name}</h4>
                            <a href="${i.link}" target="_blank" rel="noopener noreferrer">
                                <img src="${i.image}" alt="${i.name}">
                            </a>
                        </div>
                        <div class="cardLinks">
                            <a href="${i.link}" target="_blank" class="links">Live Demo</a>
                            <a href="${i.source}" target="_blank" class="links">See Code</a>

                        </div>
                    </div>
                </div>
        `;

        // row.innerHTML = template;
        row.insertAdjacentHTML('beforeend', template);
    });

}

window.addEventListener('DOMContentLoaded', () => getProjects());
