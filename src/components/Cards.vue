<template>
  <div class="container-fluid">
    <!-- <section id="cards">
      <div id="find_course">
        <h1 id="find">
          FIND <sub id="course" style="color: #aa84f9">Your Course.</sub>
        </h1>
        <div id="edition">
          EDITION <br />
          <p style="color: #aa84f9">2023</p>
        </div>
      </div>
      <div class="row">
        <div class="col-3 mt-3" v-for="item of 4" :key="item">
          <div class="cardes">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">Course <span>01</span></h5>
                <div class="cardhr"><h6></h6></div>

                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div class="buttongroup">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Read More
                  </button>

                  <div
                    class="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">
                            Adversing
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          The P&C Committee shall carry out the Board???s
                          responsibilities relating to compensation of the
                          members of the Board and the Company???s employees,
                          including the Company???s and its affiliates??? executive
                          officers and provide such other guidance with respect
                          to compensation matters as the P&C Committee deems
                          appropriate. The P&C Committee shall perform its
                          responsibilities in a manner that it believes supports
                          the Company???s business objectives and incorporates
                          sound corporate governance principles. The P&C
                          Committee may also have such other duties as may from
                          time to time be assigned to it by the Board or, as
                          long as the shares of the Company are listed on the
                          New York Stock Exchange (the ???NYSE???), are required by
                          the rules and regulations of the U.S. Securities and
                          Exchange Commission (the ???SEC???) or of the NYSE.
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            <strong>Close</strong>
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-dismiss="modal"
                          >
                            <strong>Understood</strong>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->


    <div class="row" id="row">
    <div class="col-md-4 col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="title"><a href="#">Blue Card</a></h4>
                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> <!-- end card -->
        </div>
    </div>
    
    <div class="col-md-4 col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="green" data-radius="none">
                <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="title"><a href="#">Green Card</a></h4>
                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> <!-- end card -->
        </div>
    </div>
    
    <div class="col-md-4 col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="title"><a href="#">Yellow Card</a></h4>
                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> <!-- end card -->
        </div>
    </div>
    
    <div class="col-md-4 col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="title"><a href="#">Brown Card</a></h4>
                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> <!-- end card -->
        </div>
    </div>
    
    <div class="col-md-4 col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="title"><a href="#">Purple Card</a></h4>
                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> <!-- end card -->
        </div>
    </div>
    
    <div class="col-md-4 col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                <div class="content">
                    <h6 class="category">Best cards</h6>
                    <h4 class="title"><a href="#">Orange Card</a></h4>
                    <p class="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                </div>
            </div> <!-- end card -->
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  data() {
    return [];
  },
};
</script>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Krub:ital,wght@0,200;0,300;1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap");
.card {
  width: 291px;
  height: 375px;
  border: 3px solid #ffffff;
  background-color: #181818;
}
.container-fluid {
  background-color: #181818;
}
.cardes h5 {
  font-size: 33px;
  letter-spacing: 1px;
  line-height: 50px;
  text-transform: uppercase;
  color: #f2f2f2;
  font-weight: 600;
  font-family: "Krub";
  margin-top: 65px;
}
.card span {
  color: #aa84f9;
  margin-left: 8px;
}
.card-title {
  display: flex;
  justify-content: center;
}
.cardhr h6 {
  width: 55px;
  height: 3px;
  background-color: #aa84f9;
  margin-left: 100px;
}
.card-text {
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 27px;
  color: #f2f2f2;
  font-weight: 600;
  font-family: "Krub";
  text-align: center;
  margin-top: 25px;
}
.buttongroup {
  display: flex;
  justify-items: center;
  justify-content: center;
}
.buttongroup button {
  width: 125px;
  height: 47px;
  background-color: #aa84f9;
  border: none;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #f1f1f1;
  font-weight: 700;
  font-family: "Oswald", sans-serif;
  margin-top: 25px;
}
#cards {
  padding-top: 15px;
  padding-bottom: 15px;
}
#find {
  font-size: 116px;
  text-transform: uppercase;
  color: #f2f2f2;
  font-weight: 700;
  font-family: "Krub";
}
#course {
  font-size: 38px;
  letter-spacing: 4px;
  color: #f2f2f2;
  font-weight: 400;
  font-family: "Krub";
}
#edition {
  text-align: end;
  font-size: 27px;
  letter-spacing: 3px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Krub";
}
#edition p {
  font-size: 23px;
  letter-spacing: 6px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Krub";
} */


body{margin-top:20px;}

#row{
  background-color: #333;
}
.card-big-shadow {
    max-width: 320px;
    position: relative;
}

.coloured-cards .card {
    margin-top: 30px;
}

.card[data-radius="none"] {
    border-radius: 0px;
}
.card {
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
    background-color: #FFFFFF;
    color: #252422;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
}


.card[data-background="image"] .title, .card[data-background="image"] .stats, .card[data-background="image"] .category, .card[data-background="image"] .description, .card[data-background="image"] .content, .card[data-background="image"] .card-footer, .card[data-background="image"] small, .card[data-background="image"] .content a, .card[data-background="color"] .title, .card[data-background="color"] .stats, .card[data-background="color"] .category, .card[data-background="color"] .description, .card[data-background="color"] .content, .card[data-background="color"] .card-footer, .card[data-background="color"] small, .card[data-background="color"] .content a {
    color: #FFFFFF;
}
.card.card-just-text .content {
    padding: 50px 65px;
    text-align: center;
}
.card .content {
    padding: 20px 20px 10px 20px;
}
.card[data-color="blue"] .category {
    color: #7a9e9f;
}

.card .category, .card .label {
    font-size: 14px;
    margin-bottom: 0px;
}
.card-big-shadow:before {
    background-image: url("http://static.tumblr.com/i21wc39/coTmrkw40/shadow.png");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    bottom: -12%;
    content: "";
    display: block;
    left: -12%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
}
h4, .h4 {
    font-size: 1.5em;
    font-weight: 600;
    line-height: 1.2em;
}
h6, .h6 {
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
}
.card .description {
    font-size: 16px;
    color: #66615b;
}
.content-card{
    margin-top:30px;    
}
a:hover, a:focus {
    text-decoration: none;
}

/*======== COLORS ===========*/
.card[data-color="blue"] {
    background: #b8d8d8;
}
.card[data-color="blue"] .description {
    color: #506568;
}

.card[data-color="green"] {
    background: #d5e5a3;
}
.card[data-color="green"] .description {
    color: #60773d;
}
.card[data-color="green"] .category {
    color: #92ac56;
}

.card[data-color="yellow"] {
    background: #ffe28c;
}
.card[data-color="yellow"] .description {
    color: #b25825;
}
.card[data-color="yellow"] .category {
    color: #d88715;
}

.card[data-color="brown"] {
    background: #d6c1ab;
}
.card[data-color="brown"] .description {
    color: #75442e;
}
.card[data-color="brown"] .category {
    color: #a47e65;
}

.card[data-color="purple"] {
    background: #baa9ba;
}
.card[data-color="purple"] .description {
    color: #3a283d;
}
.card[data-color="purple"] .category {
    color: #5a283d;
}

.card[data-color="orange"] {
    background: #ff8f5e;
}
.card[data-color="orange"] .description {
    color: #772510;
}
.card[data-color="orange"] .category {
    color: #e95e37;
}
</style>