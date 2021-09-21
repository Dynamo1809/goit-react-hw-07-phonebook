import Contact from 'components/Contact';

const ContactList = ({contacts}) => (
  <ul className="Contacts-list">
    {contacts.map( contact => (
      <Contact key={contact.id} {...contact} />
    ))}  
  </ul>
);

export default ContactList;