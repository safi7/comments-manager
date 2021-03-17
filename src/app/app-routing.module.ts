import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MainNavLayoutComponent from '@components/layouts/main-nav/index.component';
import PlainLayoutComponent from '@components/layouts/plain/plain.component';
import ListPostCommentsComponent from '@components/pages/posts/post-comments.component';
import ListPostsComponent from '@components/pages/posts/posts.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: '',
    component: PlainLayoutComponent,
    children: [
      { path: 'posts', component: ListPostsComponent, pathMatch: 'full' },
      { path: 'post/:id', component: ListPostCommentsComponent, pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: MainNavLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
