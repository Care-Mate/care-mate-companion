import { Injectable } from "@angular/core";
import { BluetoothSerial, BluetoothScanResult, BluetoothConnectOptions, BluetoothEnabledResult } from "capacitor-bluetooth-serial";
import { Coordinate, BluetoothService } from "./bluetooth.service";

@Injectable({providedIn: 'root'})
export class HC06BluetoothService extends BluetoothService {

    address:string;

    enableBluetooth(): Promise<BluetoothEnabledResult> {
        return BluetoothSerial.enable();
    }
    scanForDevices(): Promise<BluetoothScanResult> {
        return BluetoothSerial.scan();
    }
    connectToDevice(address:string): Promise<void> {
        this.address = address;
        return BluetoothSerial.connect({address:this.address});
    }
    readPressureData(): Promise<Array<Array<number>>> {
        return new Promise<Array<Array<number>>>((resolve, reject) => {
            var coordinates: Array<Array<number>> = new Array<Array<number>>();
            BluetoothSerial.readUntil(
                {
                    address: this.address, 
                    delimiter: String.fromCharCode(126)
                }).then(res => {
                    var data = res.data;
                    console.log(data);
                    var counter = 0;
    
                    for(var i = 0; i<8; i++)
                    {
                        coordinates.push(new Array<number>())
                        for(var j = 0; j<8; j++)
                        {
                            if(counter >= data.length) {
                                coordinates[i].push(0);
                            }
                            else {
                                coordinates[i].push(data.charCodeAt(counter));
                                counter++;
                            }
                        }
                    }
                    if (this.callbackEvent) {
                        this.callbackEvent(coordinates);
                    }
                    resolve(coordinates);
                }).catch(error => {
                    console.warn(error);
                    reject(error)
                });
        })
    }
}