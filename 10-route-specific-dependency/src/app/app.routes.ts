import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { NeighbourComponent } from './neighbour/neighbour.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    { path: '', redirectTo: 'parent', pathMatch: 'full' },
    { path: 'parent', component: ParentComponent },
    { path: 'neighbour', component: NeighbourComponent,
        children: [
            { path: 'detail', component: DetailComponent }
        ]
    },
    { path: '**', redirectTo: 'parent', pathMatch: 'full' },
];
