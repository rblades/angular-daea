daea
====

This is a fork of the

Digital Atlas of Egyptian Archaeology

http://matrix-msu.github.io/daea/

This version has been edited to be a 'clean' version that can be repurposed.

Well, almost cleaned up. I haven't deleted the atlas entries; they're not hurting anything. But keeping them gives you a sense of how to use/re-use/edit/build upon.

Adding new sites is a matter of updating the 'Sites' csv file at [sites/aa-sites-popup.csv](/sites/aa-sites-popup.csv) to reflect your own materials. In that table, you can also provide a link to another page of detailed information, as per the template. The other element to adjust are your base maps. In the [index.html](index.html) page, you will want to change any lines of text to reflect your own purpose (such as on lines 46 and 48, as well as the various links: read the html carefully). You will also want to adjust lines 178 and 179 to point to your base map (178 uses the standar Stamen Toner map; replace ```L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png'),``` with <br> ```L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png'),``` for instance to use the Stamen Watercolor base map). In 179 I am currently pointing to a georectified version of the Fire Insurance Map of Ottawa, hosted on the [Harvard Map Warper](http://warp.worldmap.harvard.edu/) site. Slot your own version in there.

Adjust lines 175 and 176 so that they centre on your map. The higher the number for 'zoom', the closer in you are.

Good luck!

-------

###Original information about DAEA:

Collaborative project in the Fall 2014 ANP455: Ancient Egyptian Archaeology class (http://anthropology.msu.edu/anp455-fs14) at Michigan State University. Students all chose a specific site on which to write a site report (details can be found at http://anthropology.msu.edu/anp455-fs14/assignments-grading/).  They created the wb page for the atlas entry (basic HTML, CSS, and some light JS if they felt ambitious), added the pin to the map by adding their site's information (Lat/Lon, time period, brief site description) to a CSV.  Leaflet Omnivore (https://github.com/mapbox/leaflet-omnivore) was used to pull the data out of the CSV and onto a simple Leaflet based map.  In addition to doing focused research and writing on a specific Egyptian archaeological site, students learned basic HTML/CSS and GitHub (forking, pull requests, comitting, etc) during the course of the assignment.  

The project has several goals.  First, it allowed the students to have focused engagement with a specific archaeological site (and write about the site).  Second, students learned some digital skills during the process, such as working with HTML, digital mapping skills, version control, etc (things that are normally not part of a senior level archaeology class...things that they can easily apply in other settings). Finally, students built something public, they contributed to the collective knowledge and resources available on the open web about the archaeology of ancient Egypt
