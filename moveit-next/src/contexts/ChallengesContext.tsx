import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json';

interface ChallengesContextData {
        startNewChallenge: ()=>void,
        level: number,
        levelUp: ()=>void,
        currentExperience: number,
        challengesCompleted: number
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeindex];
  }

  return (
    <ChallengesContext.Provider
      value={{
        startNewChallenge,
        level,
        levelUp,
        currentExperience,
        challengesCompleted
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
