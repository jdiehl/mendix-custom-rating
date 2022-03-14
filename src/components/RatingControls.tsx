import { createElement, ReactElement } from "react";
import { RatingIcon } from "./RatingIcon";

interface RatingControlsProps {
    type: string;
    value: number;
    onChange?: (value: number) => void;
}

export function RatingControls({ type, value, onChange }: RatingControlsProps): ReactElement | null {
    if (type !== "Happiness" && type !== "StateOfMind") {
        console.error(`Invalid type: ${type}`);
        return null;
    }

    const controls: ReactElement[] = [];
    for (let level = 5; level > 0; level--) {
        const onClick = (): void => {
            if (level !== value && onChange) {
                onChange(level);
            }
        };
        controls.push(
            <RatingIcon key={level} type={type} level={level} disabled={level !== value} onClick={onClick} />
        );
    }

    return <div className="custom-rating">{controls}</div>;
}
