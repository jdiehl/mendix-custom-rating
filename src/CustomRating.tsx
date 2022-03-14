import { ReactElement, createElement } from "react";
import { Big } from "big.js";
import { RatingControls } from "./components/RatingControls";

import { CustomRatingContainerProps } from "../typings/CustomRatingProps";

import "./ui/CustomRating.css";

export function CustomRating({ type, rateAttribute, onChange }: CustomRatingContainerProps): ReactElement | null {
    if (!rateAttribute || rateAttribute.status !== "available" || rateAttribute.value === undefined) {
        return null;
    }

    const update = (value: number): void => {
        rateAttribute.setValue(new Big(value));
        if (onChange?.canExecute && !onChange.isExecuting) {
            onChange.execute();
        }
    };

    return <RatingControls type={type} value={rateAttribute.value.toNumber()} onChange={update} />;
}
