import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import { useState } from 'react';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = event => {
    const type = event.target.textContent;
    switch (type) {
      case 'good': setGood(prev => prev + 1);
        break;
      case 'neutral': setNeutral(prev => prev + 1);
        break;
      case 'bad': setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  }
  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;

  }
  
  const countPositiveFeedbackPercentage =() => {
    const totalVoices = countTotalFeedback(good, neutral, bad);
    return Math.round((good / totalVoices) * 100) + '%';
  }
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={leaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback(good, neutral, bad) > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positiveVoices={countPositiveFeedbackPercentage()}
          />
          ) : (<Notification message="There is no feedback"></Notification>)
        }
      </Section>  
    </>
  );
};