import React from "react"
import Card from "react-bootstrap/Card"
import buzz from './buzz.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        {'MyManny'}
        <Card.Img variant="top" src={buzz} /> 
        <Card.Body>
            <Card.Title> Benjamin McConnaughy </Card.Title>
            <Card.Text>
            I am a driven new Web-Devloper ready for anything, and ready to learn anything.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard