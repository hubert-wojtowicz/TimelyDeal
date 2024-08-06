import { useState } from "react";
import { BookingSlot } from "./BookingSlot";
import "./BookingGroup.css"

interface BookingGroupProps {
    slots: number;
  }

export const BookingGroup: React.FC<BookingGroupProps> = ({ slots }) => {
    const [booked, setBooked] = useState(0);

    return <div className="booking-group">
            <p>Given '{booked}/{slots}' availiable slots:</p>
            {Array.from({ length: slots }).map((_, index) => (
                <BookingSlot key={index} slotId={index.toString()} />
            ))}
        </div>;
};
