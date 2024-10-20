import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import SearchBox from "../../components/SearchBox/SearchBox.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";

import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  return (
    <div>
      <h1 className={s.title_header}>
        Phone<span className={s.text_span}>Book</span>
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
