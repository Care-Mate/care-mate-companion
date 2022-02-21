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
    readPressureData(): Promise<Coordinate[]> {
        return new Promise<Coordinate[]>((resolve, reject)=>{
            var coordinates: Array<Coordinate> = [];
            for(var i = 1; i<=8; i++)
            {
                for(var j = 1; j<=8; j++)
                {
                    coordinates.push({x: i, y: j, value: Math.random()});
                }
            }
            resolve(coordinates);
        });
    }
    
}