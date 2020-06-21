import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() featureSelective = new EventEmitter<string>();



    onSelect(feature: string) {
        this.featureSelective.emit(
            feature
        )
    }
}