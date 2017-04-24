let userName;
let userId;

// Called when google auth successfully finishes
function onSignIn(googleUser) {
  // Only redirect & login if this if the first time
  if ($('#login')[0].style.display != "none") {
    const profile = googleUser.getBasicProfile();

    // Send username and userId to backend
    userName = profile.getName();
    userId = profile.getId();
    $.get("/login", {name: userName, id: userId});

    // Refresh page
    window.location = window.location;
  }
}	

// Called when user clicks Sign Out
function onSignOut() {
	let auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut();
  $.get("/logout");

  // Refresh page
  window.location = window.location;
}