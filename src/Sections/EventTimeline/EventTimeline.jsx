import React from "react";
import Timeline from "../../assets/EventTimeline/timeline.svg";
import "./EventTimelineStyles/EventTimeline.css";

function EventTimeline(props) {
  return (
    <section style={{ width: "100vw", height: "100vh" }} className="slides">
      <div className="Timeline">
        <img src={Timeline} alt="" className="timeline" />
        <div className="eventTimeline">
          <h1 id="eventTimeline">Event TimeLine</h1>
        </div>
      </div>
    </section>
  );
}

export default EventTimeline;
