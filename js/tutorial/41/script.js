var person = {
  age: 30,
  name: 'Text',
  job: 'Some',
  displayInfo: function (ms) {
    // var self = this;

    setTimeout(function () {
      console.log('Name: ', this.name);
      console.log('Job: ', this.job);
      console.log('Age: ', this.age);
    }.bind(this), ms)
  }
};

person.displayInfo(5000)