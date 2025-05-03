import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { FakeAuthenticationService } from './services/fake-authentication.service';
import { HeaderComponent } from './header/header.component';
import { InjectionToken } from '@angular/core';

const APP_CONFIG = Object.freeze({
  apiURL: 'http://localhost:5000',
  isTest: true,
});

export const APP_CONFIG_TOKEN = new InjectionToken<any>('AppConfig')

export function resolveAuth(isTest: Boolean) {
  return isTest ? new FakeAuthenticationService() : new AuthenticationService()
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: AuthenticationService,
      useClass: FakeAuthenticationService,
    },
    {
      provide: AuthenticationService,
      useExisting: FakeAuthenticationService,
    },
    // {
    //   provide: 'APP_CONFIG',
    //   useValue: APP_CONFIG,
    // },
    {
      provide: APP_CONFIG_TOKEN,
      useValue: APP_CONFIG,
    },
    {
      provide: 'IS_TEST', useValue: false
    },
    {
      provide: AuthenticationService, useFactory: resolveAuth, deps: ['IS_TEST']
    }
  ],
})
export class AppComponent implements OnInit {
  constructor(
    private auth: AuthenticationService,
    // @Inject('APP_CONFIG') appConfig: any
    @Inject(APP_CONFIG_TOKEN) appConfig: any
  ) {
    console.log(appConfig)
  }

  ngOnInit(): void {
    this.auth.init();
  }

  getAuthStatus() {
    console.log(this.auth.isLoggedIn);
  }
}
