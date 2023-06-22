//your JS code here. If required.

    // Function to update the time and date dynamically
    function updateTimeAndDate() {
      const timerElement = document.getElementById("timer");
      const currentDate = new Date();

      // Format the time and date
      const timeString = currentDate.toLocaleTimeString();
      const dateString = currentDate.toLocaleDateString();

      // Update the content of the <p> element
      timerElement.textContent = ` ${dateString}, ${timeString} ,`;
    }

    // Call the function initially to display the current time and date
    updateTimeAndDate();

    // Update the time and date every second (1000 milliseconds)
    setInterval(updateTimeAndDate, 1000);
  
