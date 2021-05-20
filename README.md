# dream-team-generator

Title: Dream-Team Generator</br>
Student: Dylan Trecker</br>
Description: .</br>
Full Repository: https://github.com/d-trecker/dream-team-generator.git</br>
Get the repository by: git@github.com:d-trecker/dream-team-generator.git </br>
Video Link: </br>

User Story</br>
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles


Acceptance Criteria</br>
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

-

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

-

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

-

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

-

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

-

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

-

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

-

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

-


</br>
</br>

Grading Requirements
This Challenge is graded based on the following criteria:

Deliverables: 15%
A sample HTML file generated using the application must be submitted.

Your GitHub repository containing your application code.

Walkthrough Video: 32%
A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.

The walkthrough video must show all four tests passing from the command line.

The walkthrough video must demonstrate how a user would invoke the application from the command line.

The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

The walkthrough video must demonstrate a generated HTML file that matches the user input.

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Uses the Inquirer package (Links to an external site.).

Uses the Jest package (Links to an external site.) for a suite of unit tests.

The application must have these classes: Employee, Manager, Engineer, and Intern.

Repository Quality: 13%
Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains a high-quality README with description and a link to a walkthrough video.