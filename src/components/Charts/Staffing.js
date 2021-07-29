import React, { useState } from 'react'
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap'
import Chart from "chart.js";
import { Line } from "react-chartjs-2";

import {
    chartOptions,
    parseOptions,
    chartExample1,
} from "./variables/charts.js";

export const Staffing = () => {

    // No entiendo absolutamente nada como funciona esta libreria, solo estoy copiando código, debo investigar más.
    const [chartExample1Data] = useState("data1");

    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    return (
        <Card className="bg-gradient-default shadow">
            <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                    <Col>
                        <h6 className="text-uppercase text-light ls-1 mb-1">
                            Overview
                        </h6>
                        <h2 className="text-white mb-0">Sales value</h2>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <div className="chart">
                    <Line
                        data={chartExample1[chartExample1Data]}
                        options={chartExample1.options}
                        getDatasetAtEvent={(e) => console.log(e)}
                    />
                </div>
            </CardBody>
        </Card>
    )
}
