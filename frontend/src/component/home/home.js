import React, { Fragment, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";

function Home() {
  
  const [data, setData] = useState({
    date: "",
    brand: "",
    transactionType: "",
    totalOrders: "",
    totalOrderValue: "",
    grossMarginPercentage: "",
    createdAt: "",
    updatedAt: "",
  });
  let name, value;
  const HandlerInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const {
      date,
      brand,
      transactionType,
      totalOrders,
      totalOrderValue,
      grossMarginPercentage,
      createdAt,
      updatedAt,
    } = data;

    const res = await fetch("/api/v1/brand_sales_daily", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date,
        brand,
        transactionType,
        totalOrders,
        totalOrderValue,
        grossMarginPercentage,
        createdAt,
        updatedAt,
      }),
    });

    const saledata = await res.json();
    console.log(saledata);
    if (saledata.error) {
      window.alert(saledata.error.message);
    } else {
      window.alert("data succesfull added");
    }
  };

  return (
    <Fragment>
      {/* <MetaData ></MetaData> */}
      <MDBContainer
        fluid
        className="d-flex align-items-center justify-content-center bg-image"
        style={{
          backgroundImage:
            "url(https://instahyre-2.s3-ap-south-1.amazonaws.com/media/CACHE/images/images/office-photos/base/39338/ca920c2ba1/240592982_100762299007505_376878138425555530_n/defb7c63a7e8e541270fcd1bf8c359e9.jpg )",
        }}
      >
        <div className="mask gradient-custom-3"></div>
        <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
          <MDBCardBody className="px-5">
            {/* HEader name */}
            <h2 className="text-uppercase text-center mb-5">
              Add Sale Data ......
            </h2>
            {/* Gettting value from user */}
            <MDBInput
              wrapperClass="mb-4"
              name="date"
              value={data.date}
              label="date"
              size="lg"
              type="date"
              onChange={HandlerInput}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="brand"
              size="lg"
              type="text"
              onChange={HandlerInput}
              name="brand"
              value={data.brand}
            />{" "}
            <MDBInput
              wrapperClass="mb-4"
              label="transactionType"
              size="lg"
              type="text"
              onChange={HandlerInput}
              name="transactionType"
              value={data.transactionType}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="totalOrders"
              size="lg"
              type="number"
              onChange={HandlerInput}
              name="totalOrders"
              value={data.totalOrders}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="totalOrderValue"
              size="lg"
              type="number"
              onChange={HandlerInput}
              name="totalOrderValue"
              value={data.totalOrderValue}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="grossMarginPercentage"
              size="lg"
              type="number"
              onChange={HandlerInput}
              name="grossMarginPercentage"
              value={data.grossMarginPercentage}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="createdAt"
              size="lg"
              type="date"
              onChange={HandlerInput}
              name="createdAt"
              value={data.createdAt}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="updatedAt"
              size="lg"
              type="date"
              onChange={HandlerInput}
              name="updatedAt"
              value={data.updatedAt}
            />
            {/* submmit button */}
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              type="submit"
              onClick={PostData}
              style={{ backgroundColor: "red" }}
            >
              submit data
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </Fragment>
  );
}

export default Home;
