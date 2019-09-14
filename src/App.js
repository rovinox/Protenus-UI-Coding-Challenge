import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to the Protenus UI Coding Challenge!</h1>
      </header>
      <section className="App-instructions">
        <h2>Introduction</h2>
        <p>Congratulations on making it this far!</p>
        <p>
          The purpose of this challenge is for us to understand how you code and to see how you
          tackle a problem. We are not expecting a "right" or a "perfect" solution - so let loose
          and do what you do best.
        </p>
        <h2>Problem</h2>
        <p>
          For this challenge, you are tasked with creating a Netflix-style movie queue. The hard
          requirements are simply 1) <strong>present a list of movies in a catalog</strong> and
          2) <strong>allow the user to manage their personal queue by adding, removing, and
          re-ordering the movies.</strong> Beyond that you are free to add to the application as
          you see fit. This may come in the form of styling, graphics, a lightweight back-end,
          unit-tests, etc.
        </p>
        <h2>Technologies</h2>
        <p>
          As our products are built in React, we would prefer the solution to this challenge would
          follow suit. However, if you are unfamiliar with React but an absolute ninja in Angular
          for example, we are able to work with that. Otherwise, you are encouraged to add any
          dependencies/technologies to make this task easier.
        </p>
        <h2>Logistics</h2>
        <p>
          If at any time you have a question about this task, feel free to reach out to one of
          the development team members. When you have finished we would like you to <strong>
          submit your code by way of Dropbox, Google Drive, etc. (<em>not</em> a Git branch/fork).
          </strong>
        </p>
      </section>
    </div>
  );
}

export default App;
