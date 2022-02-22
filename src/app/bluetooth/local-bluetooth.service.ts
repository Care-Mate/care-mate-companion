import { Injectable } from "@angular/core";
import { BluetoothScanResult, BluetoothConnectOptions, BluetoothEnabledResult } from "capacitor-bluetooth-serial";
import { Coordinate, BluetoothService } from "./bluetooth.service";

@Injectable({providedIn: 'root'})
export class LocalBluetoothService implements BluetoothService {
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
        return new Promise<Array<Array<number>>>((resolve, reject)=>{
            var coordinates: Array<Array<number>> = [];
            for(var i = 1; i<=8; i++)
            {
                coordinates.push([])
                for(var j = 1; j<=8; j++)
                {
                    coordinates[i].push(Math.random());
                }
            }
            resolve(coordinates);
        });
    }
    
}