// app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contacts/contacts.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsGalleryComponent } from './components/projects-gallery/projects-gallery.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects-gallery', component: ProjectsGalleryComponent },
];
