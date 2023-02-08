import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

function SaleData() {
  const [salesData, setsalesData] = useState([]);
  const [totalOrderValue, settotalOrderValue] = useState([]);
  const [totalOrder, settotalOrder] = useState([]);

  const AllData = async () => {
    try {
      // fatching data to backend apis
      const res = await fetch("/api/v1/brand_sales_daily", { method: "get" });
      const totalordervalue = await fetch(
        "/api/v1/brand_sales_daily/totalordervalue",
        { method: "get" }
      );
      const totalorder = await fetch("/api/v1/brand_sales_daily/totalorder", {
        method: "get",
      });

      // changing data formate
      const data = await res.json();
      const totalordervaluee = await totalordervalue.json();
      const totalorderr = await totalorder.json();

      // send data in usestate
      await setsalesData(data);
      await settotalOrderValue(totalordervaluee);
      await settotalOrder(totalorderr);
    } catch (e) {
      // if get any error
      console.log(e);
    }
  };
  useEffect(() => {
    AllData();
  }, []);
  return (
    <MDBTable>
      <MDBTableHead style={{ border: "solid black 2px" , backgroundColor:"cream" }}>
        {/* Collum name */}
        <tr>
          <th></th>
          <th scope="col">Brand</th>
          <th scope="col">date</th>
          <th scope="col">transaction Type</th>
          <th scope="col">Total Orders</th>
          <th scope="col">Total Order Value</th>
          <th scope="col">GrossMargin Percentage</th>
          <th scope="col">Created At</th>
          <th scope="col">Updated At</th>
        </tr>
      </MDBTableHead>
      {/* rows data */}
      <MDBTableBody>
        {salesData.map((e) => (
          <tr className="table-active" saleCount>
            {/* <td>{e._id}</td> */}
            <td></td>

            <td style={{ border: " black 1px" }}> {e.brand}</td>
            <td style={{ border: " black 1px" }}> {e.date}</td>
            <td style={{ border: " black 1px" }}> {e.transactionType}</td>
            <td style={{ border: " black 1px" }}> {e.totalOrders}</td>
            <td style={{ border: " black 1px" }}> {e.totalOrderValue}</td>
            <td style={{ border: " black 1px" }}> {e.grossMarginPercentage}</td>
            <td style={{ border: " black 1px" }}> {e.createdAt}</td>
            <td style={{ border: " black 1px" }}> {e.updatedAt}</td>
          </tr>
        ))}
      </MDBTableBody>

      <MDBTableBody style={{ border: "solid black 2px" }}>
        <td style={{ color: "black", border: "solid black 2px" }}>Total</td>
        <td style={{ color: " black" }}>-</td>
        <td style={{ color: " black" }}>-</td>
        <td style={{ color: " black" }}>-</td>
        <td style={{ color: " black" }}>{totalOrder}</td>
        <td style={{ color: " black" }}>{totalOrderValue}</td>
        <td style={{ color: " black" }}>-</td>
        <td style={{ color: " black" }}>-</td>
        <td style={{ color: " black" }}>-</td>
      </MDBTableBody>
    </MDBTable>
  );
}

export default SaleData;
