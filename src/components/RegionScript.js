import React, { Component } from "react";

export default class RegionTable extends Component {
  region = this.props.region;
  curState = this.props.curState;
  render() {
    return (
      <tr className={this.region.total ? "reg-total" : "reg-row"}>
        <td
          className={
            this.region.solid < this.curState.solid || this.region.solid === "-"
              ? "better"
              : "worse"
          }
        >
          {this.region.solid}
        </td>
        <td
          className={
            this.region.sulfur < this.curState.sulfur ||
            this.region.sulfur === "-"
              ? "better"
              : "worse"
          }
        >
          {this.region.sulfur}
        </td>
        <td
          className={
            this.region.nitrogen < this.curState.nitrogen ||
            this.region.nitrogen === "-"
              ? "better"
              : "worse"
          }
        >
          {this.region.nitrogen}
        </td>
        <td
          className={
            this.region.carbon < this.curState.carbon ||
            this.region.carbon === "-"
              ? "better"
              : "worse"
          }
        >
          {this.region.carbon}
        </td>
        <td
          className={
            this.region.ash < this.curState.ash || this.region.ash === "-"
              ? "better"
              : "worse"
          }
        >
          {this.region.ash}
        </td>
      </tr>
    );
  }
}
