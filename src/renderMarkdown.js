// .map()
// createCard()


// function createCard()
//   const allManager = team.filter(function(role) {
//     return role.officeNumber
//   });

//     allManager.forEach(function(each) {

      
// })
//   console.log(allManager)
//   const allEngineer = team.filter(function(role) {
//     return role.github
// });
//   console.log(allEngineer)
//   const allIntern = team.filter(function(role){
//     return role.school

// })





function renderMarkdown(titles) {
    return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <title>Hello, world!</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
    
        <div class="card">
        ${titles.id}
    
        </div>
    
    
    
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
    
      </body>
    </html>`
}




module.exports = renderMarkdown 