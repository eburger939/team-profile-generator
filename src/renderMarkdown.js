let mangCard = ''
let engCard = ''
let internCard = ''


function mapping(team) {
const titles = team.map(person => {


  if (person.getRole() == "Manager") {
    person.title = 'Manager'
  } else if (person.getRole() == "Engineer") {
    person.title = 'Engineer'
  } else if (person.getRole() == "Intern"){
    person.title = 'Intern'
  }
  return person
})
filteringMembers(titles)
console.log(titles)
}
function filteringMembers(titles){
  const filterManager = titles.filter(function(role) {
    return role.title == 'Manager'
  })
    console.log(filterManager)
    filterManager.forEach(mang => {
      mangCard += ` <div class="col-3">
      <div>
        <div class="card border-dark custom-column">
          <div class="card-body custom-manager-body">
            <h5 class="card-title"><strong>${mang.getName()}</strong></h5>
            <p class="card-text"><i class="fas fa-mug-hot m-2"></i>Manager</p>
          </div>
          <ul class="list-group">
          <div class="info-list">
            <li class="list-group-item"><strong>ID:</strong> ${mang.getId()}</li>
            <li class="list-group-item"><strong>Email:</strong><a href='mailto:${mang.getEmail()}'>${mang.getEmail()}</a></li>
            <li class="list-group-item"><strong>Office Number:</strong> ${mang.getOfficeNumber()}</li>
          </div>
        </ul>

      </div>
    </div>
  </div>


`
  })  

//filtering for engineer and appending to file
  const filterEngineer = titles.filter(function(role) {
    return role.title == 'Engineer'
})
  console.log(filterEngineer)
    filterEngineer.forEach(eng => {
    engCard += `<div class="col-3">
    <div class="card border-dark custom-column">
      <div class="card-body custom-engineer-body">
        <h5 class="card-title"><strong>${eng.getName()}</strong></h5>
        <p class="card-text"><i class="fas fa-glasses m-2"></i>Engineer</p>
      </div>
      <ul class="list-group">
        <div class="info-list">
          <div class="list-group-item"><strong>ID:</strong> ${eng.getId()}</div>
          <div class="list-group-item"><strong>Email: </strong><a href='mailto:${eng.getEmail()}'>${eng.getEmail()}</a></div>
          <div class="list-group-item"><strong>GitHub Username:</strong> <a target="_blank"
              href="https://github.com/${eng.getGitHub()}">${eng.getGitHub()}</a> </div>
        </div>
      </ul>

    </div>
  </div>`
})
const filterIntern = titles.filter(function(role) {
  return role.title == 'Intern'
})
console.log(filterIntern)
  filterIntern.forEach(intern => {
  internCard += `<div class="col-3">
  <div class="card border-dark custom-column">
    <div class="card-body custom-intern-body">
      <h5 class="card-title"><strong>${intern.getName()}</strong></h5>
      <p class="card-text"><i class="fas fa-user-graduate m-2"></i>Intern</p>
    </div>
    <ul class="list-group">
      <div class="info-list">
        <div class="list-group-item"><strong>ID:</strong> ${intern.getId()}</div>
        <div class="list-group-item"><strong>Email: </strong> <a href='mailto:${intern.getEmail()}'>${intern.getEmail()}</a></div>
        <div class="list-group-item"><strong>School:</strong> ${intern.getSchool()}</div>
      </div>
    </ul>

  </div>
</div>`
})
}





function renderMarkdown(team) {
  mapping(team)
    return `<!doctype html>
    <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    
      <link rel="stylesheet" href="./dist/style.css">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      
      <title>Team Generator</title>
    </head>
    
    <body class="body">
      <div class="jumbotron jumbotron-fluid custom-jumbotron">
        <div class="container">
          <h1 class="display-4">Team Generator</h1>
        </div>
      </div>
    
      <div class="row justify-content-center row-cols-1">
       ${mangCard}
    
${engCard}
    
        ${internCard}
      </div>
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    
    
    
    </body>
    
    </html>`
}



module.exports = renderMarkdown 