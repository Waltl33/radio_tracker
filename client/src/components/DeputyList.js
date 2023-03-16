import React from "react";
import DeputyListItem from "./DeputyListItem";
import { Card } from "semantic-ui-react";

function DeputyList({deputy}) {

  const deputyCards = deputy.map((deputy => (
    <DeputyListItem
      key = {deputy.id}
      deputy = {deputy}/>
  )))
  return (
    <Card.Group itemsPerRow={6}>
      <h1>{deputyCards}</h1>
    </Card.Group>
  );
}

export default DeputyList;