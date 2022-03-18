import classes from './App.module.css';
import Login from './pages/Login/Login'
import { Route, Routes } from 'react-router';
import SignUp from './pages/SignUp/SignUp';
import Layout from './Components/Layout/Layout';
import Home from './pages/Home/Home';
import QuestionsAnswers from './pages/QuestionsAnswers/QuestionsAnswers';
import UpcomingInterviews from './pages/UpcomingInterviews/UpcomingInterviews';
import InterviewHistory from './pages/InterviewHistory/InterviewHistory';

function App() {
  return (
    <div className={classes.App}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/questions-answers" element={<QuestionsAnswers/>} />
          <Route path="/upcoming-interviews" element={<UpcomingInterviews />} />
          <Route path="/interview-history" element={<InterviewHistory />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </div>
  );
}

export default App;
