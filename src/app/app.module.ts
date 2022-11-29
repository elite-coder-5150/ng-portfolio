import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';
import { SinglePortfolioItemComponent } from './single-portfolio-item/single-portfolio-item.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactFormComponent,
        HeaderComponent,
        FooterComponent,
        PortfolioItemComponent,
        NewsletterFormComponent,
        SinglePortfolioItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
