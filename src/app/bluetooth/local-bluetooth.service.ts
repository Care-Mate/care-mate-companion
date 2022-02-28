import { Injectable } from "@angular/core";
import { BluetoothScanResult, BluetoothConnectOptions, BluetoothEnabledResult } from "capacitor-bluetooth-serial";
import { Coordinate, BluetoothService } from "./bluetooth.service";

@Injectable({providedIn: 'root'})
export class LocalBluetoothService extends BluetoothService {

    enableBluetooth(): Promise<BluetoothEnabledResult> {
        throw new Error("Method not implemented.");
    }
    scanForDevices(): Promise<BluetoothScanResult> {
        throw new Error("Method not implemented.");
    }
    connectToDevice(address:string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    readPressureData(): void {
        var coordinates: Array<Array<number>> = new Array<Array<number>>(8);
        for(var i = 1; i<=8; i++)
        {
            for(var j = 1; j<=8; j++)
            {
                coordinates[i].push(Math.random());
            }
        }
        this.callbackEvent(coordinates);
    }    
}