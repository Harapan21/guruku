import React, { Component } from "react";
import None from "./Home/None";
import Exist from "./Home/Exist";
import { DbGuru } from "../data";
export default class Home extends Component {
  render() {
    let guru = DbGuru.allguru();
    return guru.length > 0 ? <Exist guru={guru} /> : <None />;
  }
}
