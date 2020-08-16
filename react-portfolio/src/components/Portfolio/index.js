import React, { useState } from "react";
import Row from "../Row/index";
import "./style.css";
import Carousel from "../Carousel";
import Modal from "../Modal";


function Portfolio() {    
    const [projectModal, setProjectModal] = useState([
        {
          title: "Book Search",
          id: "popup-book",
          img: require('./assets/Bookwork-Mobile.PNG'),    
          description:
            "This is a book search application in which the user can search for books based on at least one of three search parameters. The app utilises the Google Books and Exchange Rate APIs to provide the user with information about their chosen book and its retail price in GBP. There is also functionality allowing the user to add books to their read list and to specify a target read date. The read list is saved to local storage and will persist when the user reloads the page.",
          gif: require('./assets/book-gif.gif'),
          picAlt: "book",
          gifAlt: "book-demo",
          repo: "https://github.com/JoeDodgson/Bookworm",
          deployed: "https://joedodgson.github.io/Bookworm/home.html" 
        },
        {
          title: "Team Generator CLI",
          id: "popup-team",
          img: require("./assets/cli-mobile.PNG"),
          description:
            "This is a a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application creates an HTML file that displays a nicely formatted team roster based on the information provided by the user. The app runs as a Node CLI.",
          gif: require("./assets/cli-demo.gif"),
          picAlt: "cli",
          gifAlt: "cli-gif",
          repo: "https://github.com/phillidp1989/Team-Generator",
          deployed: null
        },
        {
          title: "Employee Tracker",
          id: "popup-employee",
          img: require("./assets/employee-screen.PNG"),
          description:
            "A command-line application that allows users to view and update employees, roles, and departments. The project utilises a MySQL database and prompts the user for responses using the Inquirer package.",
          gif: require("./assets/employee-.gif"),
          picAlt: "employee",
          gifAlt: "employee-gif",
          repo: "https://github.com/phillidp1989/Employee-Tracker",
          deployed: null
        },
        {
          title: "Recipe Search",
          id: "popup-grub",
          img: require("./assets/grub.PNG"),
          description:
            "A full-stack, recipe search app built with MySQL, Node, Express, Handlebars and Passport.js. The app requires users to login using Google OAuth and enables searching and viewing of recipes. Chosen recipes can then be saved to the user's dashboard with additional notes saved to an SQL database.",
          gif: require("./assets/grub.gif"),
          picAlt: "get-grub",
          gifAlt: "grub-gif",
          repo: "https://github.com/meeday/git_grub",
          deployed: "https://get-grub-app.herokuapp.com"
        },
        {
          title: "Employee Directory",
          id: "popup-directory",
          img: require("./assets/directory.PNG"),
          description:
            "This employee directory utilises React to create the UI and manage state changes. Users can search fo employees based on their name and the list can be sorted based on first or last name. The application utilises functional components and hooks to set and update local state.",
            gif: require("./assets/demo-gif.gif"),
          picAlt: "directory",
          gifAlt: "directory-gif",
          repo: "https://github.com/phillidp1989/Employee-Directory-React",
          deployed: "https://salty-escarpment-58993.herokuapp.com/"
        },
      ]);

  return (
    <React.Fragment>
      <Row id="portfolio-heading">
        <h1>Portfolio</h1>
        <div className="line"></div>
      </Row>
      <Carousel />
      {projectModal.map((project, index) => (
          <Modal 
            key={index}
            title={project.title}
            id={project.id}
            img={project.img}
            description={project.description}
            gif={project.gif}
            picAlt={project.picAlt}
            gifAlt={project.gifAlt}
            repo={project.repo}
            deployed={project.deployed}
          />
      ))}
      
    </React.Fragment>
  );
}

export default Portfolio;
