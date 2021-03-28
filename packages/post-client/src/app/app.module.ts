import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedUIModule } from './shared-ui/shared-ui.module';
import { AppService } from './app.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedUIModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
