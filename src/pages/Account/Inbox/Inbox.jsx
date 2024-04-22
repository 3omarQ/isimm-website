import React, { useState, useEffect } from "react"; // Add useEffect for fetching data
import inbox_icon from "../../../utils/images/inbox.png";
import emploi_exemple from "../../../utils/pdfs/emploi.pdf";
import { Col, Row, ListGroup, Card } from "react-bootstrap";

function Inbox() {
  const [messages, setMessages] = useState([]); /* Initial state for messages */
  const [selectedMessage, setSelectedMessage] =
    useState(null); /* Initial state for selected message */

  /* useEffect(() => {
    
    fetchMessages(); // Implement this function
  }, []); // Empty dependency array to fetch messages only once on component mount */

  /* const fetchMessages = async (username) => {
    try {
      
      const response = await fetch(`http://localhost:8080/api/isimm/students/${username}/messages`);
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error("Failed to fetch messages");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }; */

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

/*this is the inbox of a specific student that is logged in, i only wrote a general inbox page*/
