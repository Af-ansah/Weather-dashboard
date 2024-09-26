import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ForecastComponent } from './forecast/forecast.component';
import { LocationComponent } from './location/location.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
  { path: 'forecast', component: ForecastComponent },
  { path: 'location', component: LocationComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
