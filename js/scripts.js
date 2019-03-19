function Ticket(Movie, Time, Age) {
  this.Movie = Movie;
  this.Time = Time;
  this.Age = Age;
}

Ticket.prototype.cost = function() {
  return this.Movie + " " + this.Time + " " + this.Age;
}

var add = function(blade, speed, speed2, time4pm, time9pm, over18, under18) {
  return(Number(blade) + Number(speed) + Number(speed2) + Number(time4pm) + Number(time9pm) + Number(over18) + Number(over18));
};

$(document).ready(function() {
  $("form#ticket").submit(function() {
    event.preventDefault();
    var blade = $("select#blade").val();
    var speed = $("select#speed").val();
    var speed2 = $("select#speed2").val();
    var time4pm = $("select#time4pm").val();
    var time9pm = $("select#time9pm").val();
    var over18 = $("select#over18").val();
    var under18 = $("select#under18").val();

    var cost = add(Number(over18), Number(under18), Number(time4pm), Number(time9pm))

    if (cost = 0 ) {
      var answer = "$10"
    }
    if (cost < 3 ) {
      var answer = "$5"
    };


    $("#answer").show();
  });
});
