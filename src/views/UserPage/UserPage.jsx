import React from "react";
import { Card, CardHeader, CardBody, CardTitle, CardFooter, Row, Col } from "reactstrap";

import CardAuthor from "components/CardElements/CardAuthor.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import damirBosnjak from "assets/img/033.jpg";
import mike from "assets/img/tumor_3.jpg";
import ayoOgunseinde2 from "assets/img/faces/ayo-ogunseinde-2.jpg";
import joeGardner2 from "assets/img/faces/joe-gardner-2.jpg";
import clemOnojeghuo2 from "assets/img/faces/clem-onojeghuo-2.jpg";

class User extends React.Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      date: new Date(),
      slideId : "BRCA_03",
      slideProtein : "MIB1",
      imageUrl : "http://127.0.0.1:8000/cdn/orig_3.jpg"
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="content">
        <Row>
          <Col md={10} xs={12}>
            <Card className="card-user">
              <div className="image">
                <img src="127.0.0.1:8000/cdn/orig_3.jpg" alt="..." />
              </div>
              <CardBody>
                <CardAuthor
                  avatar={this.state.imageUrl}
                  avatarAlt="..."
                  link = {this.state.imageUrl}
                  title={this.state.slideId}
                  description="Protein MIB1"
                />
                <p className="description text-center">
                  "Immune Cell 30 %{" "}<br/>
                    Stroma 7 % <br/>
                    Others 2% "
                </p>
                <div>
                {this.state.date.toString()}
                </div>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="button-container">
                  <Row>
                    <Col xs={6} sm={6} md={6} lg={3} className="ml-auto">
                      <h5>
                        70 %
                        <br/>
                        <small>Tumor</small>
                      </h5>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={4} className="mr-auto ml-auto">
                      <h5>
                        H&E
                        <br/>
                        <small>Staining</small>
                      </h5>
                    </Col>
                    <Col lg={3} className="mr-auto">
                      <h5>
                        25K
                        <br/>
                        <small>Cancer Cell</small>
                      </h5>
                    </Col>
                  </Row>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Slides List</CardTitle>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src={ayoOgunseinde2} alt="ayoOgunseinde2" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        DJ Khaled
                        <br />
                        <span className="text-muted">
                          <small>
                          Offline
                        </small>
                        </span>
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src={joeGardner2} alt="joeGardner2" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        Creative Tim
                        <br />
                        <span className="text-success">
                          <small>
                          Available
                        </small>
                        </span>
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <Col xs={2} md={2}>
                        <div className="avatar">
                          <img src={clemOnojeghuo2} alt="clemOnojeghuo2" className="img-circle img-no-padding img-responsive" />
                        </div>
                      </Col>
                      <Col xs={7} md={7}>
                        Flume
                        <br />
                        <span className="text-danger">
                          <small>
                          Busy
                        </small>
                        </span>
                      </Col>
                      <Col xs={3} md={3} className="text-right">
                        <Button size="sm" color="success" round icon outline>
                          <i className="fa fa-envelope"></i>
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}

export default User;
