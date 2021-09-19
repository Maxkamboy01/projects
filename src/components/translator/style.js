import styled from "styled-components";

export const Wrapperstyle = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  padding: 0 200px;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  margin-top: 100px;

  select {
    width: fit-content;
    height: 45px;
    padding: auto 20px;
    /* border: none; */
    border-radius: 5px;
    margin: 10px 50px;
    paint-order: 7px 16px;
    font-size: 14px;
    padding: 5px 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Inputstyle = styled.div`
  width: 50%;
`;

export const Positionstyle = styled.div`
  width: 100%;
  margin-right: 50px;
  textarea {
    width: 100%;
    height: 200px;
    border: 1px solid black;
    border-radius: 10px;
    font-size: 20px;
    font-family: monospace;
    padding: 20px 0px 0px 15px;
  }
`;

export const Linktext = styled.p`
  font-weight: 400;
`;

export const Transstyle = styled.div`
  width: 50%;
`;
