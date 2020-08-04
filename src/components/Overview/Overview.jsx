import React, { useState, useEffect } from "react";
import { Dashboard } from "../Dashboard/Dashboard";
import axios from "axios";
import { useSelector } from "react-redux";
import Title from "../Title/Title";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBDataTable } from "mdbreact";
import moment from "moment";

const Overview = () => {
  const [varCasino, setVarCas] = useState([]);
  const [varDeal, setVarDeal] = useState([]);
  const [varStats, setVarStats] = useState([]);
  const brandsList = useSelector((store) => store.brands);
  const dates = useSelector((store) => store.dates);
  let dataCasino = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Schemes",
        field: "scheme",
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
  let dataDeal = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Deal",
        field: "deal",
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

  /* const fetchPosts = async () => {
    const resCas = await axios.get(
      `https://winningpartner.com:26134/api/v1/casinos_totals?${date}${sortVariable}`,
      {
        headers: {
          Authorization:
            'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
        },
      }
    );
    const resDeal = await axios.get(
      `https://winningpartner.com:26134/api/v1/deals_totals?${date}${sortVariable}`,
      {
        headers: {
          Authorization:
            'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
        },
      }
    );
    const resStats = await axios.get(
      `https://winningpartner.com:26134/api/v1/deal_event_summaries?${date}${sortVariable}`,
      {
        headers: {
          Authorization:
            'Token token="RsKmjZCzqnTyfL1-yw8B", email="media@trafficlabel.com"',
        },
      }
    );
    console.log(resStats.data.deal_event_summaries);
    setVarCas(resCas.data.casinos_totals);
    setVarDeal(resDeal.data.deals_totals);
    setVarStats(resStats.data.deal_event_summaries[0]);
  }; */

  useEffect(() => {
    /* fetchPosts(); */
  }, [date]);

  /* dataCasino.rows.push(...varCasino);
  dataDeal.rows.push(...varDeal); */

  return (
    <Row>
      <Title title="Overview" />
      <Dashboard stats={varStats} />
      <MDBDataTable striped bordered data={dataCasino} />
      <MDBDataTable striped bordered data={dataDeal} />
    </Row>
  );
};

export default Overview;
