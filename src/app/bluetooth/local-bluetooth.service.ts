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
    readPressureData(): Promise<Array<Array<number>>> {
        var coordinates: Array<Array<number>> = new Array<Array<number>>();
        for(var i = 0; i<8; i++)
        {
            coordinates.push(new Array<number>())
            for(var j = 0; j<8; j++)
            {
                coordinates[i].push(Math.random());
            }
        }
        if (this.callbackEvent) {
            this.callbackEvent(coordinates);
        }
        return new Promise<Array<Array<number>>>((resolve) => {
            resolve(coordinates);
        });
    }    
}