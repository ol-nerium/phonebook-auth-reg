import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from '@/redux/contacts/operations';
import { Outlet } from 'react-router-dom';
import ContactsFilter from '@/components/ContactsFilter/ContactsFilter';
import ContactsForm from '@/components/ContactsForm/ContactsForm';
import ContactsList from '@/components/ContactsList/ContactsList';

export default function ContactsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsFilter />
      <ContactsForm />
      <ContactsList />
      <Outlet />
    </>
  );
}
