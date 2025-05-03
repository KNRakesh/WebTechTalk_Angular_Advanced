import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { NeighbourComponent } from './neighbour/neighbour.component';
import { DetailComponent } from './detail/detail.component';
import { SharedService } from './shared.service';

export const routes: Routes = [
    { path: '', redirectTo: 'parent', pathMatch: 'full' },
    { path: 'parent', component: ParentComponent, providers: [SharedService] },
    { path: 'neighbour', component: NeighbourComponent, providers: [SharedService],
        children: [
            { path: 'detail', component: DetailComponent }
        ]
    },
    { path: '**', redirectTo: 'parent', pathMatch: 'full' },
];
