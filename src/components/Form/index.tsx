import React from "react";
import Button from "../Button";

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form>
        <div>
          <label htmlFor="task">Add a new study</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="What do you want to study"
            required
          />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
