'use client'
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function MainPageSwitch () {
    return(
        <div className="flex items-center space-x-2 text-white">
            <Switch id="curious-switch"/>
            <Label>Switch Pages</Label>
        </div>
    )
}