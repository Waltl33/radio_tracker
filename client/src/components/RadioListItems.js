import React from "react";
import { Card } from "semantic-ui-react";

function RadioListItems({radio}) {
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="Nope" />
        </div>
        <div className="content">
          <div className="serial number">{radio.model}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            POKEMON HP HERE hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default RadioListItems;
