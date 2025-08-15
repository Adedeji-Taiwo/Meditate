import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState,
} from "react";

export interface TimerContextProps {
    duration: number;
    setDuration: Dispatch<SetStateAction<number>>;
}

export const TimerContext = createContext<TimerContextProps>({
    duration: 10,
    setDuration: () => {},
});

export interface TimerProviderProps {
    children: ReactNode;
}

const TimerProvider = ({ children }: TimerProviderProps) => {
    const [duration, setDuration] = useState(10);

    return (
        <TimerContext.Provider value={{ duration, setDuration }}>
            {children}
        </TimerContext.Provider>
    );
};

export default TimerProvider;