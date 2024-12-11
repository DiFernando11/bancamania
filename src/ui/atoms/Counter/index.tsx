import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

// Tipos de props
type CountdownTimerProps = {
  start?: number;
  direction?: "forward" | "backward";
  reset?: boolean;
  onReachTime?: () => void;
  targetTime?: number;
  stopAt?: number;
};

// Tipos para la referencia
export type TimerRefType = {
  getTime: () => number;
  resetTimer: () => void;
  setTimeManually: (newTime: number) => void;
};

// Función de formateo de tiempo
const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
};

// Componente principal
const CountdownTimer = forwardRef<TimerRefType, CountdownTimerProps>(
  (
    {
      start = 0,
      direction = "forward",
      reset = false,
      onReachTime,
      targetTime,
      stopAt = direction === "backward" ? 0 : 300,
    },
    ref
  ) => {
    const [time, setTime] = useState<number>(start);
    const timeRef = useRef<number>(start);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Función para iniciar el temporizador
    const startTimer = () => {
      clearTimer(); // Limpia el intervalo existente

      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          const newTime = direction === "forward" ? prevTime + 1 : prevTime - 1;

          // Verifica límites para detener el temporizador
          if (
            (direction === "forward" && newTime >= stopAt) ||
            (direction === "backward" && newTime <= 0)
          ) {
            clearTimer();
            return direction === "backward" ? 0 : stopAt;
          }

          timeRef.current = newTime;
          return newTime;
        });
      }, 1000);
    };

    // Función para limpiar el temporizador
    const clearTimer = () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    // Efecto inicial para iniciar el temporizador
    useEffect(() => {
      startTimer();
      return clearTimer; // Limpia cuando se desmonta el componente
    }, [direction, stopAt]);

    // Reinicio del temporizador
    useEffect(() => {
      if (reset) {
        clearTimer();
        timeRef.current = start;
        setTime(start);
        startTimer();
      }
    }, [reset, start]);

    // Acción al alcanzar el tiempo objetivo
    useEffect(() => {
      if (time === targetTime && onReachTime) {
        onReachTime();
      }
    }, [time, targetTime, onReachTime]);

    // Exponer funciones al componente padre
    useImperativeHandle(ref, () => ({
      getTime: () => timeRef.current,
      resetTimer: () => {
        clearTimer();
        timeRef.current = start;
        setTime(start);
        startTimer();
      },
      setTimeManually: (newTime: number) => {
        clearTimer();
        timeRef.current = newTime;
        setTime(newTime);
        startTimer();
      },
    }));

    return (
      <div className="p-4 bg-gray-100 rounded-md text-xl font-bold text-center">
        {formatTime(time)}
      </div>
    );
  }
);

CountdownTimer.displayName = "CountdownTimer";

export default CountdownTimer;
