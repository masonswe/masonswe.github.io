---
hide:
  - navigation 
  - toc        
---

<script src="//code.iconify.design/1/1.0.6/iconify.min.js"></script>

<style>

  .responsive-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  @media screen and (min-width: 64rem) {
    .responsive-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card-wrapper {
    text-decoration: none;
    transition: none;
    background: none;
    padding: 0;
  }

  .card {
    position: relative;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
    -moz-box-align: center;
    align-items: center;
    height: 90%;
    -moz-box-pack: start;
    justify-content: flex-start;
    box-shadow: rgba(0, 0, 0, 0.1) 0.4rem 0.4rem 0px -0.0625rem, rgba(0, 0, 0, 0.40) 0px 0.50rem 0.5rem 0px;
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  }

  .card:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 0.40rem 0.40rem 0px -0.0625rem, rgba(0, 0, 0, 0.60) 0px 0.50rem 0.5rem 0px;
  }

  @media screen and (min-width: 75rem) {
    .card {
      padding: 2rem 2.5rem;
      margin: 0px 1px;
      border-radius: 4px;
    }
  }

  @media screen and (min-width: 36rem) {
    .card {
      padding: 1rem 1.5rem;
      margin: 0px 1px;
      border-radius: 4px;

    }
  }

  .card .logo {
    margin-right: 0.75rem;
    width: 80px;
    height: 80px;
  }

  .card .card-content {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    width: 100%;
  }

  .cardback{
  background-color: #ADAEB3;
  }

  #container-background {
        top: 0px;
        left: 0px;
        background-color: #ADAEB3; /* Use background-image or whatever suits you here */
        width: 100%; /* Your width */
        height: 70px; /* Your height */
    }​ 

  .card .card-content h3 {
    margin: 0;
  }
  
   .card .card-content h5 {
    margin: 0;
  }

  .card .card-content li {
    margin-top: 0.25em;
    margin-bottom: 0;
    font-size: 14px;
  }
  
  .li{
  font-size: 15px;
  }

  .card .card-content p {
    margin-top: 0.25em;
    margin-bottom: 0;
  }

  .card .card-content code {
    background: rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%;
    padding: 2px 6px;
    border-radius: 4px;
  }


  .component-wrapper span.em {
    color: rgb(61, 61, 61);
  }

  .component-wrapper a {
    transition: color 125ms;
    padding: 2px 6px;
    margin: 0px 1px;
    border-radius: 4px;
    display: inline;
    cursor: pointer;
  }

  .component-wrapper a:hover {
    color: var(--md-typeset-a-color);
    background: var(--md-accent-fg-color--transparent);
  }
</style>


## Faculty

<table width="600px">
	<tr>
		<th width="50%"> <h3>Dr. Kevin Moran</h3> </th>
	</tr>
	<tr>
		<td width="600px">
			&nbsp;&nbsp; <img style="vertical-align:middle" src="../images/kevin.png">
			<ul>
				<li><b>Bio:</b> Kevin Moran is an Assistant Professor in the Department of Computer Science at George Mason University.  He graduated with his B.A. in Physics with a Computer Science Minor from the College of the Holy Cross in 2013. He graduated with his M.S. in Computer Science from William & Mary in 2015, and his Ph.D. in Computer Science from William & Mary in 2018. Dr. Moran directs the SAGE Research Lab.</li>
  				<li><a href="https://www.kpmoran.com"><span class="iconify" data-align="bottom" data-width="26" data-height="26" data-icon="bx:bxs-home" data-inline="false"></span></a>&nbsp;&nbsp;
  				<a href="https://twitter.com/kevpmo"><span class="iconify" data-align="bottom" data-width="26" data-height="26" data-icon="akar-icons:twitter-fill" data-inline="false"></span></a>&nbsp;&nbsp;
  				<a href="https://scholar.google.com/citations?user=CllWHUcAAAAJ&hl=en&gmla=AJsN-F78UepV0Z898WH2A0mfcnlI9zEgUSCK0ayjTjMDF7dgPL3vThX8UaBv6rYew576mmMsSow7N_8ZCVXG_vRZ3HHAoiU3Nt8MMFjR7yt78D4zLQK8GjKyO93tYocfbX54VSTN9Kac"><span class="iconify" data-align="bottom" data-width="26" data-height="26" data-icon="simple-icons:googlescholar" data-inline="false"></span></a>&nbsp;&nbsp;
  				<a href="https://gitlab.com/kpmoran"><span class="iconify" data-align="bottom" data-width="26" data-height="26" data-icon="cib:gitlab" data-inline="false"></span></a>&nbsp;&nbsp;
  				<a href="https://github.com/kpmoran"><span class="iconify" data-align="bottom" data-width="24" data-height="24" data-icon="ant-design:github-filled" data-inline="false"></span></a></li>
  			<ul>
		</td>
	</tr>
</table>

-------------------

## Ph.D. Students

<div class="responsive-grid">
	<div class="card">
		<div class="logo">
			<img src="../images/sabiha.png" alt="Headshot of Dr. Kevin Moran.">
       </div>
<div class="card-content">
       	<h3>Sabiha Salma</h3>
       	<ul>
  				<li><b>4th Year Ph.D. Student in Computer Science</b></li>
  				<li><b>Research Interests:</b> Automated UI Analysis, HCI Considerations for Developer Tools, AI for Software Engineering</li>
  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="https://sabiha-salma.github.io/">sabiha-salma.github.io/</a></li>
  				<li><span class="iconify" data-align="bottom" data-width="12" data-height="12" data-icon="logos:twitter" data-inline="false"></span> <a href="https://twitter.com/itsmesabiha">itsmesabiha</a></li>
			</ul>
</div>
</div>
	<div class="card">
		<div class="logo">
			<img src="../images/hasan.png" alt="Headshot of Dr. Kevin Moran.">
       </div>
<div class="card-content">
       	<h3>SM Hasan Mansur</h3>
       	<ul>
       		<li><b>4th Year Ph.D. Student in Computer Science</b></li>
  				<li><b>Research Interests:</b> Automated UI Analysis, AI for Software Engineering</li>
  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="http://mason.gmu.edu/~smansur4/">gmu.edu/~smansur4/</a></li>
			</ul>
</div>
</div>
	<div class="card">
		<div class="logo">
			<img src="../images/junayed.png" alt="Headshot of Dr. Kevin Moran.">
       </div>
<div class="card-content">
       	<h3>Junayed Mahmud</h3>
       	<ul>
       		<li><b>3rd Year Ph.D. Student in Computer Science</b></li>
  				<li><b>Research Interests:</b> Bug Reporting, NLP for Software Engineering, Automated Mobile Testing </li>
  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="http://mason.gmu.edu/~jmahmud/">gmu.edu/~jmahmud/</a></li>
  				<li><span class="iconify" data-align="bottom" data-width="12" data-height="12" data-icon="logos:twitter" data-inline="false"></span> <a href="https://twitter.com/JunayedMahmud10">JunayedMahmud10</a></li>
			</ul>
</div>
</div>
</div>
<div class="responsive-grid">
	<div class="card">
		<div class="logo">
			<img src="../images/safwat.png" alt="Headshot of Safwat.">
       </div>
<div class="card-content">
       	<h3>Safwat Ali Kahn</h3>
       	<ul>
  				<li><b>3rd Year Ph.D. Student in Computer Science</b></li>
  				<li><b>Research Interests:</b> Automated UI Analysis, Automated UI testing, Mobile Applications, Smart Home Testing</li>
  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="https://www.linkedin.com/in/safwat-ali-khan">LinkedIn</a></li>
  				<li><span class="iconify" data-align="bottom" data-width="12" data-height="12" data-icon="logos:twitter" data-inline="false"></span> <a href="https://twitter.com/safwatknopfler">safwatknopfler</a></li>
			</ul>
</div>
</div>
	<div class="card">
		<div class="logo">
			<img src="../images/arun.png" alt="Headshot of Arun.">
       </div>
		<div class="card-content">
       	<h3>Arun Krishnavajjala</h3>
       	<ul>
  				<li><b>1st Year Ph.D. Student in Computer Science</b></li>
  				<li><b>Research Interests:</b> Software Engineering for Accessibility, Automated UI Analysis</li>
  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="http://arunkv.com/">Webpage</a></li>
  				<li><span class="iconify" data-align="bottom" data-width="12" data-height="12" data-icon="logos:twitter" data-inline="false"></span> <a href="https://twitter.com/ItsArunKV">ItsArunKV</a></li>
			</ul>
</div>
</div>
</div>

-------------------

## Undergraduate Students


<div class="responsive-grid">
	<div class="card">
		<div class="logo">
			<img src="../images/jas.png" alt="Headshot of Dr. Kevin Moran.">
       </div>
<div class="card-content">
       	<h3>Jasmine Obas</h3>
       	<ul>
       		<li><b>Undergraduate Student at George Mason University</b></li>
  				  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="https://www.linkedin.com/in/jasmine-obas-burdette/">LinkedIn</a></li>
			</ul>
</div>
</div>
</div>

<!---## High School Students--->

-------------------
## Alumni

### High School Students

<div class="responsive-grid">
	<div class="card">
		<div class="logo">
			<img src="../images/anish.png" alt="Headshot of Anish.">
       </div>
<div class="card-content">
       	<h3>Anish Pothireddy</h3>
       	<ul>
       		<li><b>Osbourn Park High School</b></li>
       		<li><b>Position after SAGE Lab:</b>Undergraduate at the University of Pennsylvania - Wharton School of Buisness</li>
  				  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="https://www.linkedin.com/in/anish-c-pothireddy/">LinkedIn</a></li>
			</ul>
</div>
</div>
	<div class="card">
		<div class="logo">
			<img src="../images/dami.png" alt="Headshot of Dami">
       </div>
<div class="card-content">
       	<h3>Damilola Awofisayo</h3>
       	<ul>
  				<li><b>High School Student at Thomas Jefferson High School for Science and Technology</b></li>
  				<li><b>Position after SAGE Lab:</b>Undergraduate Student</li>
  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="https://damilolaawofisayo.me">Webpage</a></li>
			</ul>
</div>
</div>
</div>

### Undergraduate Students

<div class="responsive-grid">
	<div class="card">
		<div class="logo">
			<img src="../images/kristen.png" alt="Headshot of Dr. Kevin Moran.">
       </div>
<div class="card-content">
       	<h3>Kristen Goebel</h3>
       	<ul>
  				<li><b>Undergraduate Student at Clarkson University</b></li>
  				<li><b>Position after SAGE Lab:</b> Graduate Student in Computer Science at Oregon State University</li>
  				<li><span class="iconify" data-align="bottom" data-width="11" data-height="11" data-icon="el:home-alt" data-inline="false"></span> <a href="http://linkedin.com/in/kgoeb">LinkedIn</a></li>
			</ul>
</div>
</div>
</div>

