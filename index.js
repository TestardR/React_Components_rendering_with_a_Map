import React from "react";
import DetailOverview from "./DetailOverview";
import { Table, TableBody } from "@material-ui/core";

const Overview = ({ name, description, icon }) => {
  const data = {
    Name: name,
    Description: description,
    Icon: icon
  };

  const list = Object.keys(data).map((key, i) => (
    <DetailOverview key={i} field={key} value={data[key]} />
  ));

  return (
    <Table>
      <TableBody>{list}</TableBody>
    </Table>
  );
};

export default Overview;
