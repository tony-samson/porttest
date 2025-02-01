function defaultload(){
	document.getElementById("bodybox").innerHTML = `
	
	<div class="container-fluid iframe-container">

      <iframe width="440" height="300" src="https://www.tinkercad.com/embed/5ZIjaNlWrWI?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <div class="description-boxx">
        <h5>Multiplexer</h5>
        <p>2x1 and 4x1 Multiplexer was built using NAND, AND, OR gates. we have select lines to choose the input Dip
          switches. We can seee the output through LED. please click simulate to try.</p>
      </div>

      <iframe width="440" height="300" src="https://www.tinkercad.com/embed/745r3ZrUzwF?editbtn=1" frameborder="0"
        marginwidth="0" marginheight="0" scrolling="no"></iframe>
      <div class="description-boxx">
        <h5>NAND to All gates</h5>
        <p>Using universal gate NANDs implementing the funtionality every other gate iput are the Dipswitches and output
          are the LED. It lits up only when there is 1 refer to the truth table. use the simulate button to try.</p>
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
        <p>Just with two Dip switches attached to gates and each output form every gate has LED beside according to the
          truth table we can see the LED lit up when the output is 1 and doesnt turn on when the output is zero. please
          click simulate to try.</p>

      </div>

    </div>
    

	`;
}

function certifications(){
	 
	document.getElementById("bodybox").innerHTML = '<div class="w3-content w3-display-container">'+
	'<img class="mySlides" src="images/1.png" style="width:100%;">'+
	'<img class="mySlides" src="images/2.png" style="width:100%;">'+
	'<img class="mySlides" src="images/3.png" style="width:100%;">'+
	'<img class="mySlides" src="images/4.png" style="width:100%;">'+
	'<img class="mySlides" src="images/5.png" style="width:100%;">'+
	'<img class="mySlides" src="images/6.png" style="width:100%;">'+
  	'<button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>'+
	'<button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>'+
	'</div><br><br><br>';
	}

function academics(){
document.getElementById("bodybox").innerHTML = '<H4 style="text-align:center; color:rgba(117, 233, 8, 0.726);"><b>S.R. Digi school</b><i> (2011 - 2014)</i></h4>'+
'<p><i>I have attended this school form 6th standard to 8th standard with no grater than average score. I had a great experience of sports,outings, and extra activities. Teaching experience is good, but I had no interest in learning. :) </i></p><br>'+
'<H4 style="text-align:center;color:rgba(117, 233, 8, 0.726);"><b>Bhashyam public school</b><i> (2014 - 2016)</i></h4>'+
'<p><i>I obtained an overall <b>9.2 CGPA</b> and a <b>10</b> in <b>Mathematics</b> in the SSC 10th standard with the help of my teachers, as they explained every possible way to understand. In the beginning of my 10th grade, I was moved to class, where every one has poor performances. The teachers wont attend class as the students nor teach because of the misbehaviour of the students. Later they started teaching to only certain students with improvements in their tests, Luckily I was included with them. I had great friends that I still meet with them.</i></p><br>'+
'<H4 style="text-align:center;color:rgba(117, 233, 8, 0.726);"><b>Narayana Junior College</b><i> (2016 - 2018)</i></h4>'+
'<p><i>I selected MPC as my main stream. I had lot of friends who are intelligent than me, I used to spend time with them. we study, we learnt most of subjects from the internet, we used to bunk collage most of the time. There are only few faculty who can educate my class. We used to spend 13 hours a day, still could not gain knowledge as much as we spend time. Although I got <b>825</b> out of <b>1000</b>. I went for C Programming course in summer vacation, where I was interested a lot and decided to choose Computer Science in my bachelors.</i></p><br>'+
'<H4 style="text-align:center;color:rgba(117, 233, 8, 0.726);"><b>Anurag Group of Institutions</b><i> (2018 - 2022)</i></h4>'+
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
function project(){
	var data ='<H2 style="text-align:center;">IoT Based Health Monitoring Smart Watch</h2><h3> Project Members </h3><br> <p><b>Adidela Samson</b></p> <p><b> Apoorva Kyramkonda</b></p><p><b> Sindhu Anummula</b></p><br>'+
	'<h4> Tools</h4><br><ul><li>MEMS sensor</li><li>LM-35</li><li>Heart beat sensor</li><li>Wi-Fi Module</li><li>Arduino UNO</li><li>Tinker cad</li></ul>'+
	'<h4 style="text-align:center"><i>Discription</i></h4><br>'+
	'<p><i> This prototype divides into two devices: Transmitter, Receiver. Transmitter unit has all the sensors based on the requirement(also can include CGM), which connects to Arduino(Receiver unit). This unit has microprocessor that has Embedded C code which intakes all the values provided by the transmitter unit. These values are calibrated according to its unit scale in the program. This code is written in Embedded C with little HTML, tested, and simulated in Tinker cad.</i></p><br>'+
	'<p><i> This receiver has Wi-Fi module, which we can connect and view it on Local Host of port number <b>192.168.4.1</b>. Whenever the values are recognized as abnormal by the device, the web application sends an alret message to Nurses, Doctors, or takecarers</i></p><br>'
	+'<p><b>MEMS sensor</b> can identify whether the patient fell, slept,or moving. Based on axis, angle and the position of the hand.</p>'+
	'<p><b>LM-35</b> is a sensor that identifies the temperature level of a person, it is set <b>96 F</b> to <b>99 F</b> if the values are out of range then is sends a alert notification.</p>'+
	'<p><b>Heart beat sensor</b> can recognize Blood pressure, and based on the person is set to certain range.</p>'+
	'<p><b>Arduino UNO</b> consists of 14 Digital and 13 Analog pins, where we can connect to Wi-Fi module, LCD, and sensors. These pins are directly controlled by the <b>8086 Micro Processor</b>, in this processor we can insert Embedded C Code according to the logical and functional requirements.</p><br><br>'+
	'<img src="images/Projec.jpg" style="width:100%">'+'<br><br><br>';
	document.getElementById("bodybox").innerHTML=data;

}

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
