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
