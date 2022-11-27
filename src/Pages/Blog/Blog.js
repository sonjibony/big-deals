import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 mx-auto my-24">
      <h2 className="text-5xl">WELCOME</h2>
      <h4 className="text-2xl">ENJOY YOUR STAY!</h4>
      <div className="collapse my-5 rounded">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-accent  font-bold peer-checked:bg-accent peer-checked:text-black text-lg text-black">
          1. What are the different ways to manage a state in a React
          application?
        </div>
        <div className="collapse-content bg-accent text-primary-content peer-checked:bg-accent peer-checked:text-black text-lg">
          <p>
            There are four main types of state you need to properly manage in
            your React apps: <br /> <br />
            1. Local (UI) state – Local state is data we manage in one or
            another component. Local state is most often managed in React using
            the useState hook. <br /> <br />
            2. Global (UI) state – Global state is data we manage across
            multiple components. Global state is necessary when we want to get
            and update data anywhere in our app, or in multiple components at
            least. <br /> <br />
            3. Server state – Data that comes from an external server that must
            be integrated with our UI state. Server state is a simple concept,
            but can be hard to manage alongside all of our local and global UI
            state. <br /> <br />
            4. URL state – Data that exists on our URLs, including the pathname
            and query parameters. <br /> <br />
          </p>
        </div>
      </div>
      <div className="collapse my-5 rounded">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-accent text-black font-bold peer-checked:bg-accent peer-checked:text-black text-lg">
          2. How does prototypical inheritance work?
        </div>
        <div className="collapse-content bg-accent text-accent-content peer-checked:bg-accent peer-checked:text-black text-lg">
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the Prototype of an object,
            we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div className="collapse my-5 rounded">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-accent text-black font-bold peer-checked:bg-gradient-to-r from-accent to-accent peer-checked:text-black text-lg">
          3. What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content bg-accent text-accent-content peer-checked:bg-gradient-to-r from-accent to-accent peer-checked:text-accent-content text-lg">
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, we should write them
            because if done correctly, it can help detect early flaws in code
            which may be more difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-accent text-black font-bold peer-checked:bg-accent peer-checked:text-black text-lg">
          4. What is the differences between React, Angular and Vue?
        </div>
        <div className="collapse-content bg-accent text-black peer-checked:bg-accent peer-checked:text-black text-lg">
          <p>
            Both - Angular JS and React JS frameworks are used to create web
            interfaces for front end development. Angular is Google's matured
            and advanced JavaScript framework based on TypeScript, whereas Vue
            is a progressive open-source front-end JavaScript framework created
            by Evan You.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
