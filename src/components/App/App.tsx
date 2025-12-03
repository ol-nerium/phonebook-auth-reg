import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '@/pages/HomePage/HomePage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';
import TasksList from '../TasksList/TasksList';
import NotFound from '../NotFound/NotFound';
import TasksListItem from '../TasksListItem/TasksListItem';
import AppBar from '../AppBar/AppBar';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<TasksList />} />
        <Route path="/tasks/:taskId" element={<TasksListItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
