                      Sensor-Based Automatic Door System

* Project Overview

This project is a real-time web simulation of an automatic sensor-based door system, similar to those used in shopping malls, airports, and office buildings. It demonstrates how doors automatically open and close when a person is detected within a sensor range.

* Objective

To simulate the working of an automatic door system using basic web technologies and demonstrate sensor-based interaction in a simple and visual way.

* Technologies Used

* **HTML** – Structure of the web page
* **CSS** – Styling and door animations
* **JavaScript** – Sensor logic and interaction

* Features

*  Sensor-based detection (hover to simulate presence)
*  Automatic door opening and closing
*  Sensor indicator (Red = No detection, Green = Detection)
*  Delay before automatic closing (realistic behavior)
*  Smooth animations using CSS transitions
*  Smart interaction handling to avoid flickering

* How It Works

* A "sensor zone" is created on the webpage.
* When the user hovers over the sensor zone:

  * The system detects presence
  * The sensor indicator turns green
  * The door opens automatically
* When the user leaves the sensor zone:

  * The system waits for a short delay
  * Then the door closes
  * The sensor indicator turns red

* Project Structure

```
project-folder/
│── index.html
│── style.css
│── script.js
│── README.md
```

* How to Run the Project

1. Download or clone this repository
2. Open the project folder
3. Run the `index.html` file in any web browser

* Use Cases

This system is commonly used in:

* Shopping malls
* Airports
* Hospitals
* Office buildings

* Future Enhancements

* Add door opening/closing sound effects
* Improve UI with glass door design
* Integrate real sensors using Arduino
* Add AI-based human detection simulation

* Author

A.Keerthika

This project is created for educational and demonstration purposes.
