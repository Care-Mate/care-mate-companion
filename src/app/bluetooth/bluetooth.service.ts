import { Injectable } from '@angular/core'
import { BluetoothConnectOptions, BluetoothScanResult } from 'capacitor-bluetooth-serial';

export interface Coordinate {
    x: number;
    y: number;
    value: number;
}

@Injectable()
export abstract class BluetoothService {
    abstract scanForDevices(): Promise<BluetoothScanResult>;
    abstract connectToDevice(options: BluetoothConnectOptions): Promise<void>;
    abstract readPressureData(): Promise<Coordinate[]>;
}