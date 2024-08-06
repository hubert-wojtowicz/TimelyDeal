import { useState } from "react";
import "./BookingSlot.css";

interface BookingSlotProps {
    slotId: string;
}

export const BookingSlot: React.FC<BookingSlotProps> = ({ slotId }) => {
    const [selected, setSelected] = useState(false);
    
    function handleClick(event: React.MouseEvent<HTMLDivElement>): void {
        setSelected(!selected);
    }

    return <div className={`booking-slot ${selected ? "selected" : "available"}`} onClick={handleClick}>
        <span>Booking Slot {slotId} - {selected ? "Selected" : "Available"}.</span>
    </div>;
};