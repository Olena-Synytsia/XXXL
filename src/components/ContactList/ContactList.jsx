import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from "../../redux/contacts/selectors.js";

import { motion } from "framer-motion";
import { slideInFromLeft } from "../../motion/motion.js";
import Loader from "../Loader/Loader.jsx";
import toast from "react-hot-toast";

import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchContacts());
      } catch {
        toast.error("Error fetching contacts:");
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className={s.container}>
      {loading && <Loader />}
      {error && <h2>Error...</h2>}
      <ul className={s.element}>
        {filteredContacts.map((contact) => (
          <motion.li
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft(0.7)}
            className={s.item}
            key={contact.id}
          >
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
