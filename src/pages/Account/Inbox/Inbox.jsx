import React, { useState } from "react";
import inbox_icon from "../../../utils/images/inbox.png";
import emploi_exemple from "../../../utils/pdfs/emploi.pdf";
import { Col, Row, ListGroup, Card } from "react-bootstrap";

function Inbox() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      subject: "Message 1 Subject",
      date: "2024-04-08",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae eligendi sed, doloribus modi nulla quos id expedita earum laborum eius aperiam facere quas impedit dolores, nesciunt minus placeat! Laboriosam?",
    },
    {
      id: 2,
      subject: "Message 2 Subject",
      date: "2024-04-07",
      content: "Message 2 Content",
    },
    // Add more messages as needed
  ]);
  const [selectedMessage, setSelectedMessage] = useState(null);

  // Function to handle message selection
  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };
  return (
    <div>
      <div className="container mt-4 mb-4 d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img className="icons" src={inbox_icon} />
          <h1 className="fw-semibold mt-2">Boite de reception</h1>
        </div>
      </div>
      <hr />
      <Row>
        {/* Column for message summaries */}
        <Col sm={4}>
          <ListGroup>
            {messages.map((message) => (
              <ListGroup.Item
                key={message.id}
                action
                onClick={() => handleSelectMessage(message)}
                active={selectedMessage && selectedMessage.id === message.id}
              >
                <strong>{message.subject}</strong> - {message.date}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        {/* Column for selected message */}
        <Col sm={8}>
          <Card>
            <div className="my-3 mx-3">
              {selectedMessage && (
                <div>
                  <h3>{selectedMessage.subject}</h3>
                  <hr />
                  <p>{selectedMessage.content}</p>
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Row>
      <hr />
    </div>
  );
}

export default Inbox;
