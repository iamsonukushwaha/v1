const getAbout = async () => {

const aboutRes = await fetch("https://api.github.com/users/flyingsonu122");
 const aboutData = await aboutRes.json();

console.log(aboutData);

const d = new Date(aboutData.created_at).toDateString(); 
var company aboutData.company.replace("@", "");

// console.log(company);

var email;

if (aboutData.email == null) {

email = '';

} else {

email = `mailto: ${aboutData.email};

}

// console.log(aboutData.login); console.log(aboutData.name); console.log(aboutData.location); console.log(atm console.log(aboutData.html_url); console.log(aboutData.bio); console.log(aboutData.blog); console.log(aboutData. console.log(aboutData.email); console.log(aboutData.followers); console.log(aboutData. following); console.log(abou ta.twitter_username);

// work on eventsurl

// work on followers_url

// work on followings_url

// work on organizations_url
// work on received events
// work on gists_url

const about = document.getElementById("about");

let about Template = `

<a href="${aboutData.html_url}" target="_blank" rel="noopener noreferrer" data-aos-"fade-up"> 
<img src="${aboutData.avatar_url}" alt="${aboutData.name}" class="port">

</a>

<p>$(aboutData.name}</p>

<p>username: $(aboutData.login) </p>

<p>Joined on: $(d)</p>

<p>

<a href="${email}" target="_blank" rel="noopener noreferrer">

${email}

</a>

</p>





<p> twitter: ${aboutData.twitter_username}</p>

<p>followers: ${aboutData.followers}</p>

<p>following: ${aboutData.following}</p>

<p>location: ${aboutData.location}</p>

<p>

company :<a href="https://github.com/${company}" target="_blank" rel="noopener noreferrer">

${aboutData.company}

</a>

</p>

<p>

website: <a href="${aboutData.blog}" target="_blank" rel="noopener noreferrer">

${aboutData.blog}

</a>

</p>





