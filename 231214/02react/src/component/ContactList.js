import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const contactList = useSelector((state) => state.contactList);
  const keyWord = useSelector((state) => state.keyWord);
  useEffect(() => {
    if (keyWord !== "") {
      const list = contactList.filter((item) => item.name.includes(keyWord));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyWord, contactList]); //배열 추가 가능.
  return (
    <div>
      <SearchBox />
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
