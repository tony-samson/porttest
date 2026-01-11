function defaultload(){
	document.getElementById("bodybox").innerHTML = `

 <div class="container-fluid my-5 px-4">
      <div class="row align-items-start">

        <!-- LEFT: Carousel 70% -->
        <div class="col-md-8 mb-4">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="images/ROBO.jpg" class="d-block w-100" alt="Robot 1">
              </div>
              <div class="carousel-item">
                <img src="images/r2.jpg" class="d-block w-100" alt="Robot 2">
              </div>
              <div class="carousel-item">
                <img src="images/r3.jpg" class="d-block w-100" alt="Robot 3">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>

        <!-- RIGHT: Project Cards 30% -->
        <div class="col-md-4">

          <!-- Gravity Simulation Card -->
          <div class="project-card">
  <img src="images/grav.png" class="project-image" alt="Gravity Simulation">
  <div class="project-info mt-2">
    <h4>Gravity Simulation</h4>
    <p>Physics-based n-body gravity simulation built using VPython, visualizing orbital dynamics, forces, and motion in real time.</p>
    <div class="project-actions">
      <a href="#" class="project-btn">▶ Watch</a>
      <a href="#" class="project-btn icon-btn"><i class="fa fa-github"></i></a>
    </div>
  </div>
</div>

<div class="project-card">
  <img src="images/atom.png" class="project-image" alt="Quantum Lab">
  <div class="project-info mt-2">
    <h4>Quantum & Nuclear Lab</h4>
    <p>Simulations visualizing atomic orbitals, radiation interactions, hydrogen fusion (H → He), and U-238 fission with real-time animations.</p>
    <div class="project-actions">
      <a href="#" class="project-btn">View Project</a>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
    <div class="container-fluid iframe-container">

      <iframe width="440" height="300" src="https://www.tinkercad.com/embed/5ZIjaNlWrWI?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <div class="description-boxx">
        <h5>Multiplexer</h5>
        <p>2x1 and 4x1 Multiplexer was built using NAND, AND, OR gates. we have select lines to choose the input
          Dip
          switches. We can seee the output through LED. please click simulate to try.</p>
      </div>

      <iframe width="440" height="300" src="https://www.tinkercad.com/embed/745r3ZrUzwF?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <div class="description-boxx">
        <h5>NAND to All gates</h5>
        <p>Using universal gate NANDs implementing the funtionality every other gate iput are the Dipswitches and
          output
          are the LED. It lits up only when there is 1 refer to the truth table. use the simulate button to try.
        </p>
      </div>

      <iframe width="440" height="300" src="https://www.tinkercad.com/embed/4g3uPa4wCVq?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <div class="description-boxx">
        <h5>Birthday gift to my sister</h5>
        <p>Defined frequency of buzzer as notes in array with the durations used in a
          loop to create happy
          birthday, beautiful people song,
          the LCD cursor to display sister in different languages. please listen by clicking simulate button.</p>
      </div>

      <iframe width="440" height="300" src="https://www.tinkercad.com/embed/3dtkOZANHKt?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <div class="description-boxx">
        <h5>Logic Gates</h5>
        <p>Just with two Dip switches attached to gates and each output form every gate has LED beside according
          to the
          truth table we can see the LED lit up when the output is 1 and doesnt turn on when the output is zero.
          please
          click simulate to try.</p>

      </div>

      <iframe width="440" height="300" src="https://www.tinkercad.com/embed/gddKoRsL6ac?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <div class="description-boxx">
        <h5>Full-adder</h5>
        <p>Using two XOR gates, two AND gates, and one OR gate, I built a full adder where the carry can also be
          simulated. The Cout and Sum outputs are displayed using LEDs.</p>

      </div>


      <iframe width="440" height="300" src="https://www.tinkercad.com/embed/jxahFSI7kvt?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>

      <div class="description-boxx">
        <h5>Half-adder & Subractor</h5>
        <p>Using one XOR gates, one AND gate, one NAND gate, and one OR gate, I built a half adder and subtractor
          in which the carry and borrow can also be simulated. The Cout, Borrow (blue), and Sum outputs are
          displayed using LEDs.</p>

      </div>
    </div>
  </div>

	`;
}

function certifications(){
	 
	document.getElementById("bodybox").innerHTML = `<div class="w3-content w3-display-container">
  <img class="mySlides" src="images/1.png" style="width:100%; display: block;">
  <img class="mySlides" src="images/2.png" style="width:100%; display: none;">
  <img class="mySlides" src="images/3.png" style="width:100%; display: none;">
  <img class="mySlides" src="images/4.png" style="width:100%; display: none;">
  <img class="mySlides" src="images/5.png" style="width:100%; display: none;">
  <img class="mySlides" src="images/6.png" style="width:100%; display: none;">
  <button class="w3-button  w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
  <button class="w3-button  w3-display-right" onclick="plusDivs(1)">&#10095;</button>
</div><br><br><br>`;
	}

  function mathmodel(){
    document.getElementById("bodybox").innerHTML = `
    <div class="container py-4">
      <div class="row align-items-center mb-4 project-row">
        <div class="col-md-4">
         <a href="https://tony-samson.github.io/atoms/atom.html" target="_blank" rel="noopener">
          <img src="images/atom.png" class="img-fluid rounded" alt="Project 1">
          </a>
        </div>
        <div class="col-md-8">
          <h4>Quantum & Nuclear Lab</h4>
<p>
An interactive quantum and nuclear physics simulation visualizing atomic orbitals, radiation interactions, and nuclear reactions. Explore hydrogen ionization and fusion (H → He, ~10% under stellar conditions like the Sun) and uranium-238 fission as used in controlled nuclear reactors, with real-time particle bombardment, spectra, and dynamic animations.
</p>
          <a href="https://tony-samson.github.io/atoms/atom.html" class="project-btn" target="_blank" rel="noopener">View Project</a>
        </div>
      </div>
      <hr class="my-4 fade-divider">
      <!-- Project 1 -->
      <div class="row align-items-center mb-4 project-row">
        <div class="col-md-4">
         <a href="https://tony-samson.github.io/energy-loss-on-impact/en.html" target="_blank" rel="noopener">
          <img src="images/math_prj1.png" class="img-fluid rounded" alt="Project 1">
          </a>
        </div>
        <div class="col-md-8">
          <h4>Energy Loss on Impact of Different Materials</h4>
<p>
An interactive physics-based simulation that models energy loss during repeated impacts of different materials. 
Users can vary material properties, mass, applied force, and surrounding medium to observe how kinetic energy 
is dissipated into deformation, heat, and impulse. The system visualizes impact history, surface heat buildup, 
and temperature rise in real time using a custom JavaScript physics engine and canvas-based rendering.
</p>
          <a href="https://tony-samson.github.io/energy-loss-on-impact/en.html" class="project-btn" target="_blank" rel="noopener">View Project</a>
        </div>
      </div>
      <hr class="my-4 fade-divider">
 <!-- Project 2 -->
      <div class="row align-items-center mb-4 project-row">
        <div class="col-md-4">
         <a href="https://tony-samson.github.io/double-pendulum/double.html" target="_blank" rel="noopener">
          <img src="images/math_prj2.png" class="img-fluid rounded" alt="Project 2">
          </a>
        </div>
        <div class="col-md-8">
          <h4>Double Pendulum Simulation</h4>
<p>
This interactive double pendulum simulation demonstrates the emergence of chaotic motion in a nonlinear dynamical system. 
Users can continuously adjust the masses, gravitational strength, and damping to observe how small parameter changes lead 
to dramatically different trajectories. Real-time readouts of angular position and angular velocity for both pendulum arms 
highlight the system’s sensitivity to initial conditions and mass distribution. The simulation illustrates energy transfer 
between coupled pendulums, velocity amplification, and the breakdown of predictable motion—key characteristics of chaotic 
physics systems encountered in classical mechanics
</p>
          <a href="https://tony-samson.github.io/double-pendulum/double.html" class="project-btn" target="_blank" rel="noopener">View Project</a>
        </div>
      </div>
      <hr class="my-4 fade-divider">
    </div>
  `;

  }

function academics(){
document.getElementById("bodybox").innerHTML = '<H4 style="text-align:center;color:rgba(117, 233, 8, 0.726);"><b>Anurag Group of Institutions</b><i> (2018 - 2022)</i></h4>'+
'<p><i>Early in my undergraduate study, I was introduced to other programming languages like C#,'+
'C++, Java, Python, and SQL; web technologies like HTML,CSS,and JS. I understood the key'+
'features of each language and realized that one was an improvement over the other. My first'+
'computer science project was “Restaurant web application”, which is a Responsive web-page'+
'that consists of advanced CSS and JS that created awesome User Interaction, although it took a'+
'stressful month. This web-page was initially intended to store data from the web forms, but I'+
'took a Web development course which my college provided, that made my project more'+
'enthusiastic. In my fourth year, My Institution assigned a technology named “Internet of Things” where I'+
'needed to create a project in that field. My mentor guided me by teaching me an Embedded'+
'language and uploading the program to the microprocessor, and analyzed the calibrated values'+
'using Splunk. As my project in the final semester is related to the Internet of Things, I was able'+
'to publish the project paper on an IoT-based health monitoring smart watch that uses real-time'+
'calibrated values of sensors to receive data on a patient&#39;s health. This was my major project in'+
'the final semester. It would recognize abnormal data and transmit it to distant individuals such'+
'as doctors,nurses, and caregivers. The elderly and those who need to be monitored for'+
'conditions like paralysis or heart diseases will benefit from this idea. The setup involved'+
'connecting various sensors and peripherals to an Arduino UNO board with a Wi-Fi module,'+
'which sends the data to a program.	</i></p><br><br><br><br>';
}
function resume(){
		document.getElementById("bodybox").innerHTML = '<iframe src="images/Resume.pdf" height="900" width="100%"></iframe>';
}

function statistical() {
  document.getElementById("bodybox").innerHTML = `
    <div class="container py-4">
      
      <!-- Project 1 -->
      <div class="row align-items-center mb-4 project-row">
        <div class="col-md-4">
         <a href="https://tonysamson.shinyapps.io/linearregression/" target="_blank" rel="noopener">
          <img src="images/stat_project1.png" class="img-fluid rounded" alt="Project 1">
          </a>
        </div>
        <div class="col-md-8">
          <h4>Linear Regression Analysis</h4>
          <p>This project demonstrates linear regression on a dataset, predicting outcomes based on input variables. It uses statistical techniques to analyze trends and make forecasts.</p>
          <a href="https://tonysamson.shinyapps.io/linearregression/" class="project-btn" target="_blank" rel="noopener">View Project</a>
        </div>
      </div>
      <hr class="my-4 fade-divider">

        <div class="row align-items-center mb-4 project-row">
        <div class="col-md-4">
         <a href=" https://samsonadidela.shinyapps.io/regression/" target="_blank" rel="noopener">
          <img src="images/sn.png" class="img-fluid rounded" alt="Project 2"></a>
        </div>
        <div class="col-md-8">
          <h4>Regression Analysis</h4>
          <p>This app has Stepwise AIC, polynomial and interaction terms, and advanced diagnostics through correlation matrices and LOESS vs linear comparisons. The application emphasizes interpretability with coefficient significance tables, model performance metrics, residual analysis, and a dedicated prediction lab for real-time inference.</p>
          <a href=" https://samsonadidela.shinyapps.io/regression/" class="project-btn" target="_blank" rel="noopener">View Project</a>
        </div>
      </div>
<hr class="my-4 fade-divider">

      <!-- Project 2 -->
      <div class="row align-items-center mb-4 project-row">
        <div class="col-md-4">
         <a href="https://tonysamson.shinyapps.io/annova/" target="_blank" rel="noopener">
          <img src="images/stat_project2.png" class="img-fluid rounded" alt="Project 2"></a>
        </div>
        <div class="col-md-8">
          <h4>ANOVA Study</h4>
          <p>This ANOVA study determines whether statistically significant differences exist among multiple group means using one-way ANOVA, validates model assumptions through residual diagnostics, quantifies practical significance via effect size (η²), and identifies specific group differences using Tukey HSD post-hoc analysis.</p>
          <a href="https://tonysamson.shinyapps.io/annova/" class="project-btn" target="_blank" rel="noopener">View Project</a>
        </div>
      </div>
<hr class="my-4 fade-divider">

      <!-- Project 3 -->
      <div class="row align-items-center mb-4 project-row">
        <div class="col-md-4">
         <a href="https://tonysamson.shinyapps.io/simulations/" target="_blank" rel="noopener">
          <img src="images/stat_prj3.png" class="img-fluid rounded" alt="Project 3">
          </a>
        </div>
        <div class="col-md-8">
          <h4>Probability Simulation</h4>
          <p>A hands-on simulation of probability distributions and events. This project visually demonstrates concepts such as expected value and variance.</p>
          <a href="https://tonysamson.shinyapps.io/simulations/" class="project-btn" target="_blank" rel="noopener">View Project</a>
        </div>
      </div>

      <!-- Add more projects here in the same format -->

    </div>
  `;
}

function project(){
	var data =`
<div class="container">
  <div class="row justify-content-center g-4">

    <div class="col-md-6 col-lg-4">
      <div class="card shadow-lg h-100">
        <img src="images/Projec.jpg"
             class="card-img-top"
             style="height:300px; object-fit:cover;"
             alt="Project Image">

        <div class="card-body">
         <h4 class="card-title">IoT Health Monitoring (UnderGrad Project)</h4>
<p class="card-text">
• IoT-based wearable health monitoring system using Arduino UNO.<br>
• Monitors temperature, heart rate, blood pressure, body position, and glucose levels using LM35, MEMS, and heartbeat sensors.<br>
• Implemented Embedded C with Wi-Fi connectivity, real-time data calibration, alerts, and a local web dashboard for medical staff.
</p>

          <a href="#"  onclick="iot()" class="btn project-btn">View Project</a>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-lg-4">
      <div class="card shadow-lg h-100">
        <img src="images/drone.jpg"
             class="card-img-top"
             style="height:300px; object-fit:cover;"
             alt="Project Image">

        <div class="card-body">
      <h4 class="card-title">Autonomous Drone Navigation (RCSA)</h4>
<p class="card-text">
• Autonomous drone built using a Pixhawk flight controller and Raspberry Pi 5 with a 26-TOPS AI accelerator.<br>
• Uses computer vision and reinforcement learning for navigation through dense environments, object/material detection, obstacle avoidance, loop detection, and safe landing.
</p>

          <a href="#" onclick="drone()" class="btn project-btn disabled">In Progress</a>
        </div>
      </div>
    </div>

  </div>
</div>


  `;
  
	document.getElementById("bodybox").innerHTML=data;

}
function iot(){
  var data = `
  <!-- Back Button -->
  <button class="btn project-btn position-fixed top-0 start-0 m-3"
          onclick="project()"
          style="z-index:1050;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
         fill="currentColor" class="bi bi-caret-left-fill"
         viewBox="0 0 16 16">
      <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
    </svg>
  </button>

  <div class="container my-5">

    <h2 class="text-center">IoT Based Health Monitoring Smart Watch</h2>
    <br>

    <img src="images/Projec.jpg" class="img-fluid rounded mb-4">
<br><br>`+
'<h3> Project Members </h3><br> <p><b>Adidela Samson</b></p> <p><b> Apoorva Kyramkonda</b></p><p><b> Sindhu Anummula</b></p><br>'+

   '<h4> Tools</h4><br><ul><li>MEMS sensor</li><li>LM-35</li><li>Heart beat sensor</li><li>Wi-Fi Module</li><li>Arduino UNO</li><li>Tinker cad</li></ul>'+
	'<h4 style="text-align:center"><i>Discription</i></h4><br>'+
	'<p><i> This prototype divides into two devices: Transmitter, Receiver. Transmitter unit has all the sensors based on the requirement(also can include CGM), which connects to Arduino(Receiver unit). This unit has microprocessor that has Embedded C code which intakes all the values provided by the transmitter unit. These values are calibrated according to its unit scale in the program. This code is written in Embedded C with little HTML, tested, and simulated in Tinker cad.</i></p><br>'+
	'<p><i> This receiver has Wi-Fi module, which we can connect and view it on Local Host of port number <b>192.168.4.1</b>. Whenever the values are recognized as abnormal by the device, the web application sends an alret message to Nurses, Doctors, or takecarers</i></p><br>'
	+'<p><b>MEMS sensor</b> can identify whether the patient fell, slept,or moving. Based on axis, angle and the position of the hand.</p>'+
	'<p><b>LM-35</b> is a sensor that identifies the temperature level of a person, it is set <b>96 F</b> to <b>99 F</b> if the values are out of range then is sends a alert notification.</p>'+
	'<p><b>Heart beat sensor</b> can recognize Blood pressure, and based on the person is set to certain range.</p>'+
	'<p><b>Arduino UNO</b> consists of 14 Digital and 13 Analog pins, where we can connect to Wi-Fi module, LCD, and sensors. These pins are directly controlled by the <b>8086 Micro Processor</b>, in this processor we can insert Embedded C Code according to the logical and functional requirements.</p><br><br>';

  document.getElementById("bodybox").innerHTML = data;
}


function embedded() {
  var data = `

  <section class="container my-5">

    <!-- ROBOTICS PROJECTS -->
    <h2 class="text-center mb-4">Robotics Projects</h2>
    <div class="row">

      <!-- Robot 1 -->
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <a href="https://www.linkedin.com/posts/adidela-samson-tony_ev3-robot-writing-numbers-only-on-the-paper-activity-7393614926256365568-dIMv"
             target="_blank" rel="noopener">
            <img src="./images/ROBO.jpg" class="card-img-top" alt="EV3 Robot">
          </a>
          <div class="card-body">
            <h5 class="card-title">EV3 Robot with Custom Motor Control</h5>
            <p class="card-text">
              Autonomous EV3 robot built using LeJOS that mimics an arm, corrects gear errors,
              detects paper via color sensor, and writes digits 0–9.
            </p>
            <a href="https://www.linkedin.com/posts/adidela-samson-tony_ev3-robot-that-mimics-human-arm-activity-7393614024195698688-ogpL" class="project-btn" target="_blank" rel="noopener">Watch Pt-2</a>
           <a href="https://www.linkedin.com/posts/adidela-samson-tony_ev3-robot-writing-numbers-only-on-the-paper-activity-7393614926256365568-dIMv"
            class="project-btn2" target="_blank" rel="noopener">Watch Pt-1</a>
          </div>
        </div>
      </div>

      <!-- Robot 2 -->
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <a href="https://www.linkedin.com/posts/adidela-samson-tony_after-pid-control-activity-7393610878388092928-2k_m"
             target="_blank" rel="noopener">
            <img src="./images/r2.jpg" class="card-img-top" alt="PID Robot">
          </a>
          <div class="card-body">
            <h5 class="card-title">3-Wheel EV3 Robot with PID Control</h5>
            <p class="card-text">
              Line-following robot using PID at 50% reflectance with color sensor edge detection
              and IR-based obstacle monitoring.
            </p>
            <a href="https://www.linkedin.com/posts/adidela-samson-tony_after-pid-control-activity-7393610878388092928-2k_m/" class="project-btn" target="_blank" rel="noopener">After</a>
            <a href="https://www.linkedin.com/posts/adidela-samson-tony_before-pid-control-activity-7393610934314885120-UsA7/" class="project-btn2" target="_blank" rel="noopener">Before PID</a>
          </div>
        </div>
      </div>

      <!-- Robot 3 -->
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <a href="#" target="_blank" rel="noopener">
            <img src="./images/r3.jpg" class="card-img-top" alt="Advanced EV3 Robot">
          </a>
          <div class="card-body">
            <h5 class="card-title">Advanced EV3 Robot (Manual & Autonomous)</h5>
            <p class="card-text">
              PAN-based socket control with manual and autonomous modes, object grabbing,
              obstacle avoidance, and NFL-style goal navigation.
            </p>
          </div>
        </div>
      </div>

    </div>

    <hr class="my-4 fade-divider">

    <!-- EMBEDDED SYSTEMS -->
    <h2 class="text-center mb-4">Embedded Systems Projects</h2>
    <div class="row">

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <iframe class="card-img-top" src="https://www.tinkercad.com/embed/5ZIjaNlWrWI?editbtn=1" height="250"></iframe>
          <div class="card-body">
            <h5 class="card-title">Multiplexer</h5>
            <p class="card-text">
              Designed 2×1 and 4×1 multiplexers using logic gates with DIP switches and LED outputs.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <iframe class="card-img-top" src="https://www.tinkercad.com/embed/745r3ZrUzwF?editbtn=1" height="250"></iframe>
          <div class="card-body">
            <h5 class="card-title">NAND to All Gates</h5>
            <p class="card-text">
              Implemented all logic gates using NAND (universal gate) verified with truth tables.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <iframe class="card-img-top" src="https://www.tinkercad.com/embed/4g3uPa4wCVq?editbtn=1" height="250"></iframe>
          <div class="card-body">
            <h5 class="card-title">Embedded Music System</h5>
            <p class="card-text">
              Buzzer-based music playback with frequency arrays and multilingual LCD display.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <iframe class="card-img-top" src="https://www.tinkercad.com/embed/3dtkOZANHKt?editbtn=1" height="250"></iframe>
          <div class="card-body">
            <h5 class="card-title">Logic Gates</h5>
            <p class="card-text">
              Visual logic gate demonstration using DIP switches and LED outputs.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <iframe class="card-img-top" src="https://www.tinkercad.com/embed/gddKoRsL6ac?editbtn=1" height="250"></iframe>
          <div class="card-body">
            <h5 class="card-title">Full Adder</h5>
            <p class="card-text">
              Full adder circuit displaying Sum and Carry outputs using LEDs.
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow-sm">
          <iframe class="card-img-top" src="https://www.tinkercad.com/embed/jxahFSI7kvt?editbtn=1" height="250"></iframe>
          <div class="card-body">
            <h5 class="card-title">Half Adder & Subtractor</h5>
            <p class="card-text">
              Combined half-adder and subtractor with Sum, Carry, and Borrow LED outputs.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
  `;

  document.getElementById("bodybox").innerHTML = data;
}


function drone(){}

const projects = [
  {
    id: "iot-watch",
    title: "IoT Based Health Monitoring Smart Watch",
    image: "images/Projec.jpg",
    short: "Health monitoring using Arduino, sensors, and Wi-Fi.",
    details: `
      <h3>Project Members</h3>
      <p><b>Adidela Samson</b></p>
      <p><b>Apoorva Kyramkonda</b></p>
      <p><b>Sindhu Anummula</b></p>

      <h4>Tools</h4>
      <ul>
        <li>MEMS sensor</li>
        <li>LM-35</li>
        <li>Heart beat sensor</li>
        <li>Wi-Fi Module</li>
        <li>Arduino UNO</li>
        <li>Tinker cad</li>
      </ul>

      <h4 style="text-align:center"><i>Description</i></h4>
      <p><i>
      This prototype consists of a transmitter and receiver unit. Sensor data
      is collected, calibrated using Embedded C, and transmitted via Wi-Fi.
      </i></p>

      <p><i>
      The receiver hosts a local web application at
      <b>192.168.4.1</b> and sends alerts to caregivers when abnormal values are detected.
      </i></p>

      <p><b>MEMS sensor</b>: Detects fall, sleep, or motion.</p>
      <p><b>LM-35</b>: Measures body temperature (96°F–99°F).</p>
      <p><b>Heart Beat Sensor</b>: Monitors heart rate / BP range.</p>
    `
  },

  {
    id: "robot-nav",
    title: "Indoor Robot Navigation System",
    image: "images/robot.jpg",
    short: "LiDAR-based indoor navigation and obstacle avoidance.",
    details: `
      <p><b>Description:</b> Autonomous navigation using LiDAR and path planning algorithms.</p>
      <p><b>Tools:</b> RPLiDAR, Java, EV3, ROS</p>
    `
  }
];


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block"; 
}
