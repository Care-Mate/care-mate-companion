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
    readPressureData(): void {
        var coords: Array<Array<number>> = new Array<Array<number>>(8);
        BluetoothSerial.readUntil(
            {
                address: this.address, 
                delimiter: String.fromCharCode(255)
            }).then(res => {
                var data = res.data;
                var counter = 0;

                for(var i = 1; 1<=8; i++) {
                    for(var j = 1; j<=8; j++) {
                        if(counter >= data.length) {
                            coords[i].push(0);
                        }
                        else {
                            coords[i].push(data.charCodeAt(counter));
                            counter++;
                        }
                    }
                }
                this.callbackEvent(coords);
            }).catch(error => {
                console.warn(error);
            });
    }
}