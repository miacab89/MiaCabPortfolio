'use client'
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function NewsFeedSwitch () {
    return(
        <div className="flex items-center space-x-2 text-white">
            <Switch id="curious-switch"/>
            <Label>Curious Feed</Label>
        </div>
    )
}