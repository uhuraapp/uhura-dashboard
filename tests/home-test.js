var email =  "user-"+(Math.random()*100)+"@x.com"

casper.test.begin('Home Links/Forms', 5, function suite(test) {
  casper.start("http://127.0.0.1:3002", function() {
    test.assertExists('form[action="/enter"]', "enter form is found");
    test.assertExists('a[href="/auth/google"]', "google link is found");
    test.assertExists('a[href="/auth/facebook"]', "facebook link is found");


    this.fill('form[action="/enter"]', {
      email: email
    }, true);
  });

  casper.then(function() {
    // test.assertEval(function() {
    //   return document.querySelector('#email').value == email;
    // }, "auto fill email is ok");

   test.assertTitle("Sign Up - UhuraApp", "title is ok");
   test.assertExists('form[action="/users/sign_up"]', "Sign Up form is found");
 });

  casper.run(function() {
    test.done();
  });
});