import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]',
})
export class DropdownDirective {
    // isClosed = true;
    // constructor(private elRef: ElementRef) { }

    // @HostListener('click') click() {
    //     let element = this.elRef.nativeElement as HTMLElement;
    //     this.isClosed ? element.classList.add('open')
    //         : element.classList.remove('open');

    //     this.isClosed = !this.isClosed;
    // }

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') click() {
        this.isOpen = !this.isOpen;
    }
}