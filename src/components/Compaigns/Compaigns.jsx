import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import Title from "../Title/Title";
import "bootstrap/dist/css/bootstrap.min.css";

const Compaigns = () => {
  const [variables, setVar] = useState([]);
  let data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Created at",
        field: "created_at",
        sort: "asc",
        width: 250,
      },
      {
        label: "Deal",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Short URL",
        field: "generated_url",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [],
  };

  useEffect(() => {
    /* const fetchPosts = async () => {
      const res = await axios.get(
        "https://www.winningpartner.com:26134/api/v1/links",
        {
          headers: {
            Authorization:
              'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
          },
        }
      );
      setVar(res.data.links);
    };
    fetchPosts(); */
  }, []);

  /* data.rows.push(...variables); */

  return (
    <Row>
      <Title title="Compaigns" />
      <MDBDataTable striped bordered data={data} />
    </Row>
  );
};

export default Compaigns;
