# Brian Boyko's Boilerplate (BBBoiler)

## (This is a work in progress, please bear with me as I actually build this thing out.)

One of the most powerful tools today for managing state is Redux, and one of the
most powerful frameworks is React.  

However, when users get started with React and Redux, they may get overwhelmed.
Typically boilerplates are designed for users to start working right away on their
apps, but it takes on faith a number of design decisions. In short, it's way
too much, too fast.

This is not a normal boilerplate.  What this is going to be is a full-featured
application, completed in stages.  You can use the application itself as a boilerplate,
or go back and examine the stages in order, seeing how the application was built
with React/Redux.

You can use this boilerplate, and follow along below, by cloning the repo on
your machine.

## Our application

Bipolar Disorder is a mixed blessing. It's well known that creativity and Bipolar
disorder are often comorbid, and certainly programmers and engineers will often
know someone who has some form of mood disorder.  

What we're going to create is a mood tracker application, and deploy it on Heroku.

## Our Stories

* As a user, I want to log in securely. No one but myself should have access to my
information.  

* As a user, I want to be able to track my mood swings by day, pointing out highs
and lows for that day.

* As a user, I'd like that data to be remembered and restored for me between login
sessions.

* As a user, I'd like to be able to visualize this data in a chart.

* As a user, I'd like to go back and change previous data (as I may make a mistake);

* As a user, I want to be able to keep a diary as well, where I can write down events
and triggers which resulted in my high and low points.  This should be optional.

* As a user, I'd like to be able to authorize my doctor (and only my doctor)
to see (but not edit) this information.

* As a developer, I want my users to be able to report bugs to me.

* As a developer, I want to be able to replay exactly what they did to create the bug.

* As a developer, I want to make sure that I can replay what they did *without*
replaying what they entered, specifically, to preserve user privacy.

* As a developer, I want to use best practices possible.

## Branches:

```
   Master (The main branch)
      stage01-master
      stage01-[new feature or bug fix]
      stage02-master
      stage02-[new feature or bug fix]
      ...etc.    

```

### Master

This branch will contain the latest version of the full application.

### stage01

We'll set up the very basics of the files. We'll start by creating directories
which will help organize our application, configure Babel, and set-up webpack
to create our builds for us.  

We'll also be using Webpack's server so we don't have to create static build files.
We'll set up an index.html file, and a style.css file, and create a client directory
(so that we know we're dealing with front-end code).

We'll also be using Babel, using the plugins for es2015 (that is, ES6, with all
it's syntactic goodies), react (so that we can transpile JSX to vanilla JS on the fly),
and stage-0 -- which includes experimental features which will make coding a lot
easier when it comes to asynchronous functionality.  

### stage02

In this stage, we'll start building out a very basic Redux/React app.  We'll be
using [Material-UI](http://material-ui.com/) so that we can just import some components
immediately (saving us the trouble of building and styling them ourselves.) We'll also
create three actions: One to clear the state, one to hydrate the state, and one test action,
which will simply be a proof of concept.  

We'll also create a Root component, and an App component to set up our build.

### stage03

In Stage 2, we effectively created a proof of concept and minimum viable product.  That's great,
but what we didn't do is ensure that it was correctly tested.  Before the application gets any
more complex, we're going to start adding tests using Mocha and Enzyme.  And from here
on out, we'll be using Test Driven Development -- where you literally write the tests first.

If you're not familiar with TDD, trust me, it makes things a lot simpler and alerts you to when
something you do affects something else in ways you might not expect.  
