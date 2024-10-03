import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Aura } from 'primeng/themes/aura';
import { MessagesComponent } from './components/messages/messages.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MessagesComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	private primeNgConfig = inject(PrimeNGConfig);

	constructor() {
		this.primeNgConfig.theme.set({ preset: Aura });
	}

	ngOnInit() {
		this.primeNgConfig.ripple.set(true);
	}
}
