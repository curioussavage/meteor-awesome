Template.taylor.helpers({
  posts: function () {
    return Posts.find({}, {});
  }
});

Template.taylor.events({
  "submit .new-chat": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;
    console.log(text)

    Posts.insert({
      item: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});