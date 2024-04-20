import React from 'react';

const MoodMessage = ({ user, mood, desiredMood }) => {
  return (
    <div>
      {mood === "No mood logged today" ? (
        <p>No mood logged today</p>
      ) : (
        <p>
          {user && mood && desiredMood && `Hi ${user}! Today, you are ${mood}. Check out recommendations to make you ${desiredMood}`}
        </p>
      )}
    </div>
  );
};

export default MoodMessage;
