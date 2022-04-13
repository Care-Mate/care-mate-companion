import { Injectable } from '@angular/core'
import { BluetoothConnectOptions, BluetoothEnabledResult, BluetoothScanResult } from 'capacitor-bluetooth-serial';

export interface Coordinate {
    x: number;
    y: number;
    value: number;
}

type DataReceivedCallback = (data: Array<Array<number>>) => void;

@Injectable()
export abstract class BluetoothService {
    protected callbackEvent: DataReceivedCallback;
    public setDataReceivedCallback(callback: DataReceivedCallback) {
        this.callbackEvent = callback;
    }

    abstract enableBluetooth(): Promise<BluetoothEnabledResult>;
    abstract scanForDevices(): Promise<BluetoothScanResult>;
    abstract connectToDevice(address:string): Promise<void>;
    abstract readPressureData(): Promise<Array<Array<number>>>;
}