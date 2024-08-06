import "./BookingSlot.css";

interface BookingSlotProps {
    slotId: string;
    selected: boolean;
    toggleSlot: () => void;
}

export const BookingSlot: React.FC<BookingSlotProps> = ({ slotId, selected, toggleSlot }) => {    
    function handleClick(event: React.MouseEvent<HTMLDivElement>): void {
        toggleSlot();
    }

    return <div className={`booking-slot ${selected ? "selected" : "available"}`} onClick={handleClick}>
        <span>Booking Slot {slotId} - {selected ? "Selected" : "Available"}.</span>
    </div>;
};