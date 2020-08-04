import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Title from "../Title/Title";
import { MDBDataTable } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";

const DymanicVariables = () => {
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
        label: "Date",
        field: "date",
        sort: "asc",
        width: 250,
      },
      {
        label: "Commission",
        field: "commission",
        sort: "asc",
        width: 100,
      },
      {
        label: "Net Cash",
        field: "net_cash",
        sort: "asc",
        width: 100,
      },
      {
        label: "Deposits",
        field: "deposits",
        sort: "asc",
        width: 100,
      },
      {
        label: "Clicks",
        field: "clicks",
        sort: "asc",
        width: 100,
      },
      {
        label: "FTDS",
        field: "ftds",
        sort: "asc",
        width: 100,
      },
      {
        label: "Registrations",
        field: "registrations",
        sort: "asc",
        width: 100,
      },
      {
        label: "No of deposits",
        field: "no_of_deposits",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  };

  useEffect(() => {
    /* const fetchPosts = async () => {
      const res = await axios.get(
        `https://winningpartner.com:26134/api/v1/daily_totals`,
        {
          headers: {
            Authorization:
              'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
          },
        }
      );
      setVar(res.data.daily_totals);
    };
    fetchPosts(); */
  }, []);

  /* data.rows.push(...variables); */

  return (
    <Row>
      <Title title="Daily Variables" />
      <MDBDataTable striped bordered data={data} />
    </Row>
  );
};

export default DymanicVariables;

/* const [variables, setVar] = useState([]);
const [loading, setLoading] = useState(false);
const [currentPage, setCurrentPage] = useState(1);
const [varsPerPage] = useState(20);

useEffect(() => {
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://winningpartner.com:26134/api/v1/daily_totals`,
      {
        headers: {
          Authorization:
            'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
        },
      }
    );
    setVar(res.data.daily_totals);
    setLoading(false);
  };
  fetchPosts();
}, []);

const indexOfLastPost = currentPage * varsPerPage;
const indexOfFirstPost = indexOfLastPost - varsPerPage;
const currentVariables = variables.slice(indexOfFirstPost, indexOfLastPost);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber);

return (
  <Row>
    <h1 className={"page__title"}>Daily Variables</h1>
    <Variable variables={currentVariables} loading={loading} />
    <Pagination
      currentPage={currentPage}
      totalVariables={Math.ceil(variables.length / varsPerPage)}
      paginate={paginate}
    />
  </Row>
); */
