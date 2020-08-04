import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import { useSelector } from "react-redux";
import axios from "axios";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBDataTable } from "mdbreact";
import moment from "moment";

const DymanicVariables = () => {
  const [variables, setVariables] = useState([]);
  const brandsList = useSelector((store) => store.brands);
  const dates = useSelector((store) => store.dates);
  let data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Dynamic variable",
        field: "dynamic_variable",
        sort: "asc",
        width: 250,
      },
      {
        label: "Schemes",
        field: "schemes",
        sort: "asc",
        width: 150,
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

  let sortVariable = "";
  if (brandsList.brands.length !== 0) {
    brandsList.brands.map((brand) => {
      return (sortVariable += `&scheme_ids[]=${brand}`);
    });
  }

  const today = moment(new Date()).format("YYYY-MM-DD");
  let date = `date_from=${today}&date_to=${today}`;
  if (Object.keys(dates).length !== 0 || dates.length !== 0) {
    date = `date_from=${dates.start}&date_to=${dates.end}`;
  }

  useEffect(() => {
    /*  const fetchPosts = async () => {
      const res = await axios.get(
        `https://winningpartner.com:26134/api/v1/dynamic_variables_totals.json?${date}&email=media@trafficlabel.com&token=RsKmjZCzqnTyfL1-yw8B${sortVariable}`
      );
      setVariables(res.data.dynamic_variables_totals);
    };
    fetchPosts(); */
  }, [sortVariable, date]);

  /* data.rows.push(...variables); */

  return (
    <Row>
      <Title title="Dynamic Variables" />
      <MDBDataTable striped bordered data={data} />
    </Row>
  );
};

export default DymanicVariables;

/* 
const [variables, setVar] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const brandsList = useSelector((store) => store.brands);

  let sortVariable = "";
  if (brandsList.brands.length !== 0) {
    brandsList.brands.map((brand) => {
      return (sortVariable += `&scheme_ids[]=${brand}`);
    });
  }
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://winningpartner.com:26134/api/v1/dynamic_variables_totals.json?date_from=2020-03-20&date_to=2020-04-20&email=media@trafficlabel.com&token=RsKmjZCzqnTyfL1-yw8B${sortVariable}`
      );
      setVar(res.data.dynamic_variables_totals);
      setTotalPages(res.data.total_pages);
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage, sortVariable]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Row>
      <Title title="Dynamic Variables" />
      <Variable variables={variables} loading={loading} />
      <Pagination
        currentPage={currentPage}
        totalVariables={totalPages}
        paginate={paginate}
      />
    </Row>
  ); */
