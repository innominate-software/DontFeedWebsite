import React from "react";
import HelpButton from "./HelpButton";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function HelpButtons(props) {
    return(
        <Row>
            <Col>
                <HelpButton label="Submit Feedback" />
            </Col>
            <Col>
                <HelpButton label="Report Cheater" />
            </Col>
            <Col>
                <HelpButton label="Change Password" />
            </Col>
        </Row>
    )
}