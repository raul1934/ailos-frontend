import { AfterViewInit, Component, forwardRef, Injector, Input, Optional, Self} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'als-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => InputComponent),
       multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor,AfterViewInit  {
 

  @Input() label = "";
  @Input() mask = "";
  @Input() placeholder = "";
  @Input() dropSpecialCharacters = false;

  public control!: FormControl;

  constructor( private injector: Injector){}

  ngAfterViewInit(): void {
    const ngControl: NgControl | null = this.injector.get(NgControl, null);
    if (ngControl) {
      this.control = ngControl.control as FormControl;
    }
  }
  
  writeValue(obj: any): void {
    this._value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get value() {
    return this._value;
  }

  set value(value: any) {
    if (this._value !== value) {
      this._value = value;
      this.onChanged(value);
    }
  }

  onBlur() {
    this.onTouched();
  }

  private onTouched = () => {};
  private onChanged = (_: any) => {};
  disabled: boolean = false;

  private _value: any;
}
