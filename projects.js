const getAbout = async () => {
  const aboutRes = await fetch("https://api.github.com/users/iamsonukushwaha");
  const aboutData = await aboutRes.json();
  //   console.log(aboutData);
  const d = new Date(aboutData.created_at).toDateString();
  var company = aboutData.company.replace("@", "");
  // console.log(company);
  var email;
  if(aboutData.email == null) {
    email = '';
  } else {
    email = `mailto: ${aboutData.email}`;
  }

  const about = document.getElementById("about");

  let aboutTemplate = `
      <a href = "${aboutData.html_url}" target = "_blank" rel = "noopener noreferrer" data-aos="fade-up" ><img src="${aboutData.avatar_url}" alt="${aboutData.name}" class="pic"></a>
      <h1>${aboutData.name}</h1>
      <h5>${aboutData.bio}</h5>
      <h3>${aboutData.location}</h3>
      <a href = "https://github.com/${aboutData.login}" target = "_blank" rel = "noopener noreferrer" data-aos="fade-up" class="fa fa-github"> 
      @${aboutData.login}
      </a>
      <p>Joined on: ${d}</p>
      <p><a href="${email}" target="_blank" rel="noopener noreferrer">${email}</a></p>
      <a href = "https://twitter.com/${aboutData.twitter_username}" target = "_blank" rel = "noopener noreferrer" data-aos="fade-up" class="fa fa-twitter"> 
       @${aboutData.twitter_username}
      </a>
      <p><a href="${aboutData.blog}" target="_blank" rel="noopener noreferrer">${aboutData.blog}</a></p>
      <h5>followers: ${aboutData.followers} following: ${aboutData.following}</h5>
      <p>company :<a href="https://github.com/${company}" target="_blank" rel="noopener noreferrer">${aboutData.company}</a></p>
  `;
  about.innerHTML += aboutTemplate;
}


const getData = async () => {
  getAbout();
  let uri = "https://api.github.com/users/iamsonukushwaha/repos?per_page=100";
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

    const projects = document.getElementById("projects");

    let template = `
      <a href="${i.html_url}" target="_blank" rel="noopener noreferrer" data-aos="fade-up"><img src="https://github-readme-stats.vercel.app/api/pin/?username=iamsonukushwaha&repo=${i.name}&theme=buefy" alt="${i.name}"></a>
    `;

    projects.innerHTML += template;
    // projects.insertAdjacentHTML('beforeend', template);
  });
};

window.addEventListener("DOMContentLoaded", () => getData());
