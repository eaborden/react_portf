import React from "react"; 
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
// import Container from "../Container";

function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to my Home Page!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <p>Opening a new chapter in my life by taking a leap into the world of coding and website design. The past 25 years have been a host trials
              and tribulations of career paths.  I have worked in for profit and non-profit organization, dabled in consulting and was even a teacher for a while.  
              The common theme that has run through most of my positions was geographic information system (GIS).  
              The industry of GIS has changed so drastically over the past 10 years and rather than the software located on single desktop, it is an
              enterprise wide offering to every industry.  Therefore, in order to continue to compete for positions utilizing GIS one must have many more
              skills, including the one gained in this certificate program.
              I grew up in Denver, Colorado and have a love for fishing and hunting.  And although I have lived on the East Coast as long I did in Colorado, I still
              think of it as home.  Other hobbies include ice hockey and golf.
              I have two daugthers, one enrolled at UMASS Amherst, and the other entering her senior year at Watkinson School.
            </p>
        </Col>
        </Row>
        </Container>

    

                      
  </div>
            

  );
}

export default Home;
