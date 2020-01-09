import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

import { thead, tbody } from "variables/general";
import GeneralContext from "variables/general"

class RegularTables extends React.Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      date: new Date(),
      slideId : "BRACA_03",
      slideProtein : "MIB1",
      imageUrl : "http://127.0.0.1:8000/cdn/orig_3.jpg"
    }

  }

  handleRemove = (e) => {


    this.setState({
   // Retrieve a passed parameter 'value' attribute
      slideId: e.prop
    });
  }

  render() {

    let props = this.props;


    return (

      <div className="content">
        {this.state.slideId}
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4"> Slides List </CardTitle>
              </CardHeader>

              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tbody.map((prop, key) => {
                      return (
                        <tr key={key}>

                          {prop.data.map((prop, key) => {

                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-right">

                                  {prop}

                                </td>
                              );

                              if (key === 0)
                                return (
                                  <td key={key} className="text-left">

                                    <button onClick={() => this.handleRemove({prop})}>{prop}</button>

                                  </td>
                                );

                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12}>
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Table on Plain Background</CardTitle>
                <p className="card-category"> Here is a subtitle for this table</p>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      {thead.map((prop, key) => {
                        if (key === thead.length - 1)
                          return (
                            <th key={key} className="text-right">
                              {prop}
                            </th>
                          );
                        return <th key={key}>{prop}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {tbody.map((prop, key) => {
                      return (
                        <tr key={key}>
                          {prop.data.map((prop, key) => {
                            if (key === thead.length - 1)
                              return (
                                <td key={key} className="text-right">
                                  {prop}
                                </td>
                              );
                            return <td key={key}>{prop}</td>;
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}



export default RegularTables;
