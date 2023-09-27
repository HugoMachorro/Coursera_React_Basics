function ModeToggle() {
  var darkModeOn = true;
  const darkMode = <h1>Dark Mode is On</h1>;
  const lightMode = <h1>Light Mode is On</h1>;
  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn === true) {
      console.log("Dark Mode is on");
    } else {
      console.log("Light Mode is on");
    }
  }
  return (
    <div>
      {darkModeOn ? darkMode : lightMode},
      <button onClick={handleClick}> Click Me!</button>
    </div>
  );
}

export default ModeToggle;