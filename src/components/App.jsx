import React from "react";
import { createAdd } from "typescript";
import contacts from "../contacts";
import Card from "./card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
     {contacts.map((contact)=>(
      <Card
        name={contact.name}
        img={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
     ))}
    
    </div>
  );
}

export default App;
