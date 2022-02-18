/* Create 3 constructor functions:
Movie, ActionMovie and DramaMovie

ActionMovie and DramaMovie should 'inherit' Movie
Movie should take 3 arguments: movieLength, fullTitle, ageCategory. They should not be visible as parts of the instances.
Movie should have access to methods addPrequel, addSequel and getAllParts (you can add any other if needed). 
addSequel and addPrequel makes a connection between objects so that calling getAllParts method on any of the object should print names of all movies in the series. Do not add any external arrays in order to solve this task.

sample usage:

const requiemForADream = new DramaMovie(80,"Requiem For A Dream", 18);
const madMax = new ActionMovie(90,"Mad Max I", 16);
const madMax2 = new ActionMovie(120,"Mad Max II", 16);
madMax2.addPrequel(madMax);

const madMax3 = new ActionMovie(110,"Mad Max III", 16);
madMax2.addSequel(madMax3);
madMax3.getAllParts(); // prints "Mad Max I" "Mad Max II" "Mad Max III"

2. How such a data structure is called?
*/

function Movie(movieLength, fullTitle, ageCategory) {
  if (new.target === undefined) {
    this.movieLength = movieLength;
    this.fullTitle = fullTitle;
    this.ageCategory = ageCategory;
    this.prequel = null;
    this.sequel = null;
  }
}

Movie.prototype.addPrequel = function(movie) {
  this.prequel = movie;
  movie.sequel = this;
};

Movie.prototype.addSequel = function(movie) {
  this.sequel = movie;
  movie.prequel = this;
};

Movie.prototype.getAllParts = function() {
  // If method is called upon first object
  if (this.prequel === null) {
    while (this.sequel !== null) {
      console.log(this.fullTitle);
    }
  }

  //  If method is called upon last object

  // If method is called on in between object
};

function ActionMovie(movieLength, fullTitle, ageCategory) {
  Movie.call(this, movieLength, fullTitle, ageCategory);
}
ActionMovie.prototype.__proto__ = Movie.prototype;

function DramaMovie(movieLength, fullTitle, ageCategory) {
  Movie.call(this, movieLength, fullTitle, ageCategory);
}
DramaMovie.prototype.__proto__ = Movie.prototype;

const requiemForADream = new DramaMovie(80, "Requiem For A Dream", 18);
const madMax = new ActionMovie(90, "Mad Max I", 16);
const madMax2 = new ActionMovie(120, "Mad Max II", 16);
madMax2.addPrequel(madMax);

const madMax3 = new ActionMovie(110, "Mad Max III", 16);
madMax2.addSequel(madMax3);

madMax.getAllParts();
