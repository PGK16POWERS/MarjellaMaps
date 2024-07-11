import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { GotoComponent } from './goto/goto.component';
import { ExploreComponent } from './explore/explore.component';
import { SavedComponent } from './saved/saved.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    title:'Search',
    path: '',
    component: SearchComponent
  },
  {
    title:'Go To',
    path: 'go-to',
    component: GotoComponent
  },
  {
    title:'Explore',
    path: 'explore',
    component: ExploreComponent
  },
  {
    title:'Saved',
    path: 'saved',
    component: SavedComponent
  },
  {
    title:'Profile',
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
