import React from "react";
// import { v4 } from "uuid";
//We remove the uuid library because Firebase will now create IDs for our tickets. We should no longer do this in our application.
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import Moment from "moment";
import { useFirestore } from "react-redux-firebase";

function NewTicketForm(props) {
  const firestore = useFirestore();
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addTicketToFirestore}
        buttonText="Help!"
      />
    </React.Fragment>
  );

  function addTicketToFirestore(event) {
    event.preventDefault();
    props.onNewTicketCreation();
    return firestore.collection("tickets").add({
      //We need to specify which collection we will add a ticket to. Since the collection will hold tickets, we'll call it tickets. Note that unlike with a SQL database, our Firestore database doesn't care if this collection doesn't exist in the database yet. A collection is loosely equivalent to an SQL table - except we'd need to create the table along with a schema if we were using SQL.
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      timeOpen: firestore.FieldValue.serverTimestamp(),
    });
  }
  // event.target gives us access to the event that was just fired. In this case, we just had a submit event. We can actually grab the values that came from that submit event.
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func,
};

export default NewTicketForm;
