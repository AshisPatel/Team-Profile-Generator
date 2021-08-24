<h1>Team Profile Generator</h1>
  <image src='https://img.shields.io/badge/license-MIT-green.svg' />
  <h2>Description</h2>
  
  The Team Profile Generator is a CLI application that allows you to build a team consisting of a team manger, engineer(s), and intern(s). The provided inputs will be the names, ID's, and emails for team member, and then a specific input based on the role. The team manager will need an office number, the engineer will need their github username, and the intern will need their school to be input. The end result is a simple website that displays the team name and each member's information on a card. 
  
  <h3 style="font-weight:bold">Functionality</h3>

  Functionality wise, this app works by first prompting the user for an optional team name (My Team is displayed if blank is provided). A function called getEmployeeData is then run to gather the basic employee data and the team manager's office number. The team manager's info is stored as a Manager object before the user is prompted to add a new member via the getNextMember() function. Based on the selected option, the prompt will either terminate or call the getEmployeeData(role) function with the role that was selected (either engineer or inter) as a parameter. Once the user selects "No, I'm done!" the webpage HTML is generated by calling on the generatePage() function from the page-template.js file in the src directory. Then, the HTML content is written into an index.html by the writeFile function from the generate-site.js file in the utils folder. The style.css in the src folder is sent to the dist directory as well by the copyFile function from the generate-site.js file. 

  <h2>Table of Contents</h2>
 <ul>
  <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contribution">Contribution</a></li>
    <li><a href="#tests">Tests</a></li>
    
  <li><a href="#questions">Questions</a></li>
 </ul>

  <h2 id="installation">Installation</h2>
  <ol>
    <li>Install node.js for your operating system.</li> 
    <li>Ensure that the 'node' command can be ran in the terminal. If it does not work, fix your PATH. </li> 
    <li>Clone or download the contents of this project's repo onto your local machine. </li> 
    <li>Navigate to the copied files through the terminal.</li> 
    <li>Run 'npm install' in the terminal to download the required dependencies. </li> 
    <li>Congratulations! You can run the Team Profile Generator now. </li> 
    
  </ol>
  

  <h2 id="usage">Usage</h2>
  <p>After following the installation instructions, run "node index.js" in your terminal while you are in this cloned/copied repos root directory. Go through the prompts and once done, a index.html file (and corresponding stylesheet) will be generated in the dist folder. Open the index.html file to verify all of your inputs work. If you need more direction, please watch the walkthrough video linked below or contact me! 
  
  [Team Profile Generator Walkthrough Video](https://drive.google.com/file/d/1Balalg0g8wHSdK0LmtTkNbVXiprwQ_0h/view)
  </p>
  
 
  
  <h2 id="license">License</h2>

  MIT - Find out more about this project's license(s) at: [https://choosealicense.com/licenses/](https://choosealicense.com/licenses/)

  <h2 id="contribution">Contribution</h2>
  <p>Send me an email (my email can be found in the 'Questions' section) about any bugs that you find or features that you think should be included in this Team Portfolio Generator! I would be more than happy to open the project up and create any branches for contributions. </p>
  
  
  <h2 id="tests">Tests</h2>
  <ol>
    <li>If you've followed the installation instructions, jest should have been installed as a dependency. </li> 
    <li>Run npm run test to test four objects at once or add "Employee" / "Manager" / "Engineer" / "Intern" to test each class individually. </li> 
    <li>Inside the __tests__ directory, you can find all tests written for each object. If you want to add anymore, please checkout the jest documentation. </li> 
    
  </ol>
  

  <h2 id="questions">Questions</h2>
  
  <p> 
  Made by: AshisPatel<br />
  Github Profile: https://github.com/AshisPatel<br />
  </p>Email: ashis.n.patel@gmail.com<br />Please feel free to email me if you would like to get in touch!

  <h2>End Note - Thank You to the Reader</h2>

  Thank you for taking the time to visit my application and read through the README! I write this without hoping to jinx myself, that I am getting more comfrotable with using node.js and developing CLI applications! I even ran into a real-life example where creating such a thing would be helpful, aside from the purposes of testing. Editing an HTML or XML file directly can be intimidating for someone who never looks at such files (much like how scared I was of the commandline not but a few weeks back), but having a nice flow of prompts that generates the HTML/XML for you? Much better! Either way, object-oriented programming (OOP) threw me for a bit of a loop at first, but I think I can see the benefits now! Test-driven-development also SIGNIFICANTLY helped my work flow. Who knew trying things the _simple_ way first, and then making it more complex would be better than trying to write complex stuff from jump? That might sound sarcastic, but I honestly did not consider it until this week. That's enough rambling from me, please enjoy the fun fact and gif from my collection of things that make my laugh! Hopefully they brighten up your day, or give you something to share with a friend! 

  **Fun Fact:** When meat and peas are added to Fettuccine Alfredo, the dish is called 'Hay and Straw'! Also, the jarred alfredo sauce in supermarkets? That's thickened using starch and not actual cheese... 

  ![Animated man gets tackled by friend in a dramatic leap](https://github.com/AshisPatel/Team-Profile-Generator-Week-10-Challenge/blob/main/assets/images/leap.gif)
  