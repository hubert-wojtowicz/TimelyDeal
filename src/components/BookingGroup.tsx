import { useState } from "react";
import { BookingSlot } from "./BookingSlot";
import "./BookingGroup.css"

interface BookingGroupProps {
    slots: number;
  }

export const BookingGroup: React.FC<BookingGroupProps> = ({ slots }) => {
    const [selectedSlots, setSelectedSlots] = useState<boolean[]>(Array(slots).fill(false));
    const toggleSlot = (index: number) => {
        setSelectedSlots((prevSelectedSlots) => {
          const newSelectedSlots = [...prevSelectedSlots];
          newSelectedSlots[index] = !newSelectedSlots[index];
          return newSelectedSlots;
        });
      };

    const booked = selectedSlots.filter(Boolean).length;

    return <div className="booking-group">
            <p>Given '{booked}/{slots}' availiable slots:</p>
            {Array.from({ length: slots }).map((_, index) => (
                <BookingSlot 
                    key={index}
                    slotId={index.toString()}
                    selected={selectedSlots[index]}
                    toggleSlot={() => toggleSlot(index)}
                />
            ))}
        </div>;
};
