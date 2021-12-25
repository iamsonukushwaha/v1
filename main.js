
const getData = async () => {
    let uri = "https://api.github.com/users/flyingsonu122/repos?per_page=100";
    const res = await fetch(uri);
    const data = await res.json();

    // console.log(data);

    data.forEach((i) => {
        // console.log(i);
        // console.log(i.name);
        // console.log(i.description);
        // console.log(i.owner.login);
        // console.log(i.html_url);
        // console.log(i.license.name);
        // console.log(i.open_issues);
        // console.log(i.created_at);
        // console.log(i.pushed_at);
        // console.log(i.size);
        // console.log(i.stargazers_count);
        // console.log(i.watchers_count);
        // console.log(i.default_branch);


        const projects = document.getElementById('projects');

        let template = `
            <a href="${i.html_url}" target="_blank" rel="noopener noreferrer" data-aos="fade-up" >
                <img src="https://github-readme-stats.vercel.app/api/pin/?username=flyingsonu122&repo=${i.name}&theme=buefy" alt="${i.name}">
            </a>
        `;

        projects.innerHTML += template;
        // projects.insertAdjacentHTML('beforeend', template);
    });
};

window.addEventListener("DOMContentLoaded", () => getData());
