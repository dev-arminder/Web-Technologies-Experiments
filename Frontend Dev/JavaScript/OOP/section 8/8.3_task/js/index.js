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
  }
}
Movie.prototype.addPrequel = function(movie) {
  const targetObj = {
    prequel: movie.fullTitle,
    name: this.fullTitle,
    sequel: null
  };
  const obj = {
    prequel: null,
    name: movie.fullTitle,
    sequel: this.fullTitle
  };
  if (this.movies.length === 0) {
    this.movies.push(targetObj);
    this.movies.push(obj);
  } else {
    for (let key in this.movies) {
      if (this.movies.name === targetObj.name) {
        //   If Movie Already Exist
        //  FInd index and Add new Movie After that
        this.movies.splice(key, 0, obj);
      } else {
        //   If Movie doesn'e exist
        //   First push target movie then Object
        this.movies.push(targetObj);
        this.movies.push(obj);
      }
    }
  }
};
Movie.prototype.addSequel = function(movie) {
  const targetObj = {
    prequel: movie.fullTitle,
    name: this.fullTitle,
    sequel: null
  };
  const obj = {
    prequel: null,
    name: movie.fullTitle,
    sequel: this.fullTitle
  };
  if (this.movies.length === 0) {
    this.movies.push(obj);
    this.movies.push(targetObj);
  } else {
    for (let key in this.movies) {
      if (this.movies.name === targetObj.name) {
        //   If Movie Already Exist
        //  FInd index and Add new Movie After that
        if (key === 0) {
          this.movies.unshift(obj);
        } else {
          this.movies.splice(key - 1, 0, obj);
        }
      } else {
        //   If Movie doesn'e exist
        //   First push target movie then Object
        this.movies.push(obj);
        this.movies.push(targetObj);
      }
    }
  }
};
Movie.prototype.getAllParts = function() {};

function ActionMovie(movieLength, fullTitle, ageCategory) {
  Movie.call(this, movieLength, fullTitle, ageCategory);
}
ActionMovie.prototype = Movie.prototype;
ActionMovie.prototype.constructor = ActionMovie;
ActionMovie.prototype.movies = [];

function DramaMovie(movieLength, fullTitle, ageCategory) {
  Movie.call(this, movieLength, fullTitle, ageCategory);
}
DramaMovie.prototype = Movie.prototype;
DramaMovie.prototype.constructor = DramaMovie;
DramaMovie.prototype.movies = [];

const requiemForADream = new DramaMovie(80, "Requiem For A Dream", 18);
const madMax = new ActionMovie(90, "Mad Max I", 16);
const madMax2 = new ActionMovie(120, "Mad Max II", 16);
madMax2.addPrequel(madMax);

const madMax3 = new ActionMovie(110, "Mad Max III", 16);
madMax2.addSequel(madMax3);
